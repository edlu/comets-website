<template>
	<Navigation />
	<main class="page">
		<h1>Register</h1>
		<p class="lede">
			Send us an email through the form below and schedule a free trial practice.  If you'd like to join, we'll share the sign up process for the season and your child can start practicing and playing with the team immediately.
		</p>
		<SignUpForm variant="plain" />
	</main>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'
</script>
