<template>
	<a
		:href="href"
		class="nav-button"
		:class="{ 'nav-button--active': active }"
	>
		<slot />
	</a>
</template>

<script setup>
defineProps({
	href: {
		type: String,
		required: true
	},
	active: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped>
.nav-button {
	padding: 0.75rem 1rem;
	border-radius: 1rem;
	color: var(--teal-1);
	font-family: var(--font-family-montserrat);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-medium);
	font-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease;
	cursor: pointer;
	white-space: nowrap;
}

.nav-button:hover {
	background-color: rgba(0, 0, 0, 0.3);
}

.nav-button--active {
	background-color: rgba(0, 0, 0, 0.3);
	color: rgba(255, 255, 255, 0.92);
	font-weight: 700;
}

.nav-button--active:hover {
	background-color: rgba(0, 0, 0, 0.4);
}
</style>

