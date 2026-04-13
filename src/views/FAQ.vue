<template>
	<Navigation />
	<main class="page">
		<h1>Frequently asked questions</h1>
		<p class="lede large">
			Stub answers from the CCYLAX website feedback doc—replace with final program copy, real schedules, pricing, and live links (nonprofit, donate, shop gear).
		</p>

		<div class="faq-list">
			<details class="faq-item">
				<summary>What is lacrosse? Why play?</summary>
				<div class="faq-body">
					<p class="large">
						<strong>Stub — simple definition:</strong> Lacrosse is a fast team sport played with a stick and ball; rules and contact level vary by age and league.
					</p>
					<p class="large"><strong>Benefits of playing (expand for parents):</strong></p>
					<ul class="faq-ul">
						<li>Teamwork and communication</li>
						<li>Conditioning and coordination</li>
						<li>Confidence and fun competing with friends</li>
					</ul>
					<p class="large">
						<strong>Resources:</strong> Add trusted links when ready, e.g.
						<a href="https://www.usalacrosse.com/" rel="noopener noreferrer">USA Lacrosse</a>
						and other introductory pages you like.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>Do you have programs for boys and girls?</summary>
				<div class="faq-body">
					<p class="large">
						<strong>Boys — stub:</strong> Age groups, season focus, and what a first-time player experiences.
					</p>
					<p class="large">
						<strong>Girls — stub:</strong> Same structure; note rule set (e.g. girls’ lacrosse) and any separate teams or schedules.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>Can my child try it out before signing up for a season?</summary>
				<div class="faq-body">
					<p class="large">
						Yes. New families can arrange a trial practice—final process TBD. Use the
						<strong>contact form at the bottom of this page</strong> (or add a program email link here) to schedule.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>Where and when are practices (and how many per week)? Where and when are games?</summary>
				<div class="faq-body">
					<p class="large">
						Stub: season-specific days, typical time windows (feedback suggested e.g. <em>6:00–7:30 p.m. weeknights</em> when you can commit), fields, and game days. Per doc, this can mirror bullets on the
						<RouterLink to="/programs">Programs</RouterLink> page so you are not duplicating long-term.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>Do I need to buy my own gear?</summary>
				<div class="faq-body">
					<p class="large">
						Stub: explain <strong>gear families can borrow</strong> to get started, what kids eventually need to own, and where to buy.
					</p>
					<p class="large">
						Add links to <strong>cost-effective starter kits</strong> and practical tips (e.g. resale groups, Facebook Marketplace, used gear) when you have vetted recommendations.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>How physical or safe is lacrosse?</summary>
				<div class="faq-body">
					<p class="large">
						Stub: short, honest answer by age group—contact rules, required equipment, coaching emphasis, alignment with league and
						<a href="https://www.usalacrosse.com/" rel="noopener noreferrer">USA Lacrosse</a> safety culture. Omit this question later if the team decides it is unnecessary.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>What are registration costs for a season?</summary>
				<div class="faq-body">
					<p class="large">
						Stub: give ranges or a fee table when finalized. Many parents look here before starting registration—see
						<RouterLink to="/programs">Programs</RouterLink> for the same info in context.
					</p>
					<p class="large">
						<em>Reference example from doc:</em>
						<a href="https://www.tribelacrosse.org/programs" rel="noopener noreferrer">tribelacrosse.org/programs</a>.
					</p>
				</div>
			</details>

			<details class="faq-item">
				<summary>How can I support the program?</summary>
				<div class="faq-body">
					<p class="large">
						Stub: volunteering, team parent roles, spirit—and once the nonprofit site is live, add a <strong>Donate</strong> link and short note on how donations help.
					</p>
				</div>
			</details>
		</div>
	</main>
	<SignUpForm />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'
</script>

<style scoped>
.page {
	max-width: var(--breakpoint-desktop-xlarge);
	margin: 0 auto;
	padding: var(--space-4);
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
}

.lede {
	margin: 0;
	max-width: 42rem;
	color: var(--color-text-secondary);
}

.faq-list {
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
}

.faq-item {
	border: 1px solid var(--color-border);
	border-radius: var(--space-1);
	background: var(--color-background);
	padding: 0 var(--space-2);
}

.faq-item summary {
	font-family: var(--font-family-display);
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-h5);
	line-height: var(--line-height-normal);
	padding: var(--space-2) 0;
	cursor: pointer;
	list-style: none;
}

.faq-item summary::-webkit-details-marker {
	display: none;
}

.faq-item summary::after {
	content: '+';
	float: right;
	font-weight: var(--font-weight-extra-bold);
	color: var(--teal-11);
}

.faq-item[open] summary::after {
	content: '–';
}

.faq-body {
	padding: 0 0 var(--space-2) 0;
}

.faq-body p.large {
	margin: 0 0 var(--space-1) 0;
}

.faq-body p.large:last-child {
	margin-bottom: 0;
}

.faq-ul {
	margin: 0 0 var(--space-2) 0;
	padding-left: 1.25rem;
	font-size: var(--font-size-large);
	line-height: var(--line-height-relaxed);
}

a {
	color: var(--teal-11);
}
</style>
