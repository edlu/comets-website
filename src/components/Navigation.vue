<template>
	<header class="header">
		<div class="header-content">
			<div class="logo">
				<a href="#home"><img :src="getAssetPath('assets/comets-logo-mark.svg')" alt="Comets Logo" class="logo-img" /></a>
			</div>

			<nav class="nav">
				<NavigationButton href="#home" :active="activeSection === 'home'">
					Home
				</NavigationButton>
				<NavigationButton href="#seasonal-programs" :active="activeSection === 'seasonal-programs'">
					Programs
				</NavigationButton>
				<NavigationButton href="#tournaments" :active="activeSection === 'tournaments'">
					Tournaments
				</NavigationButton>
				<NavigationButton href="#faqs" :active="activeSection === 'faqs'">
					FAQs
				</NavigationButton>
				<NavigationButton href="#sign-up" :active="activeSection === 'sign-up'">
					Sign Up
				</NavigationButton>
			</nav>

			<!-- Donate + Menu -->
			<div class="donate-menu">
				<Button variant="primary">
					Donate
				</Button>
				<NavigationButton class="menu-button" href="#sign-up" :active="activeSection === 'sign-up'">
					<IconMenu2 :size="24" />
				</NavigationButton>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconMenu2 } from '@tabler/icons-vue'
import Button from './Button.vue'
import NavigationButton from './NavigationButton.vue'
import { getAssetPath } from '@/utils/assets'

const activeSection = ref('home')
const menuOpen = ref(false)

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value
}

const updateActiveSection = () => {
	const sections = ['home', 'age-groups', 'seasonal-programs', 'tournaments', 'faqs', 'sign-up']
	
	for (const section of sections) {
		const element = document.getElementById(section)
		if (element) {
			const rect = element.getBoundingClientRect()
			if (rect.top <= 150 && rect.bottom >= 150) {
				activeSection.value = section
				break
			}
		}
	}
}

onMounted(() => {
	window.addEventListener('scroll', updateActiveSection)
	updateActiveSection()
})

onUnmounted(() => {
	window.removeEventListener('scroll', updateActiveSection)
})
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
	background-color: var(--teal-9);
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

