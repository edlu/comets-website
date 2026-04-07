<template>
	<Navigation />
	<main class="page">
		<h1>Programs</h1>
		<p>Details about age groups, seasons, practice schedules, locations, and what to expect as a new family.</p>
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
