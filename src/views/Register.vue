<template>
	<Navigation />
	<main class="page">
		<h1>Register</h1>
		<p class="page__intro">
			Pricing, how to sign up, and what to expect when you join the Culver City Comets.
		</p>
		<SignUpForm variant="plain" />
	</main>
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
}

.page__intro {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--color-text-secondary);
	max-width: 36rem;
	margin: 0 0 var(--space-3) 0;
}
</style>
