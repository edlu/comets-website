import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Programs from '../views/Programs.vue'
import FAQ from '../views/FAQ.vue'
import Register from '../views/Register.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		return { top: 0, left: 0 }
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/programs',
			name: 'programs',
			component: Programs
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/faq',
			name: 'faq',
			component: FAQ
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		}
	]
})

export default router

