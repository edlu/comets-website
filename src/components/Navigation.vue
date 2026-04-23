<template>
	<header class="header">
		<div class="header-content">
			<div class="logo">
				<RouterLink to="/"><img :src="getAssetPath('assets/comets-logo-mark.svg')" alt="Comets Logo" class="logo-img" /></RouterLink>
			</div>

			<nav class="nav" aria-label="Main">
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
				<button
					ref="menuToggleRef"
					type="button"
					class="menu-toggle menu-button"
					:aria-expanded="mobileMenuOpen"
					aria-controls="mobile-nav-panel"
					:aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
					@click="toggleMobileMenu"
				>
					<IconMenu2 :size="24" aria-hidden="true" />
				</button>
			</div>
		</div>
	</header>

	<Teleport to="body">
		<Transition name="mobile-nav">
			<div
				v-show="mobileMenuOpen"
				class="mobile-nav-root"
				role="presentation"
			>
				<div
					class="mobile-nav-backdrop"
					aria-hidden="true"
					@click="closeMobileMenu"
				/>
				<aside
					id="mobile-nav-panel"
					class="mobile-nav-panel"
					role="dialog"
					aria-modal="true"
					aria-label="Site navigation"
				>
					<div class="mobile-nav-panel-header">
						<span class="mobile-nav-panel-title">Menu</span>
						<button
							ref="closeButtonRef"
							type="button"
							class="mobile-nav-close"
							aria-label="Close menu"
							@click="closeMobileMenu"
						>
							<IconX :size="22" aria-hidden="true" />
						</button>
					</div>
					<nav class="mobile-nav-links" aria-label="Main">
						<NavigationButton
							class="mobile-nav-link"
							to="/"
							:active="route.name === 'home'"
							@click="closeMobileMenu"
						>
							Home
						</NavigationButton>
						<NavigationButton
							class="mobile-nav-link"
							to="/programs"
							:active="route.name === 'programs'"
							@click="closeMobileMenu"
						>
							Programs
						</NavigationButton>
						<NavigationButton
							class="mobile-nav-link"
							to="/about"
							:active="route.name === 'about'"
							@click="closeMobileMenu"
						>
							About
						</NavigationButton>
						<NavigationButton
							class="mobile-nav-link"
							to="/faq"
							:active="route.name === 'faq'"
							@click="closeMobileMenu"
						>
							FAQ
						</NavigationButton>
						<RouterLink
							class="mobile-nav-register"
							to="/register"
							@click="closeMobileMenu"
						>
							Register
						</RouterLink>
					</nav>
				</aside>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { IconMenu2, IconX } from '@tabler/icons-vue'
import Button from './Button.vue'
import NavigationButton from './NavigationButton.vue'
import { getAssetPath } from '@/utils/assets'

const route = useRoute()
const mobileMenuOpen = ref(false)
const menuToggleRef = ref(null)
const closeButtonRef = ref(null)

function toggleMobileMenu() {
	if (mobileMenuOpen.value) {
		closeMobileMenu()
	} else {
		mobileMenuOpen.value = true
		nextTick(() => {
			closeButtonRef.value?.focus()
		})
	}
}

function closeMobileMenu() {
	mobileMenuOpen.value = false
	nextTick(() => {
		menuToggleRef.value?.focus()
	})
}

watch(
	() => route.fullPath,
	() => {
		if (mobileMenuOpen.value) {
			mobileMenuOpen.value = false
		}
	}
)

watch(mobileMenuOpen, (open) => {
	document.body.style.overflow = open ? 'hidden' : ''
})

function onDocumentKeydown(e) {
	if (e.key === 'Escape' && mobileMenuOpen.value) {
		closeMobileMenu()
	}
}

onMounted(() => {
	document.addEventListener('keydown', onDocumentKeydown)
})

onUnmounted(() => {
	document.removeEventListener('keydown', onDocumentKeydown)
	document.body.style.overflow = ''
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

@media (min-width: 40rem) {
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

@media (min-width: 40rem) {
	.menu-button {
		display: none;
	}
}

.menu-toggle {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem;
	margin: 0;
	border: none;
	border-radius: 1rem;
	background: transparent;
	color: var(--teal-1);
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.menu-toggle:hover {
	background-color: rgba(0, 0, 0, 0.3);
}

.menu-toggle:focus-visible {
	outline: 2px solid var(--teal-1);
	outline-offset: 2px;
}

@media (min-width: 40rem) {
	.menu-toggle.menu-button {
		display: none;
	}
}
</style>

<style>
.mobile-nav-root {
	position: fixed;
	inset: 0;
	z-index: 200;
	display: flex;
	justify-content: flex-end;
	pointer-events: auto;
}

.mobile-nav-backdrop {
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.45);
}

.mobile-nav-panel {
	position: relative;
	width: min(20rem, 88vw);
	max-width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--teal-9);
	box-shadow: -0.5rem 0 1.5rem rgba(0, 0, 0, 0.25);
	z-index: 1;
}

.mobile-nav-panel-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--space-2);
	border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.mobile-nav-panel-title {
	font-family: var(--font-family-body);
	font-size: var(--font-size-large);
	font-weight: 600;
	color: var(--teal-1);
}

.mobile-nav-close {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	margin: 0;
	border: none;
	border-radius: 0.75rem;
	background: transparent;
	color: var(--teal-1);
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.mobile-nav-close:hover {
	background-color: rgba(0, 0, 0, 0.25);
}

.mobile-nav-close:focus-visible {
	outline: 2px solid var(--teal-1);
	outline-offset: 2px;
}

.mobile-nav-links {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 0.25rem;
	padding: var(--space-2);
}

.mobile-nav-link {
	width: 100%;
	text-align: left;
	border-radius: 1rem;
}

.mobile-nav-register {
	margin-top: var(--space-1);
	padding: 0.875rem 1rem;
	border-radius: 1rem;
	background-color: var(--yellow-9);
	color: var(--yellow-12);
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	font-weight: 600;
	line-height: var(--line-height-medium);
	text-align: center;
	text-decoration: none;
	transition: filter 0.2s ease, transform 0.15s ease;
}

.mobile-nav-register:hover {
	filter: brightness(1.05);
}

.mobile-nav-register:focus-visible {
	outline: 2px solid var(--teal-1);
	outline-offset: 2px;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
	transition: opacity 0.2s ease;
}

.mobile-nav-enter-active .mobile-nav-panel,
.mobile-nav-leave-active .mobile-nav-panel {
	transition: transform 0.25s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
	opacity: 0;
}

.mobile-nav-enter-from .mobile-nav-panel,
.mobile-nav-leave-to .mobile-nav-panel {
	transform: translateX(100%);
}
</style>
