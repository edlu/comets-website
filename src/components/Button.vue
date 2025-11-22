<template>
	<component
		:is="tag"
		:type="tag === 'button' ? type : undefined"
		:href="tag === 'a' ? href : undefined"
		:to="tag === 'router-link' ? to : undefined"
		class="button"
		:class="[
			variantClasses,
			{ 'button--disabled': disabled }
		]"
		:disabled="disabled"
		@click="handleClick"
	>
		<slot name="iconBefore" />
		<span v-if="showLabel" class="label-wrapper" :class="labelWrapperClasses">
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
	// Size: default, large, small
	size: {
		type: String,
		default: 'default',
		validator: (value) => ['small', 'default', 'large'].includes(value)
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

// Variant classes based on Figma design
const variantClasses = computed(() => {
	const variants = {
		primary: 'bg-yellow-9 text-yellow-12 hover:bg-yellow-10',
		secondary: 'bg-teal-9 text-white hover:bg-teal-10',
		outline: 'bg-transparent border-2 border-teal-9 text-teal-11 hover:bg-teal-3',
		ghost: 'bg-transparent text-teal-1 hover:bg-black/20'
	}
	return variants[props.variant]
})

// Label wrapper classes - padding goes here for proper icon-only sizing
const labelWrapperClasses = computed(() => {
	const wrapperSizes = {
		small: 'px-[0.75rem]',
		default: 'px-[1rem]',
		large: 'px-[1.25rem]'
	}
	return wrapperSizes[props.size]
})

const handleClick = (event) => {
	if (!props.disabled) {
		emit('click', event)
	}
}
</script>

<style scoped>
.button {
	display: inline-flex;
	gap: 0.5rem;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	border-radius: 9999px; /* rounded-full */
	font-weight: 500;
	transition: all 0.2s ease;
	cursor: pointer;
	border: none;
	text-decoration: none;
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
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	font-family: var(--font-family-montserrat);
	font-weight: 500;
	line-height: 0.96;
	white-space: nowrap;
}

/* Font sizes based on wrapper padding size */
.label-wrapper.px-\[0\.75rem\],
.label-wrapper.px-\[1rem\] {
	font-size: var(--font-size-medium);
}

.label-wrapper.px-\[1\.25rem\] {
	font-size: var(--font-size-large);
}

.button:active {
	transform: translateY(1px);
}

.button--disabled {
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
}
</style>

