/**
 * Fetch the latest Instagram posts from a Behold JSON feed at build time.
 *
 * Writes public/instagram/feed.json plus one image per post, so the About page
 * serves everything from this site: visitors never hit Behold (each feed
 * request counts against Behold's monthly view limit) and we don't depend on
 * Behold's image URLs staying valid.
 *
 * Never fails the build: if BEHOLD_FEED_URL is unset or the fetch errors, an
 * empty feed is written and the About page shows a "Follow us" link instead.
 *
 * Usage: BEHOLD_FEED_URL=https://feeds.behold.so/XXXX npm run instagram
 */
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT_DIR = fileURLToPath(new URL('../public/instagram', import.meta.url))
const MAX_POSTS = 6
const FALLBACK_ALT = 'Instagram post from Culver City Youth Lacrosse'

async function writeFeed(posts) {
	await writeFile(join(OUT_DIR, 'feed.json'), JSON.stringify({ posts }, null, '\t') + '\n')
}

function altTextFor(post) {
	if (post.altText) return post.altText
	const caption = (post.prunedCaption || '').replace(/\s+/g, ' ').trim()
	if (!caption) return FALLBACK_ALT
	return caption.length > 120 ? `${caption.slice(0, 117)}…` : caption
}

async function main() {
	await rm(OUT_DIR, { recursive: true, force: true })
	await mkdir(OUT_DIR, { recursive: true })

	const feedUrl = process.env.BEHOLD_FEED_URL?.trim()
	if (!feedUrl) {
		console.warn('[instagram] BEHOLD_FEED_URL not set; writing empty feed.')
		return writeFeed([])
	}

	try {
		const res = await fetch(feedUrl)
		if (!res.ok) throw new Error(`feed request failed: ${res.status}`)
		const feed = await res.json()

		const posts = []
		// Walk the whole feed so a skipped post is backfilled by the next one.
		for (const post of feed.posts ?? []) {
			if (posts.length === MAX_POSTS) break
			// 700px webp from Behold; video posts use their thumbnail/first frame here.
			const size = post.sizes?.medium
			if (!size?.mediaUrl || !post.permalink) continue

			const imageRes = await fetch(size.mediaUrl)
			if (!imageRes.ok) {
				console.warn(`[instagram] skipping ${post.id}: image ${imageRes.status}`)
				continue
			}
			const file = `${post.id}.webp`
			await writeFile(join(OUT_DIR, file), Buffer.from(await imageRes.arrayBuffer()))

			posts.push({
				id: post.id,
				permalink: post.permalink,
				image: `instagram/${file}`,
				width: size.width,
				height: size.height,
				alt: altTextFor(post),
				isVideo: post.mediaType === 'VIDEO'
			})
		}

		await writeFeed(posts)
		console.log(`[instagram] saved ${posts.length} posts`)
	} catch (error) {
		console.warn(`[instagram] ${error.message}; writing empty feed.`)
		await writeFeed([])
	}
}

main()
