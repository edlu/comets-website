<template>
	<Navigation />
	<main class="page">
		<h1>About Us</h1>
		<h2 class="belief">
			We believe lacrosse is more than a sport—it is a pathway to personal growth and connection that are the
			building blocks for a life of success, passion and fulfillment.
		</h2>
	</main>
	<SignUpForm />
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'
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

.page > p {
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
}
</style>

