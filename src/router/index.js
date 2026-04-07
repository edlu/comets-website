import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Programs from '../views/Programs.vue'
import FAQ from '../views/FAQ.vue'
import Register from '../views/Register.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
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

