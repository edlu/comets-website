<template>
	<header class="header">
		<div class="header-content">
			<!-- Logo -->
			<div class="logo">
				<img :src="getAssetPath('assets/comets-logo-mark.svg')" alt="Comets Logo" class="logo-img" />
			</div>

			<!-- Navigation Links -->
			<nav class="nav">
				<NavigationButton href="#home" :active="activeSection === 'home'">
					Home
				</NavigationButton>
				<NavigationButton href="#age-groups" :active="activeSection === 'age-groups'">
					Age Groups
				</NavigationButton>
				<NavigationButton href="#seasonal-programs" :active="activeSection === 'seasonal-programs'">
					Seasonal Programs
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
				<Button variant="ghost" :show-label="false" @click="toggleMenu" class="lg:hidden">
					<template #iconBefore>
						<IconMenu2 :size="24" />
					</template>
					Menu
				</Button>
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
	position: fixed;
	top: 2rem;
	left: 0;
	right: 0;
	z-index: 50;
	padding: 0 0.5rem;
	max-width: 90rem;
	margin: 0 auto;
	width: 100%;
}

.header-content {
	background-color: rgba(0, 102, 102, 0.85);
	backdrop-filter: blur(12px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	border-radius: 1rem;
}

@media (min-width: 768px) {
	.header-content {
		padding: 0.5rem 2rem;
	}
}

.logo {
	display: flex;
	align-items: center;
}

.logo-img {
	height: 1.75rem;
}

@media (min-width: 768px) {
	.logo-img {
		height: 2.25rem;
	}
}

.nav {
	display: none;
	gap: 0.75rem;
	align-items: center;
}

@media (min-width: 1024px) {
	.nav {
		display: flex;
	}
}

.donate-menu {
	display: flex;
	gap: 0.5rem;
	align-items: center;
}
</style>

