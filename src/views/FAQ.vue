<template>
	<Navigation />
	<main class="page">
		<h1>Frequently Asked Questions</h1>
		<p>Answers to common questions about the program, equipment, registration, and more.</p>
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
