<template>
	<Navigation />
	<main class="page">
		<h1>Frequently asked questions</h1>
		<div class="faq-list">
			<details class="faq-item surface">
				<summary>
					<span>What is lacrosse? Why play?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
				<div class="faq-body">
					<p class="large">
						<strong>Stub — simple definition:</strong> Lacrosse is a fast team sport played with a stick and ball; rules and contact level vary by age and league.
					</p>
					<p class="large"><strong>Benefits of playing (expand for parents):</strong></p>
					<ul class="faq-list-items large">
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

			<details class="faq-item surface">
				<summary>
					<span>Do you have programs for boys and girls?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
				<div class="faq-body">
					<p class="large">
						<strong>Boys — stub:</strong> Age groups, season focus, and what a first-time player experiences.
					</p>
					<p class="large">
						<strong>Girls — stub:</strong> Same structure; note rule set (e.g. girls’ lacrosse) and any separate teams or schedules.
					</p>
				</div>
			</details>

			<details class="faq-item surface">
				<summary>
					<span>Can my child try it out before signing up for a season?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
				<div class="faq-body">
					<p class="large">
						Yes. New families can arrange a trial practice—final process TBD. Use the
						<strong>contact form at the bottom of this page</strong> (or add a program email link here) to schedule.
					</p>
				</div>
			</details>

			<details class="faq-item surface">
				<summary>
					<span>Where and when are practices (and how many per week)? Where and when are games?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
				<div class="faq-body">
					<p class="large">
						Stub: season-specific days, typical time windows (feedback suggested e.g. <em>6:00–7:30 p.m. weeknights</em> when you can commit), fields, and game days. Per doc, this can mirror bullets on the
						<RouterLink to="/programs">Programs</RouterLink> page so you are not duplicating long-term.
					</p>
				</div>
			</details>

			<details class="faq-item surface">
				<summary>
					<span>Do I need to buy my own gear?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
				<div class="faq-body">
					<p class="large">
						Stub: explain <strong>gear families can borrow</strong> to get started, what kids eventually need to own, and where to buy.
					</p>
					<p class="large">
						Add links to <strong>cost-effective starter kits</strong> and practical tips (e.g. resale groups, Facebook Marketplace, used gear) when you have vetted recommendations.
					</p>
				</div>
			</details>

			<details class="faq-item surface">
				<summary>
					<span>How physical or safe is lacrosse?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
				<div class="faq-body">
					<p class="large">
						Stub: short, honest answer by age group—contact rules, required equipment, coaching emphasis, alignment with league and
						<a href="https://www.usalacrosse.com/" rel="noopener noreferrer">USA Lacrosse</a> safety culture. Omit this question later if the team decides it is unnecessary.
					</p>
				</div>
			</details>

			<details class="faq-item surface">
				<summary>
					<span>What are registration costs for a season?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
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

			<details class="faq-item surface">
				<summary>
					<span>How can I support the program?</span>
					<IconPlus class="faq-item__icon faq-item__icon--closed" :size="20" stroke-width="2.5" aria-hidden="true" />
					<IconMinus class="faq-item__icon faq-item__icon--open" :size="20" stroke-width="2.5" aria-hidden="true" />
				</summary>
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
import { IconMinus, IconPlus } from '@tabler/icons-vue'
import Navigation from '@/components/Navigation.vue'
import SignUpForm from '@/components/SignUpForm.vue'
</script>

<style scoped>
.faq-list {
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
}

.faq-item {
	overflow: hidden; /* clip the summary's hover background to the rounded corners */
	transition: border-color 0.15s ease;
}

.faq-item summary {
	font-family: var(--font-family-display);
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-h4);
	line-height: var(--line-height-normal);
	padding: var(--space-2);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-1);
	cursor: pointer;
	list-style: none;
	transition: background-color 0.15s ease;
}

/* Hover: darker border, tinted question row */
.faq-item:hover {
	border-color: var(--color-border-hover);
}

.faq-item summary:hover {
	background-color: var(--teal-2);
}

/* Pressed */
.faq-item summary:active {
	background-color: var(--teal-3);
}

/* Open: brand accent on the expanded card */
.faq-item[open] {
	border-color: var(--teal-7);
}

.faq-item summary:focus-visible {
	outline: 2px solid var(--teal-9);
	outline-offset: -2px; /* inset so overflow: hidden doesn't clip it */
	border-radius: var(--radius-md);
}

@media (prefers-reduced-motion: reduce) {
	.faq-item,
	.faq-item summary {
		transition: none;
	}
}

.faq-item summary::-webkit-details-marker {
	display: none;
}

.faq-item__icon {
	flex-shrink: 0;
	color: var(--teal-11);
}

/* Plus while closed, minus while open */
.faq-item__icon--open,
.faq-item[open] .faq-item__icon--closed {
	display: none;
}

.faq-item[open] .faq-item__icon--open {
	display: block;
}

.faq-body {
	padding: 0 var(--space-2) var(--space-2);
}

.faq-body p.large {
	margin: 0 0 var(--space-1) 0;
}

.faq-body p.large:last-child {
	margin-bottom: 0;
}

.faq-list-items {
	margin: 0 0 var(--space-2) 0;
}
</style>
