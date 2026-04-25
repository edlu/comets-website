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

		<section class="about-section director" aria-labelledby="director-heading">
			<h2 id="director-heading">Meet the Director</h2>
			<div class="director__content">
				<figure class="director__photo">
					<img
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
			<div class="instagram-grid">
				<a
					v-for="tile in instagramTiles"
					:key="tile.id"
					class="instagram-tile"
					:href="instagramProfileUrl"
					target="_blank"
					rel="noopener noreferrer"
					:aria-label="`View more on Instagram: ${tile.alt}`"
				>
					<img :src="tile.src" :alt="tile.alt" loading="lazy" />
				</a>
			</div>
		</section>
	</main>
	<SignUpForm />
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'

const instagramProfileUrl = 'https://www.instagram.com/culvercityyouthlacrosse/'

const instagramTiles = [
	{ id: 'ig-1', src: 'https://picsum.photos/seed/ccyl-ig-1/600/600', alt: 'Practice highlight' },
	{ id: 'ig-2', src: 'https://picsum.photos/seed/ccyl-ig-2/600/600', alt: 'Game day moment' },
	{ id: 'ig-3', src: 'https://picsum.photos/seed/ccyl-ig-3/600/600', alt: 'Team huddle' },
	{ id: 'ig-4', src: 'https://picsum.photos/seed/ccyl-ig-4/600/600', alt: 'Skills training' },
	{ id: 'ig-5', src: 'https://picsum.photos/seed/ccyl-ig-5/600/600', alt: 'Community event' },
	{ id: 'ig-6', src: 'https://picsum.photos/seed/ccyl-ig-6/600/600', alt: 'Player spotlight' }
]
</script>

<style scoped>
.page {
	max-width: var(--breakpoint-desktop-xlarge);
	margin: 0 auto;
	padding: var(--space-4);
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
}

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
	max-width: 48rem;
	font-size: var(--font-size-h4);
	line-height: var(--line-height-relaxed);
	font-weight: var(--font-weight-bold);
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
	display: block;
	width: 100%;
	height: auto;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	border-radius: var(--space-1);
	border: 1px solid var(--color-border);
}

.director__photo figcaption {
	margin-top: var(--space-0-5);
	font-size: var(--font-size-small);
	color: var(--color-text-secondary);
}

.social-links {
	margin: 0;
	padding-left: 1.25rem;
	display: flex;
	flex-direction: column;
	gap: var(--space-0-5);
}

.social-links a {
	color: var(--teal-11);
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
	display: block;
	border-radius: var(--space-1);
	overflow: hidden;
	border: 1px solid var(--color-border);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.instagram-tile img {
	display: block;
	width: 100%;
	height: auto;
	aspect-ratio: 1 / 1;
	object-fit: cover;
}

.instagram-tile:hover {
	transform: translateY(-2px);
	box-shadow: var(--shadow-2);
}

.instagram-tile:focus-visible {
	outline: 2px solid var(--yellow-9);
	outline-offset: 2px;
}

@media (min-width: 48rem) {
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

