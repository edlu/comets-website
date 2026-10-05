<template>
	<Navigation />
	<main class="page">
		<h1>About Us</h1>
		<section class="about-section" aria-labelledby="mission-heading">
			<h2 id="mission-heading">Mission Statement</h2>
			<p class="belief large">
				We believe lacrosse is more than a sport-it is a pathway to personal growth and connection that are the
				building blocks for a life of success, passion and fulfillment.
			</p>
		</section>

		<!--//
		<section class="about-section director" aria-labelledby="director-heading">
			<h2 id="director-heading">Meet the Director</h2>
			<div class="director__content">
				<figure class="director__photo">
					<img
						class="media-frame"
						src="https://picsum.photos/seed/sindelar/900/600"
						alt="Image of Sindelars"
						loading="lazy"
					/>
					<figcaption>Image placeholder - replace with Sindelars photo.</figcaption>
				</figure>
				<div class="director__text">
					<p class="large">
						Sindelars leads Culver City Youth Lacrosse with a player-first approach focused on development,
						confidence, and community. The goal is to create an environment where athletes can build skills,
						learn teamwork, and enjoy the game at every stage.
					</p>
				</div>
			</div>
		</section>
//-->

		<section class="about-section" aria-labelledby="social-heading">
			<h2 id="social-heading">CCYL Social Links</h2>
			<ul class="social-links">
				<li>
					<a href="https://www.instagram.com/culvercityyouthlacrosse/" target="_blank" rel="noopener noreferrer">
						Instagram
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						Facebook
					</a>
				</li>
			</ul>
		</section>

		<section class="about-section" aria-labelledby="instagram-heading">
			<h2 id="instagram-heading">From Our Instagram</h2>
			<p class="large">
				Recent highlights from practices, games, and community moments.
			</p>
			<template v-if="instagramLoaded">
				<div v-if="instagramPosts.length" class="instagram-grid">
					<a
						v-for="post in instagramPosts"
						:key="post.id"
						class="instagram-tile surface"
						:href="post.permalink"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							:src="getAssetPath(post.image)"
							:width="post.width"
							:height="post.height"
							:alt="post.alt"
							loading="lazy"
						/>
						<IconPlayerPlayFilled v-if="post.isVideo" class="instagram-tile__video" :size="20" aria-hidden="true" />
					</a>
				</div>
				<p class="large">
					<a :href="instagramProfileUrl" target="_blank" rel="noopener noreferrer">Follow @culvercityyouthlacrosse on Instagram</a>
				</p>
			</template>
		</section>
	</main>
	<SignUpForm />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { IconPlayerPlayFilled } from '@tabler/icons-vue'
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import { getAssetPath } from '@/utils/assets'

const instagramProfileUrl = 'https://www.instagram.com/culvercityyouthlacrosse/'

/** Latest posts, generated at build time by scripts/fetch-instagram.mjs. */
const instagramPosts = ref([])
const instagramLoaded = ref(false)

onMounted(async () => {
	try {
		const res = await fetch(getAssetPath('instagram/feed.json'))
		const feed = res.ok ? await res.json() : null
		instagramPosts.value = Array.isArray(feed?.posts) ? feed.posts : []
	} catch {
		// Missing or invalid feed (e.g. local dev): fall back to the follow link only.
		instagramPosts.value = []
	} finally {
		instagramLoaded.value = true
	}
})
</script>

<style scoped>
.about-section {
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
}

.about-section h2 {
	margin: 0;
}

.about-section p {
	margin: 0;
	max-width: 42rem;
	color: var(--color-text-secondary);
}

.belief {
	margin: 0;
	padding-left: var(--space-1);
	font-style: italic;
	max-width: 48rem;
	font-size: var(--font-size-h4);
	line-height: var(--line-height-relaxed);
	font-weight: var(--font-weight-light);
	color: var(--teal-12);
}

.director__content {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
}

.director__photo {
	margin: 0;
	width: 100%;
	max-width: 40rem;
}

.director__photo img {
	aspect-ratio: 3 / 2;
}

.social-links {
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: var(--space-0-5);
}

.social-links a {
	font-weight: var(--font-weight-medium);
	text-decoration: none;
}

.social-links a:hover,
.social-links a:focus-visible {
	text-decoration: underline;
}

.instagram-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: var(--space-1);
}

.instagram-tile {
	position: relative;
	display: block;
	overflow: hidden;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.instagram-tile img {
	display: block;
	width: 100%;
	height: auto;
	aspect-ratio: 1 / 1;
	object-fit: cover;
}

.instagram-tile__video {
	position: absolute;
	top: var(--space-0-5);
	right: var(--space-0-5);
	color: white;
	filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.5));
}

.instagram-tile:hover {
	transform: translateY(-2px);
	box-shadow: var(--shadow-elevation-medium);
}

.instagram-tile:focus-visible {
	outline: 2px solid var(--yellow-9);
	outline-offset: 2px;
}

@media (min-width: 768px) { /* --breakpoint-tablet */
	.director__content {
		flex-direction: row;
		align-items: flex-start;
	}

	.director__photo {
		flex: 1;
	}

	.director__text {
		flex: 1;
	}

	.instagram-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}
</style>
