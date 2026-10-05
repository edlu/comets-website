<template>
	<component :is="as" class="card surface" :class="surfaceClass">
		<div v-if="$slots.media" class="card__media">
			<slot name="media" />
		</div>
		<div class="card__body">
			<slot />
		</div>
		<div v-if="$slots.actions" class="card__actions">
			<slot name="actions" />
		</div>
	</component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	// Root element, e.g. 'article', 'li', 'div'
	as: {
		type: String,
		default: 'article'
	},
	// Surface type from semantic.css: default, sunken, raised
	surface: {
		type: String,
		default: 'default',
		validator: (value) => ['default', 'sunken', 'raised'].includes(value)
	}
})

const surfaceClass = computed(() => (props.surface === 'default' ? null : `surface--${props.surface}`))
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	min-width: 0; /* allow shrinking inside flex rows */
	overflow: hidden; /* clip full-bleed media to the rounded corners */
}

/* :where() keeps these defaults low-specificity so pages can size their own images */
:where(.card__media) :slotted(img) {
	display: block;
	width: 100%;
	height: auto; /* don't let width/height attributes fix the rendered height */
	object-fit: cover;
}

.card__body {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
	padding: var(--padding-card);
}

.card__actions {
	display: flex;
	gap: var(--space-1);
	padding: 0 var(--padding-card) var(--padding-card);
}

.card__actions > :deep(*) {
	flex: 1;
}
</style>
