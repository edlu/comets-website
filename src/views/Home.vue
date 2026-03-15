<template>
	<Navigation />
	<section class="hero">
		<video autoPlay controlsList="nodownload" loop playsInline muted>
			<source :src="getAssetPath('assets/hero-video.mp4')" type="video/mp4" />
		</video>
	</section>
	<main>
		<img :src="getAssetPath('assets/comet-tail-bg.svg')" class="comet-tail-bg-top" aria-hidden="true" alt="" />
		
		<section class="title">
				<div class="logo-comets-wrapper"><img :src="getAssetPath('assets/comets-logo.png')" alt="Culver City Comets Logo" class="logo-comets" /></div>
				<div class="title__content">
					<div class="headings">
					  <h1>CULVER CITY YOUTH LACROSSE</h1>
					  <h2>Home of the Culver City Comets</h2>
					</div>
					<div class="intro">
						<p class="large">
						<strong>Culver City Youth Lacrosse</strong> is a community youth program dedicated to developing young athletes through the sport of lacrosse. We foster a culture where effort, personal growth and teamwork are our measures of success and victory not just goals and wins.
						</p>
						<p class="large">
							Our program serves boys and girls from ages 4-17. With teams at various levels and skill divisions. Whether your child is new to the sport or looking to advance their skills - we have a place for them!
						</p>
						<p class="large">
							Newcomers are always welcome to visit or participate in trial practices. Just let us know in advance.
						</p>
						<Button variant="primary">
							Schedule a Visit
						</Button>
					</div>
				</div>
		</section>	

		<section class="age-groups">
			<h2>AGE GROUPS</h2>
			<div class="age-groups__list">
				<div class="age-group-card">
					<div class="age-group-card__thumb"></div>
					<div class="age-group-card__header">
						<div class="age-group-card__meta">
							<h3 class="age-group-card__title">LITTLE STICKS</h3>
							<p class="age-group-card__label">Age 4-7</p>
						</div>
					</div>
					<p>Introduction to lacrosse fundamentals through fun games and activities. Focus on basic skills and love of the game.</p>
					<Button variant="primary">Register</Button>
				</div>
				<div class="age-group-card">
					<div class="age-group-card__thumb"></div>
					<div class="age-group-card__header">
						<div class="age-group-card__meta">
							<h3 class="age-group-card__title">YOUTH</h3>
							<p class="age-group-card__label">Age 8-12</p>
						</div>
					</div>
					<p>Develop core skills and game understanding through practices and competitive play.</p>
					<Button variant="primary">Register</Button>
				</div>
				<div class="age-group-card">
					<div class="age-group-card__thumb"></div>
					<div class="age-group-card__header">
						<div class="age-group-card__meta">
							<h3 class="age-group-card__title">UPPER</h3>
							<p class="age-group-card__label">Age 13-17</p>
						</div>	
					</div>
					<p>Advanced training for competitive players looking to excel at the highest level of youth lacrosse.</p>
					<Button variant="primary">Register</Button>
				</div>
			</div>
		</section>

		<!-- <section id="seasonal-programs">
			<h2 class="section-title">SEASONAL PROGRAMS</h2>
			<p class="section-intro">We're active throughout the year for all age groups. Practices take place in evenings about twice a week with regular weekend games against other regional youth teams.</p>
			<div class="seasonal-grid">
				<div class="seasonal-item">
					<h3 class="seasonal-item__title">SPRING</h3>
					<p class="seasonal-item__range">Mar - May</p>
					<ul class="seasonal-item__list">
						<li>10 weeks</li>
						<li>Saturday games</li>
					</ul>
				</div>
				<div class="seasonal-item">
					<h3 class="seasonal-item__title">SUMMER</h3>
					<p class="seasonal-item__range">Jun - Aug</p>
					<ul class="seasonal-item__list">
						<li>Summer camp</li>
						<li>X weeks</li>
					</ul>
				</div>
				<div class="seasonal-item">
					<h3 class="seasonal-item__title">FALL</h3>
					<p class="seasonal-item__range">Sep - Nov</p>
					<ul class="seasonal-item__list">
						<li>7 weeks</li>
						<li>Box format</li>
						<li>Sunday games</li>
					</ul>
				</div>
				<div class="seasonal-item">
					<h3 class="seasonal-item__title">WINTER</h3>
					<p class="seasonal-item__range">Dec - Feb</p>
					<ul class="seasonal-item__list">
						<li>7 weeks</li>
						<li>Sixes format</li>
						<li>Saturday Games</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="tournaments" class="tournaments">
			<h2 class="section-title">TOURNAMENTS</h2>
			<div class="tournaments__wrap">
				<div class="tournaments__content">
					<p class="section-intro">Our competitive travel teams participate in tournaments throughout California. These teams are for dedicated players looking to compete at a higher level and represent our community.</p>
					<div class="tournaments__list">
						<div class="tournament-item">
							<h3 class="tournament-item__title">10U</h3>
							<p class="tournament-item__desc">Our youngest competitive team focused on fundamentals and game experience.</p>
						</div>
						<div class="tournament-item">
							<h3 class="tournament-item__title">12U</h3>
							<p class="tournament-item__desc">Building skills and lacrosse IQ through competitive tournament play.</p>
						</div>
						<div class="tournament-item">
							<h3 class="tournament-item__title">14U</h3>
							<p class="tournament-item__desc">Advanced training and competition. Preparing for high school play.</p>
						</div>
						<div class="tournament-item">
							<h3 class="tournament-item__title">HIGH SCHOOL</h3>
							<p class="tournament-item__desc">Elite competition with college recruitment opportunities.</p>
						</div>
					</div>
				</div>
				<div class="tournaments__visual" aria-hidden="true"></div>
			</div>
		</section>

		<section id="sign-up" class="sign-up">
			<h2 class="sign-up__title">CONTACT US FOR A FREE TRIAL PRACTICE</h2>
			<p class="sign-up__intro">Starter equipment for trials and beginners are provided. We'll reach out and coordinate scheduling.</p>
			<form class="sign-up__form" @submit.prevent="handleSubmit">
				<div class="form-group">
					<label class="form-label">Parent's Email</label>
					<input type="email" v-model="formData.email" placeholder="Enter email" class="form-input" />
				</div>
				<div class="form-group">
					<label class="form-label">Child's Name</label>
					<input type="text" v-model="formData.childName" placeholder="Child's Name" class="form-input" />
				</div>
				<div class="form-group">
					<label class="form-label">Child's Age Group</label>
					<select v-model="formData.ageGroup" class="form-input">
						<option value="">Select Age Group</option>
						<option value="4-7">Little Sticks (4-7)</option>
						<option value="8-12">Youth (8-12)</option>
						<option value="13-17">Upper (13-17)</option>
					</select>
				</div>
				<Button type="submit" variant="primary">Submit</Button>
			</form>
			<img :src="getAssetPath('assets/background-2.svg')" class="comet-tail-bg-bottom" aria-hidden="true" alt="" />
		</section> -->
	</main>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Button from '@/components/Button.vue'
import { getAssetPath } from '@/utils/assets'

const formData = ref({
	email: '',
	childName: '',
	ageGroup: ''
})

const handleSubmit = () => {
	console.log('Form submitted:', formData.value)
	// Add form submission logic here
	alert('Thank you! We will contact you soon.')
	formData.value = { email: '', childName: '', ageGroup: '' }
}
</script>

<style scoped>

main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

section {
	width: 100%;
	max-width: var(--breakpoint-desktop-xlarge);
	padding: var(--space-1);
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
	position: relative;
	z-index: 10;
}

@media (min-width: 48rem) {
	section {
		padding: var(--space-2);
	}
}

.comet-tail-bg-top {
	position: absolute;
	z-index: 0;
	left: 50%;
	top: -10rem;
	transform: rotate(135deg);
	pointer-events: none;
	width: 50rem;
	height: 25rem;
	/* object-fit: contain; */
}

@media (min-width: 48rem) {
	.comet-tail-bg-top {
		left: 10%;
	}
}

.hero {
	width: 100%;
	max-height: calc(var(--space-8) * 5);
	max-width: none;
	aspect-ratio: 16/9;
	position: relative;
	overflow: hidden;
	padding: 0;
	z-index: 1;

	& video {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.title {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0;
	align-items: center;
	padding-top: 0;
	top: calc(var(--space-2) * -3);

	.logo-comets-wrapper {
		width: 45%;
		display: grid;
		place-items: center;
		padding: 0 var(--space-1);

		.logo-comets {
			width: 100%;
			object-fit: cover;
			padding: 0 var(--space-1);
		}
	}

	.title__content {
		display: flex;
		flex-direction: column;
		flex: 1;

		.headings {
			padding: var(--space-2);
			background-color: var(--teal-10);
			border-radius: 0;

			h1 { 
				margin-bottom: var(--space-1); 
				color: var(--teal-1);
			}
			h2 {
				color: var(--teal-3);
			}
		}

		.button {
			width: 245px;
			margin-top: var(--space-2);
		}

		.intro {
			padding: 0 var(--space-2);
		}
	}
}

@media (min-width: 48rem) {
	.title {
		flex-direction: row;
		align-items: flex-start;
		top: calc(var(--space-2) * -1);
		
		.logo-comets-wrapper {
			align-items: flex-start;
		}
		
		.title__content .headings {
			border-radius: 0 0 0 var(--space-2);
		}
	}
}

.age-groups {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	width: 100%;
	max-width: 80rem;
}

.age-groups__list {
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	width: 100%;
	
	.age-group-card {
	display: inline-flex;
	flex-direction: column;
	gap: var(--space-1);
	flex: 1;

		.age-group-card__thumb {
		height: 15rem;
		width: 100%;
		background: #fff;
		border-top: 2px solid var(--teal-9);
		}

		.age-group-card__header {
			display: flex;
			gap: var(--space-1);
			align-items: center;
			width: 100%;
		}

		.age-group-card__meta {
			display: flex;
			flex-direction: column;
			gap: var(--space-1);
		}
	}
}

@media (min-width: 48rem) {
	.age-groups__list {
		flex-direction: row;
	}
}

.seasonal-grid {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: var(--space-1);
	width: 100%;
}

@media (min-width: var(--breakpoint-phone)) {
	.seasonal-grid {
		flex-direction: row;
	}
}

.seasonal-item {
	flex: 1;
	min-width: 15rem;
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	color: var(--teal-12);
}

.seasonal-item__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h4);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	margin: 0;
}

.seasonal-item__range {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	font-weight: 700;
	line-height: var(--line-height-normal);
	margin: 0;
}

.seasonal-item__list {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	list-style: disc;
	margin: 0 0 0 1.5rem;
	padding: 0;
}

.section--tournaments .section-title {
	margin-bottom: 0;
}

.tournaments__wrap {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
	width: 100%;
}

@media (min-width: var(--breakpoint-desktop)) {
	.tournaments__wrap {
		flex-direction: row;
	}
}

.tournaments__content {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
	width: 100%;
}

@media (min-width: var(--breakpoint-desktop)) {
	.tournaments__content {
		max-width: 42rem;
	}
}

.tournaments__list {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: var(--space-8);
}

@media (min-width: var(--breakpoint-phone)) {
	.tournaments__list {
		flex-direction: row;
	}
}

.tournament-item {
	flex: 1;
	min-width: 15rem;
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
}

.tournament-item__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h4);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	color: var(--teal-12);
	margin: 0;
}

.tournament-item__desc {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--teal-12);
	margin: 0;
}

.tournaments__visual {
	display: none;
	background: #fff;
	border-top: 2px solid var(--teal-9);
	min-height: 25rem;
	flex: 1;
}

@media (min-width: 1024px) {
	.tournaments__visual {
		display: block;
	}
}

.sign-up {
	background-color: var(--teal-5);
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
	align-items: center;
	justify-content: center;
	padding: var(--space-8) var(--space-4);
	width: 100%;
	position: relative;
	z-index: 10;
}

.sign-up__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h3);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	color: var(--teal-12);
	margin: 0 0 var(--space-4) 0;
	text-align: center;
}

.sign-up__intro {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--teal-12);
	text-align: center;
	max-width: 100%;
	margin: 0 0 var(--space-4) 0;
}

.sign-up__form {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	align-items: center;
	width: 100%;
	max-width: var(--breakpoint-phone);
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	width: 100%;
}

.form-label {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	font-weight: 600;
	line-height: var(--line-height-normal);
	color: var(--teal-12);
}

.form-input {
	height: var(--space-3);
	padding: var(--space-0-5) var(--space-1);
	border-radius: 1rem;
	border: none;
	background-color: var(--teal-3);
	color: var(--teal-12);
	outline: none;
}

.form-input:focus {
	outline: 2px solid var(--teal-9);
	outline-offset: 2px;
}

.comet-tail-bg-bottom {
	position: absolute;
	left: 5rem;
	top: 140rem;
	transform: rotate(135deg);
	z-index: 0;
	max-width: 40rem;
	margin: 0 auto;
	width: 100%;
}

</style>
