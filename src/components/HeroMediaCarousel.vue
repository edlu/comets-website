<template>
	<div
		class="carousel"
		role="region"
		:aria-label="ariaLabel"
		tabindex="0"
		:style="{ '--carousel-fade-ms': `${fadeMs}ms` }"
		@keydown="onKeydown"
	>
		<div class="carousel__track">
			<div
				v-for="(slide, i) in slides"
				:key="slideKey(slide, i)"
				class="carousel__slide"
				:class="{ 'carousel__slide--active': i === activeIndex }"
				:aria-hidden="i === activeIndex ? 'false' : 'true'"
			>
				<img
					v-if="slide.type === 'image'"
					:src="slide.src"
					:alt="slide.alt || ''"
					class="carousel__media"
					draggable="false"
				/>
				<video
					v-else
					:ref="(el) => setVideoRef(i, el)"
					class="carousel__media"
					muted
					playsinline
					loop
					preload="metadata"
					:poster="slide.poster"
					:aria-label="slide.alt || 'Hero video'"
				>
					<source :src="slide.src" type="video/mp4" />
				</video>
			</div>
		</div>

		<button
			v-if="slides.length > 1"
			type="button"
			class="carousel__control carousel__control--prev"
			aria-label="Previous slide"
			@click="goPrev"
		>
			<IconChevronLeft :size="28" stroke="2" aria-hidden="true" />
		</button>
		<button
			v-if="slides.length > 1"
			type="button"
			class="carousel__control carousel__control--next"
			aria-label="Next slide"
			@click="goNext"
		>
			<IconChevronRight :size="28" stroke="2" aria-hidden="true" />
		</button>
	</div>
</template>

<script setup>
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
	slides: {
		type: Array,
		required: true,
		validator: (list) =>
			Array.isArray(list) &&
			list.length > 0 &&
			list.every(
				(s) =>
					s &&
					(s.type === 'image' || s.type === 'video') &&
					typeof s.src === 'string'
			)
	},
	/** Time each slide stays fully visible before advancing */
	intervalMs: {
		type: Number,
		default: 5000
	},
	/** Crossfade duration in ms */
	fadeMs: {
		type: Number,
		default: 900
	},
	ariaLabel: {
		type: String,
		default: 'Featured photos and video'
	}
})

const activeIndex = ref(0)
const videoRefs = ref({})

let intervalId = null

function slideKey(slide, i) {
	return `${slide.type}-${slide.src}-${i}`
}

function setVideoRef(i, el) {
	if (el) videoRefs.value[i] = el
	else delete videoRefs.value[i]
}

function go(delta) {
	const n = props.slides.length
	if (n < 2) return
	activeIndex.value = (activeIndex.value + delta + n) % n
	restartAutoplay()
}

function goNext() {
	go(1)
}

function goPrev() {
	go(-1)
}

function restartAutoplay() {
	if (intervalId) clearInterval(intervalId)
	if (props.slides.length < 2) return
	intervalId = window.setInterval(goNext, props.intervalMs)
}

function syncVideos() {
	nextTick(() => {
		props.slides.forEach((slide, i) => {
			if (slide.type !== 'video') return
			const el = videoRefs.value[i]
			if (!el) return
			if (i === activeIndex.value) {
				el.play().catch(() => {})
			} else {
				el.pause()
			}
		})
	})
}

function onKeydown(e) {
	if (props.slides.length < 2) return
	if (e.key === 'ArrowLeft') {
		e.preventDefault()
		goPrev()
	}
	if (e.key === 'ArrowRight') {
		e.preventDefault()
		goNext()
	}
}

watch(activeIndex, syncVideos)

watch(
	() => props.slides.length,
	(len) => {
		if (activeIndex.value >= len) activeIndex.value = 0
		restartAutoplay()
		syncVideos()
	}
)

onMounted(() => {
	restartAutoplay()
	syncVideos()
})

onUnmounted(() => {
	if (intervalId) clearInterval(intervalId)
	Object.values(videoRefs.value).forEach((el) => {
		if (el && typeof el.pause === 'function') el.pause()
	})
})
</script>

<style scoped>
.carousel {
	position: relative;
	width: 100%;
	height: 100%;
	outline: none;
}

.carousel:focus-visible {
	box-shadow: inset 0 0 0 3px var(--yellow-9);
}

.carousel__track {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.carousel__slide {
	position: absolute;
	inset: 0;
	opacity: 0;
	transition: opacity var(--carousel-fade-ms) ease-in-out;
	pointer-events: none;
	z-index: 0;
}

.carousel__slide--active {
	opacity: 1;
	z-index: 1;
}

.carousel__media {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

.carousel__control {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.75rem;
	height: 2.75rem;
	margin: 0;
	padding: 0;
	border: none;
	border-radius: 9999px;
	color: var(--teal-1);
	background: rgba(0, 0, 0, 0.45);
	cursor: pointer;
	transition: background 0.2s ease, transform 0.15s ease;
}

.carousel__control:hover {
	background: rgba(0, 0, 0, 0.6);
}

.carousel__control:active {
	transform: translateY(-50%) scale(0.96);
}

.carousel__control:focus-visible {
	outline: 2px solid var(--yellow-9);
	outline-offset: 2px;
}

.carousel__control--prev {
	left: var(--space-1);
}

.carousel__control--next {
	right: var(--space-1);
}

@media (min-width: 48rem) {
	.carousel__control--prev {
		left: var(--space-2);
	}

	.carousel__control--next {
		right: var(--space-2);
	}
}

@media (prefers-reduced-motion: reduce) {
	.carousel__slide {
		transition-duration: 0.01ms;
	}
}
</style>
