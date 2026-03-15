<template>
	<component
		:is="tag"
		:type="tag === 'button' ? type : undefined"
		:href="tag === 'a' ? href : undefined"
		:to="tag === 'router-link' ? to : undefined"
		class="button"
		:class="[
			variantClasses,
			sizeClass,
			{ 'button--disabled': disabled }
		]"
		:disabled="disabled"
		@click="handleClick"
	>
		<slot name="iconBefore" />
		<span v-if="showLabel" class="label-wrapper">
			<slot />
		</span>
		<slot name="iconAfter" />
	</component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	// Variant: primary (yellow pill), secondary (teal), outline, ghost (transparent)
	variant: {
		type: String,
		default: 'primary',
		validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
	},
	// Size: small, medium, large (sets font-size; padding scales via em)
	size: {
		type: String,
		default: 'medium',
		validator: (value) => ['small', 'medium', 'large'].includes(value)
	},
	// Type for button tag
	type: {
		type: String,
		default: 'button'
	},
	// For links
	href: {
		type: String,
		default: null
	},
	// For router-link
	to: {
		type: [String, Object],
		default: null
	},
	// Disabled state
	disabled: {
		type: Boolean,
		default: false
	},
	// Show/hide label (useful for icon-only buttons)
	showLabel: {
		type: Boolean,
		default: true
	}
})

const emit = defineEmits(['click'])

// Determine which HTML tag to use
const tag = computed(() => {
	if (props.to) return 'router-link'
	if (props.href) return 'a'
	return 'button'
})

// Variant modifier class (styles use --color-* from colors.css)
const variantClasses = computed(() => `button--${props.variant}`)

// Size sets font-size only; padding scales via em
const sizeClass = computed(() => `button--${props.size}`)

const handleClick = (event) => {
	if (!props.disabled) {
		emit('click', event)
	}
}
</script>

<style scoped>
.button {
	display: inline-flex;
	gap: var(--space-em-0-5);
	padding: var(--space-em-1);
	align-items: center;
	justify-content: center;
	border-radius: 9999px;
	font-family: var(--font-family-body);
	font-weight: var(--font-weight-extra-bold);
	line-height: var(--line-height-normal);
	transition: all 0.2s ease;
	cursor: pointer;
	border: none;
	text-decoration: none;
}

.button--small {
	font-size: var(--font-size-small);
}

.button--medium {
	font-size: var(--font-size-medium);
}

.button--large {
	font-size: var(--font-size-large);
}

.button--primary {
	background-color: var(--yellow-9);
	color: var(--yellow-12);
}
.button--primary:hover {
	background-color: var(--yellow-10);
}

.button--secondary {
	background-color: var(--teal-9);
	color: var(--teal-12);
}
.button--secondary:hover {
	background-color: var(--teal-10);
}

.button--outline {
	background-color: transparent;
	border: 2px solid var(--teal-9);
	color: var(--teal-11);
}
.button--outline:hover {
	background-color: var(--teal-3);
}

.button--ghost {
	background-color: transparent;
	color: var(--teal-1);
}
.button--ghost:hover {
	background-color: rgb(0 0 0 / 0.2);
}

.button--shadow {
	box-shadow: 0px 83px 23px 0px rgba(0,0,0,0),
				0px 53px 21px 0px rgba(0,0,0,0.01),
				0px 30px 18px 0px rgba(0,0,0,0.02),
				0px 13px 13px 0px rgba(0,0,0,0.04),
				0px 3px 7px 0px rgba(0,0,0,0.05);
}

.label-wrapper {
	display: flex;
	gap: var(--space-em-0-5);
	align-items: center;
	justify-content: center;
	font-family: var(--font-family-body);
	font-weight: var(--font-weight-extra-bold);
	line-height: var(--line-height-normal);
	white-space: nowrap;
}

.button:active {
	transform: translateY(1px);
}

.button--disabled {
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
	box-shadow: none;
}
</style>

