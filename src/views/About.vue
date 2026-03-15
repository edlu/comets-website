<template>
	<div class="about">
		<h1 class="about__title">About Culver City Comets</h1>
		<p class="about__intro">This is the about page</p>
	</div>
</template>

<script setup>
</script>

<style scoped>
.about {
	padding: var(--space-8);
}

.about__title {
	font-family: var(--font-family-display);
	font-size: 1.875rem;
	line-height: var(--line-height-normal);
	font-weight: 700;
	color: var(--blue-11);
	margin: 0 0 var(--space-4) 0;
}

.about__intro {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--slate-11);
	margin: 0;
}
</style>

