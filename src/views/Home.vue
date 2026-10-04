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
				<Card
					v-for="(group, index) in ageGroups"
					:key="group.id"
					class="age-group-card"
					surface="raised"
					v-motion
					:initial="cardMotionInitial"
					:visible-once="cardMotionVisible(140 + index * 160)"
				>
					<template #media>
						<img :src="getAssetPath(group.image)" :alt="group.name" class="age-group-card__image" />
					</template>
					<h3 class="age-group-card__title">{{ group.name.toUpperCase() }}</h3>
					<h4 class="age-group-card__label">Age {{ group.ages }}</h4>
					<p class="age-group-card__description">{{ group.description }}</p>
					<template #actions>
						<Button variant="primary" :to="{ path: '/register', query: { ageGroup: group.ages } }">Register</Button>
					</template>
				</Card>
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
						<blockquote
							:key="`quote-${activeTestimonial.id}`"
							class="testimonial-card__quote"
							:class="{ 'testimonial-card__quote--long': isLongTestimonial(activeTestimonial) }"
						>
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
import Card from '@/components/Card.vue'
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

const ageGroups = [
	{
		id: 'little-sticks',
		name: 'Little Sticks',
		ages: '4-7',
		image: 'assets/ages-little-sticks.jpg',
		description:
			'Introduction to lacrosse fundamentals through fun games and activities. Focus on basic skills and love of the game.'
	},
	{
		id: 'youth',
		name: 'Youth',
		ages: '8-12',
		image: 'assets/ages-youth.jpg',
		description: 'Develop core skills and game understanding through practices and competitive play.'
	},
	{
		id: 'upper',
		name: 'Upper',
		ages: '13-17',
		image: 'assets/ages-upper.jpg',
		description:
			'Advanced training for competitive players looking to excel at the highest level of youth lacrosse.'
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

/** Each quote stays up long enough to read: a base delay plus time per word. */
const TESTIMONIAL_MIN_MS = 4000
const TESTIMONIAL_MS_PER_WORD = 250

/** Sourced from the "CCYLAX Parent Testimonials (Responses)" Google Form sheet. */
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
			'We are so happy to be a part of the Culver City youth lacrosse program. Our son started when he was 9, and had no prior experience. Coach Jason welcomed him with so much warmth and encouragement, providing all the necessary gear to borrow and making it really easy to start out. The younger kids all come from different elementary schools in the Culver City area, fostering new friendships that will follow them to Culver Middle and High School. We truly love being a part of this local lacrosse community here in Culver City and encourage others to join!',
		author: 'Rebecca H.'
	}
]

/** Quotes past this word count drop to a smaller type size so they don't run several screens tall. */
const TESTIMONIAL_LONG_WORDS = 40

function testimonialWordCount(testimonial) {
	return testimonial.quote.trim().split(/\s+/).length
}

function isLongTestimonial(testimonial) {
	return testimonialWordCount(testimonial) > TESTIMONIAL_LONG_WORDS
}

function testimonialDuration(testimonial) {
	return Math.max(TESTIMONIAL_MIN_MS, testimonialWordCount(testimonial) * TESTIMONIAL_MS_PER_WORD)
}

const activeTestimonialIndex = ref(0)
const autoplayPaused = ref(false)

const activeTestimonial = computed(() => testimonials[activeTestimonialIndex.value])

let testimonialTimeoutId = null

function clearTestimonialTimer() {
	if (testimonialTimeoutId) window.clearTimeout(testimonialTimeoutId)
	testimonialTimeoutId = null
}

/** (Re)start the countdown for the current quote; no-op while paused. */
function scheduleNextTestimonial() {
	clearTestimonialTimer()
	if (autoplayPaused.value || testimonials.length < 2) return
	testimonialTimeoutId = window.setTimeout(() => {
		nextTestimonial()
	}, testimonialDuration(activeTestimonial.value))
}

function setAutoplayPaused(next) {
	autoplayPaused.value = next
	scheduleNextTestimonial()
}

function nextTestimonial() {
	activeTestimonialIndex.value = (activeTestimonialIndex.value + 1) % testimonials.length
	scheduleNextTestimonial()
}

onMounted(scheduleNextTestimonial)

onUnmounted(clearTestimonialTimer)
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
	padding: 0 var(--padding-content);
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
	position: relative;
	z-index: 10;
}

@media (min-width: 48rem) {
	section {
		padding: var(--padding-content);
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
		padding-top: var(--padding-content);
		padding-bottom: var(--padding-content);
		padding-right: 0;
		padding-left: calc(max(0px, (100vw - var(--breakpoint-desktop-xlarge)) / 2) + var(--padding-content));

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
}

.age-group-card {
	flex: 1;
}

.age-group-card__image {
	height: 15rem;
	border-top: 4px solid var(--teal-9);
}

.age-group-card__title,
.age-group-card__label,
.age-group-card__description {
	margin: 0;
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

.testimonial-card__quote--long {
	font-size: var(--font-size-h5);
}

@media (min-width: 40rem) { /* --breakpoint-phone */
	.testimonial-card__quote {
		margin: 0 var(--space-6);
	}
}

.testimonial-card__author {
	margin: 0;
	font-size: var(--font-size-body);
	font-weight: var(--font-weight-bold);
	line-height: var(--line-height-normal);
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
</style>
