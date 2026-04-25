<template>
	<Navigation />
	<section class="hero">
		<HeroMediaCarousel :slides="heroSlides" />
	</section>
	<main>
		<!-- <img :src="getAssetPath('assets/comet-tail-bg.svg')" class="comet-tail-bg-top" aria-hidden="true" /> -->
		
		<section
			class="title"
			v-motion
			:initial="sectionMotionInitial"
			:visible-once="sectionMotionVisible(120)"
		>
				<div class="logo-comets-wrapper"><img :src="getAssetPath('assets/comets-logo.png')" alt="Culver City Comets Logo" class="logo-comets" /></div>
				<div class="title__content">
					<div class="headings">
					  <h1>CULVER CITY YOUTH LACROSSE</h1>
					  <h2>PLAY LAX WITH US!</h2>
					</div>
					<div class="intro">
						<p class="large">
							A passionate community-based youth program dedicated to developing young athletes through the sport of Lacrosse.
						</p>
						<p class="large">
							We foster a culture where EFFORT, PERSONAL GROWTH and TEAMWORK are the measure of success, not just goals and wins.
						</p>
						<p class="large">
							Our programs are available <strong>YEAR-ROUND</strong> for BOYS & GIRLS age 4-17.
						</p>
						<p class="large">
							ALL skills levels welcome!  Whether your child is new to Lacrosse or wants to advance their skills we have a place for them.
						</p>
						<Button variant="primary" to="/register">
							Schedule a Free Trial Practice
						</Button>
					</div>
				</div>
		</section>	

		<section
			class="age-groups"
			v-motion
			:initial="sectionMotionInitial"
			:visible-once="sectionMotionVisible(160)"
		>
			<h2>AGE GROUPS</h2>
			<div class="age-groups__list">
				<div
					class="age-group-card"
					v-motion
					:initial="cardMotionInitial"
					:visible-once="cardMotionVisible(140)"
				>
					<div class="age-group-card__thumb">
						<img :src="getAssetPath('assets/ages-little-sticks.jpg')" alt="Little Sticks" class="age-group-card__thumb-image" />
					</div>
					<div class="age-group-card__header">
						<div class="age-group-card__meta">
							<h3 class="age-group-card__title">LITTLE STICKS</h3>
							<h4 class="age-group-card__label">Age 4-7</h4>
						</div>
					</div>
					<p class="age-group-card__description">Introduction to lacrosse fundamentals through fun games and activities. Focus on basic skills and love of the game.</p>
					<Button variant="primary" :to="{ path: '/register', query: { ageGroup: '4-7' } }">Register</Button>
				</div>
				<div
					class="age-group-card"
					v-motion
					:initial="cardMotionInitial"
					:visible-once="cardMotionVisible(300)"
				>
					<div class="age-group-card__thumb">
						<img :src="getAssetPath('assets/ages-youth.jpg')" alt="Youth" class="age-group-card__thumb-image" />
					</div>
					<div class="age-group-card__header">
						<div class="age-group-card__meta">
							<h3 class="age-group-card__title">YOUTH</h3>
								<h4 class="age-group-card__label">Age 8-12</h4>
						</div>
					</div>
					<p class="age-group-card__description">Develop core skills and game understanding through practices and competitive play.</p>
					<Button variant="primary" :to="{ path: '/register', query: { ageGroup: '8-12' } }">Register</Button>
				</div>
				<div
					class="age-group-card"
					v-motion
					:initial="cardMotionInitial"
					:visible-once="cardMotionVisible(460)"
				>
					<div class="age-group-card__thumb">
						<img :src="getAssetPath('assets/ages-upper.jpg')" alt="Upper" class="age-group-card__thumb-image" />
					</div>
					<div class="age-group-card__header">
						<div class="age-group-card__meta">
							<h3 class="age-group-card__title">UPPER</h3>
							<h4 class="age-group-card__label">Age 13-17</h4>
						</div>	
					</div>
					<p class="age-group-card__description">Advanced training for competitive players looking to excel at the highest level of youth lacrosse.</p>
					<Button variant="primary" :to="{ path: '/register', query: { ageGroup: '13-17' } }">Register</Button>
				</div>
			</div>
		</section>

		<section
			class="testimonials"
			aria-labelledby="testimonials-heading"
			v-motion
			:initial="sectionMotionInitial"
			:visible-once="sectionMotionVisible(200)"
		>
			<div class="testimonials__header">
				<h2 id="testimonials-heading">PARENT TESTIMONIALS</h2>
				<p class="large">Here's what families are saying about Culver City Youth Lacrosse</p>
			</div>

			<div
				class="testimonials__carousel"
				role="region"
				aria-label="Parent testimonials"
				@mouseenter="setAutoplayPaused(true)"
				@mouseleave="setAutoplayPaused(false)"
				@focusin="setAutoplayPaused(true)"
				@focusout="setAutoplayPaused(false)"
				@click="nextTestimonial"
			>
				<figure class="testimonial-card">
					<Transition name="testimonial-quote" mode="out-in">
						<blockquote :key="`quote-${activeTestimonial.id}`" class="testimonial-card__quote">
							“{{ activeTestimonial.quote }}”
						</blockquote>
					</Transition>
					<Transition name="testimonial-author" mode="out-in">
						<figcaption :key="`author-${activeTestimonial.id}`" class="testimonial-card__author">
							— {{ activeTestimonial.author }}
						</figcaption>
					</Transition>
				</figure>
			</div>
		</section>

		<!-- Seasonal Programs and Tournaments sections to be built out on the Programs page -->
	</main>
	<SignUpForm
		v-motion
		:initial="sectionMotionInitial"
		:visible-once="sectionMotionVisible(240)"
	/>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Button from '@/components/Button.vue'
import HeroMediaCarousel from '@/components/HeroMediaCarousel.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import { getAssetPath } from '@/utils/assets'

/** Hero carousel: mix `image` and `video` slides; swap `src` / `alt` for your own assets. */
const heroSlides = [
	{ 
		type: 'video',
		src: getAssetPath('assets/hero1.mp4'),
		alt: 'Youth lacrosse highlights'
	},
	{
		type: 'image',
		src: getAssetPath('assets/hero2.jpg'),
		alt: 'K-1 Team Celebration'
	},
	{
		type: 'image',
		src: getAssetPath('assets/hero3.jpg'),
		alt: 'K-1 Team Celebration'
	},
	{
		type: 'image',
		src: getAssetPath('assets/hero4.jpg'),
		alt: 'Team practice'
	},
	{
		type: 'image',
		src: getAssetPath('assets/hero5.jpg'),
		alt: 'Team practice'
	},
	{
		type: 'image',
		src: getAssetPath('assets/hero6.jpg'),
		alt: 'Team practice'
	}
]

const sectionMotionInitial = { opacity: 0, y: 36 }
const cardMotionInitial = { opacity: 0, y: 26, scale: 0.985 }

function sectionMotionVisible(delay = 0) {
	return {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 90,
			damping: 18,
			mass: 0.7,
			delay
		}
	}
}

function cardMotionVisible(delay = 0) {
	return {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 110,
			damping: 20,
			mass: 0.65,
			delay
		}
	}
}

const TESTIMONIAL_INTERVAL_MS = 4000

const testimonials = [
	{
		id: 't1',
		quote:
			'We LOVE the CC Youth LAX community! This is the best of what youth sports should be. Fun. Challenging. Positive.',
		author: 'Mitchell S.'
	},
	{
		id: 't2',
		quote:
			'As a new lacrosse family, we felt welcomed right away. Communication is clear and the player development has been excellent.',
		author: 'Daniel K.'
	},
	{
		id: 't3',
		quote:
			'The program balances skill-building and teamwork perfectly. My daughter loves coming to training and games each week.',
		author: 'Angela T.'
	}
]

const activeTestimonialIndex = ref(0)
const autoplayPaused = ref(false)

const activeTestimonial = computed(() => testimonials[activeTestimonialIndex.value])

let testimonialIntervalId = null

function setAutoplayPaused(next) {
	autoplayPaused.value = next
}

function nextTestimonial() {
	activeTestimonialIndex.value = (activeTestimonialIndex.value + 1) % testimonials.length
}

onMounted(() => {
	testimonialIntervalId = window.setInterval(() => {
		if (!autoplayPaused.value) nextTestimonial()
	}, TESTIMONIAL_INTERVAL_MS)
})

onUnmounted(() => {
	if (testimonialIntervalId) window.clearInterval(testimonialIntervalId)
})
</script>

<style scoped>

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0;
}

section {
	box-sizing: border-box;
	width: 100%;
	min-width: 0; /* allow flex child to shrink so padding is respected when viewport < content width */
	max-width: var(--breakpoint-desktop-xlarge);
	padding: 0 var(--space-1);
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
	position: relative;
	z-index: 10;
}

@media (min-width: 48rem) {
	section {
		padding: var(--space-2);
	}
}

@media (min-width: 90rem) {
	section {
		padding: var(--space-4);
	}
}

.comet-tail-bg-top {
	position: absolute;
	z-index: 0;
	margin: auto;
	top: -10rem;
	transform: rotate(135deg);
	pointer-events: none;
	width: 25%;
	/* height: 25rem; */
	object-fit: contain;
}

@media (min-width: 48rem) {
	.comet-tail-bg-top {
		left: 10%;
	}
}

.hero {
	width: 100%;
	max-height: calc(var(--space-8) * 5);
	max-width: none;
	aspect-ratio: 16/9;
	position: relative;
	overflow: hidden;
	padding: 0;
	z-index: 1;

	& :deep(.carousel) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
}

.title {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0;
	justify-content: flex-start;
	align-items: center;
	padding-top: 0;
	top: calc(var(--space-6) * -1);

	.logo-comets-wrapper {
		width: 40%;
		display: grid;
		place-items: center;
		padding: 0 var(--space-1);

		.logo-comets {
			width: 100%;
			object-fit: cover;
			padding: 0 var(--space-1);
		}
	}

	.title__content {
		display: flex;
		flex-direction: column;
		flex: 1;

		.headings {
			padding: var(--space-2);
			background-color: var(--teal-10);
			border-radius: 0;

			h1 { 
				margin-bottom: 0; 
				color: var(--teal-1);
			}
			h2 {
				margin-top: 0;
				color: var(--teal-3);
			}
		}

		.button {
			width: 245px;
			margin-top: var(--space-2);
		}

		.intro {
			padding: 0 var(--space-2);
		}
	}
}

@media (min-width: 48rem) {
	.title {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		top: calc(var(--space-4) * -1);
		max-width: none;
		width: 100vw;
		margin-left: calc(50% - 50vw);
		padding-top: var(--space-2);
		padding-bottom: var(--space-2);
		padding-right: 0;
		padding-left: calc(max(0px, (100vw - var(--breakpoint-desktop-xlarge)) / 2) + var(--space-2));

		.logo-comets-wrapper {
			position: relative;
			width: 30%;
			padding: 0;
			top: calc(var(--space-3) * -1);

		}

		.title__content {
			flex: 1;
			min-width: 0;
		}

		.title__content .headings {
			border-radius: 0 0 0 var(--space-2);
			width: 100%;
			box-sizing: border-box;
		}
	}
}

/* Desktop+: pull title block up more than tablet so it visibly overlaps the hero (padding otherwise eats the offset). */
@media (min-width: 64rem) {
	.title {
		top: calc(var(--space-6) * -1);
	}
}

@media (min-width: 90rem) {
	.title {
		padding-top: var(--space-4);
		padding-bottom: var(--space-4);
		padding-left: calc(max(0px, (100vw - var(--breakpoint-desktop-xlarge)) / 2) + var(--space-4));
		top: calc(var(--space-8) * -1);
	}
}

.age-groups {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	width: 100%;
	max-width: 90rem;
}

.age-groups__list {
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	min-width: 0; /* allow flex child to shrink so section padding is respected */
	
	.age-group-card {
	display: inline-flex;
	flex-direction: column;
	gap: var(--space-1);
	flex: 1;
	min-width: 0; /* allow flex child to shrink so section padding is respected */
	box-shadow: var(--shadow-2);

		.age-group-card__thumb {
		height: 15rem;
		width: 100%;
		background: #fff;
		border-top: 4px solid var(--teal-9);
		border-radius: 0 0 var(--space-1) var(--space-1);
		overflow: hidden;

			.age-group-card__thumb-image {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
			}
		}

		.age-group-card__header {
			display: flex;
			gap: var(--space-1);
			align-items: center;
			width: 100%;
		}

		.age-group-card__meta {
			display: flex;
			flex-direction: column;
			gap: var(--space-1);
		}

		.age-group-card__description {
			flex: 1;
		}
	}
}

@media (min-width: 48rem) {
	.age-groups__list {
		flex-direction: row;
		gap: var(--space-1);
	}
}

.testimonials {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	padding-top: var(--space-4);
	padding-bottom: var(--space-4);
}

.testimonials__header {
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
}

.testimonials__header p {
	margin: 0;
	color: var(--color-text-secondary);
}

.testimonials__carousel {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	cursor: pointer;
}

.testimonial-card {
	margin: var(--space-1);
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	min-height: 10rem;
	padding: var(--space-1) 0;
	position: relative;
}

.testimonial-card__quote {
	margin: 0 var(--space-1);
	font-size: var(--font-size-h3);
	line-height: var(--line-height-relaxed);
	color: var(--teal-12);
	font-style: italic;
	font-weight: var(--font-weight-thin);
}

@media (min-width: var(--breakpoint-phone)) {
	.testimonial-card__quote {
		margin: 0 var(--space-6);
	}
}

.testimonial-card__author {
	margin: 0;
	font-size: var(--font-size-medium);
	font-weight: var(--font-weight-bold);
	color: var(--teal-11);
	align-self: flex-end;
	text-align: right;
}

.testimonial-quote-enter-active,
.testimonial-quote-leave-active {
	transition:
		opacity 0.45s ease,
		transform 0.55s cubic-bezier(0.22, 0.9, 0.28, 1),
		filter 0.45s ease;
}

.testimonial-quote-enter-from {
	opacity: 0;
	transform: translateX(-1.2rem) scale(0.985);
	filter: blur(2px);
}

.testimonial-quote-leave-to {
	opacity: 0;
	transform: translateX(0.8rem) scale(0.985);
	filter: blur(2px);
}

.testimonial-author-enter-active,
.testimonial-author-leave-active {
	transition:
		opacity 0.45s ease,
		transform 0.55s cubic-bezier(0.22, 0.9, 0.28, 1),
		filter 0.45s ease;
}

.testimonial-author-enter-from {
	opacity: 0;
	transform: translateX(1.2rem) scale(0.985);
	filter: blur(2px);
}

.testimonial-author-leave-to {
	opacity: 0;
	transform: translateX(-0.8rem) scale(0.985);
	filter: blur(2px);
}

@media (prefers-reduced-motion: reduce) {
	.testimonial-quote-enter-active,
	.testimonial-quote-leave-active,
	.testimonial-author-enter-active,
	.testimonial-author-leave-active {
		transition-duration: 0.01ms;
	}
}

.seasonal-grid {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: var(--space-1);
	width: 100%;
}

@media (min-width: var(--breakpoint-phone)) {
	.seasonal-grid {
		flex-direction: row;
	}
}

.seasonal-item {
	flex: 1;
	min-width: 15rem;
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	color: var(--teal-12);
}

.seasonal-item__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h4);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	margin: 0;
}

.seasonal-item__range {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	font-weight: 700;
	line-height: var(--line-height-normal);
	margin: 0;
}

.seasonal-item__list {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	list-style: disc;
	margin: 0 0 0 1.5rem;
	padding: 0;
}

.section--tournaments .section-title {
	margin-bottom: 0;
}

.tournaments__wrap {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
	width: 100%;
}

@media (min-width: var(--breakpoint-desktop)) {
	.tournaments__wrap {
		flex-direction: row;
	}
}

.tournaments__content {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
	width: 100%;
}

@media (min-width: var(--breakpoint-desktop)) {
	.tournaments__content {
		max-width: 42rem;
	}
}

.tournaments__list {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: var(--space-8);
}

@media (min-width: var(--breakpoint-phone)) {
	.tournaments__list {
		flex-direction: row;
	}
}

.tournament-item {
	flex: 1;
	min-width: 15rem;
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
}

.tournament-item__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h4);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	color: var(--teal-12);
	margin: 0;
}

.tournament-item__desc {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--teal-12);
	margin: 0;
}

.tournaments__visual {
	display: none;
	background: #fff;
	border-top: 2px solid var(--teal-9);
	min-height: 25rem;
	flex: 1;
}

@media (min-width: 1024px) {
	.tournaments__visual {
		display: block;
	}
}

.sign-up {
	background-color: var(--teal-5);
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	align-items: center;
	justify-content: center;
	padding: var(--space-8) var(--space-4);
	width: 100%;
	position: relative;
	z-index: 10;
}

.sign-up__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h3);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	color: var(--teal-12);
	margin: 0 0 var(--space-4) 0;
	text-align: center;
}

.sign-up__intro {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--teal-12);
	text-align: center;
	max-width: 100%;
	margin: 0 0 var(--space-4) 0;
}

.sign-up__form {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	align-items: center;
	width: 100%;
	max-width: var(--breakpoint-phone);
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	width: 100%;
}

.form-label {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	font-weight: 600;
	line-height: var(--line-height-normal);
	color: var(--teal-12);
}

.form-input {
	height: var(--space-3);
	padding: var(--space-0-5) var(--space-1);
	border-radius: 1rem;
	border: none;
	background-color: var(--teal-3);
	color: var(--teal-12);
	outline: none;
}

.form-input:focus {
	outline: 2px solid var(--teal-9);
	outline-offset: 2px;
}

.comet-tail-bg-bottom {
	position: absolute;
	left: 5rem;
	top: 140rem;
	transform: rotate(135deg);
	z-index: 0;
	max-width: 40rem;
	margin: 0 auto;
	width: 100%;
}

</style>
