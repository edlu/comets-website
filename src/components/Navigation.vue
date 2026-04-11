<template>
	<header class="header">
		<div class="header-content">
			<div class="logo">
				<RouterLink to="/"><img :src="getAssetPath('assets/comets-logo-mark.svg')" alt="Comets Logo" class="logo-img" /></RouterLink>
			</div>

			<nav class="nav">
				<NavigationButton to="/" :active="route.name === 'home'">
					Home
				</NavigationButton>
				<NavigationButton to="/programs" :active="route.name === 'programs'">
					Programs
				</NavigationButton>
				<NavigationButton to="/about" :active="route.name === 'about'">
					About
				</NavigationButton>
				<NavigationButton to="/faq" :active="route.name === 'faq'">
					FAQ
				</NavigationButton>
			</nav>

			<!-- Register + Menu -->
			<div class="donate-menu">
				<Button variant="primary" to="/register">
					Register
				</Button>
				<NavigationButton class="menu-button" to="/register">
					<IconMenu2 :size="24" />
				</NavigationButton>
			</div>
		</div>
	</header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { IconMenu2 } from '@tabler/icons-vue'
import Button from './Button.vue'
import NavigationButton from './NavigationButton.vue'
import { getAssetPath } from '@/utils/assets'

const route = useRoute()
</script>

<style scoped>
.header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 var(--space-1);
	position: sticky;
	top: 0;
	background-color: var(--teal-9);
	z-index: 50;
}

@media (min-width: 48rem) {
	.header {
		padding: 0 var(--space-2);
	}
}

.header-content {
	/* background-color: var(--teal-9); */
	width: 100%;
	max-width: var(--breakpoint-desktop-xlarge);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-1);
	padding: var(--space-1) var(--space-2);
}

.logo {
	display: flex;
	align-items: center;
}

.logo-img {
	height: var(--space-3);
}

.nav {
	display: none;
	gap: var(--space-1);
	align-items: center;
}

@media (min-width: 48rem) {
	.nav {
		display: flex;
	}
}

.donate-menu {
	display: flex;
	gap: 0.5rem;
	align-items: center;
}

.menu-button {
	display: block;
}

@media (min-width: 48rem) {
	.menu-button {
		display: none;
	}
}
</style>

