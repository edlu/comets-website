<template>
	<Navigation />
	<main class="page">
		<h1>Register</h1>
		<p>Pricing, how to sign up, and what to expect when you join the Culver City Comets.</p>
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
}
</style>
