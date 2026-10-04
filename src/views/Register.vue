<template>
	<Navigation />
	<main class="page">
		<h1>Register</h1>
		<p class="lede">
			Pricing, how to sign up, and what to expect when you join the Culver City Comets.
		</p>
		<SignUpForm variant="plain" />
	</main>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'
</script>
