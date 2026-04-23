<template>
	<Navigation />
	<main class="page">
		<header class="page-header">
			<h1>Programs</h1>
			<p class="lede large">
				Seasonal programs breakdown—how we train and play across the year, from box lacrosse in the fall through the main spring season and optional tournament travel.
			</p>
		</header>

		<section class="season" aria-labelledby="fall-heading">
			<h2 id="fall-heading">Fall — Box Lacrosse</h2>
			<p class="season-dates">September – November</p>
			<figure class="section-media">
				<img
					class="section-media__img"
					src="https://picsum.photos/seed/programs-fall/1200/675"
					width="1200"
					height="675"
					alt=""
					loading="lazy"
				/>
				<figcaption class="section-media__caption">Placeholder — fall / box lacrosse</figcaption>
			</figure>
			<p class="large">
				Fast-paced, high-rep version of lacrosse played on a roller hockey rink.
			</p>
			<h3 class="season-subheading">Benefits</h3>
			<ul class="benefits">
				<li><strong>More touches</strong> — Get more reps in tighter space.</li>
				<li><strong>Improve stick skills</strong> — Passing, catching, and shooting all sharpen fast.</li>
				<li><strong>Game IQ</strong> — Learn to make quick decisions under pressure.</li>
				<li><strong>Toughness &amp; confidence</strong> — Handle contact and chaos with composure.</li>
				<li><strong>Goalie development</strong> — More live shots = faster growth.</li>
			</ul>
			<div class="format-notes">
				<p class="large format-notes__item">
					<strong>Boys:</strong> 6 v 6 · typically 2nd–7th grade <span class="muted">(confirm with program)</span>
				</p>
				<p class="large format-notes__item">
					<strong>Girls:</strong> 5 v 5 · <em>Grade range — update when finalized</em>
				</p>
			</div>
		</section>

		<section class="season" aria-labelledby="winter-heading">
			<h2 id="winter-heading">Winter — Sixes</h2>
			<p class="season-dates">January – February</p>
			<figure class="section-media">
				<img
					class="section-media__img"
					src="https://picsum.photos/seed/programs-winter/1200/675"
					width="1200"
					height="675"
					alt=""
					loading="lazy"
				/>
				<figcaption class="section-media__caption">Placeholder — winter / sixes</figcaption>
			</figure>
			<p class="large">
				<strong>Olympic format:</strong> fast-paced games (5 field players + 1 goalie per team). Quick transitions,
				high-scoring opportunities, and constant movement.
			</p>
			<p class="large">
				More playing time with more rotations, more touches, more reps, and more chances to grow.
			</p>
			<div class="format-notes">
				<p class="large format-notes__item">
					<strong>Boys:</strong> 6 v 6 · typically 2nd–7th grade <span class="muted">(confirm with program)</span>
				</p>
				<p class="large format-notes__item">
					<strong>Girls:</strong> 5 v 5 · <em>Grade range — update when finalized</em>
				</p>
			</div>
		</section>

		<section class="season" aria-labelledby="spring-heading">
			<h2 id="spring-heading">Spring — Main lacrosse season</h2>
			<p class="season-dates">March – May</p>
			<figure class="section-media">
				<img
					class="section-media__img"
					src="https://picsum.photos/seed/programs-spring/1200/675"
					width="1200"
					height="675"
					alt=""
					loading="lazy"
				/>
				<figcaption class="section-media__caption">Placeholder — spring / field season</figcaption>
			</figure>
			<p class="large">
				Full-field play for boys 5th grade and up. Our 2nd / 3rd / 4th graders play set positions and follow more
				advanced game rules. K / 1 players enjoy fun, action-packed league play with different opponents each week.
			</p>
			<h3 class="season-subheading">Boys — breakdown by age group</h3>
			<p class="large muted">
				Add division names, field size, and rule highlights per grade when ready (mirrors registration materials).
			</p>
			<h3 class="season-subheading">Girls — breakdown by age group</h3>
			<p class="large muted">
				Add division names and rule set notes when ready.
			</p>
		</section>

		<section class="tournament" aria-labelledby="tournament-heading">
			<h2 id="tournament-heading">Tournament team</h2>
			<figure class="section-media section-media--inset">
				<img
					class="section-media__img"
					src="https://picsum.photos/seed/programs-travel/1200/675"
					width="1200"
					height="675"
					alt=""
					loading="lazy"
				/>
				<figcaption class="section-media__caption">Placeholder — tournament / travel team</figcaption>
			</figure>
			<p class="large tournament__copy">
				Culver City Comets offer a competitive travel team as well that participates in tournaments throughout
				Southern California. This program is for dedicated players looking to challenge themselves and compete at a
				higher level and represent our great community!
			</p>
			<p class="large">
				<RouterLink to="/register">Register or contact us</RouterLink>
				to learn whether tournament team is the right fit for your player.
			</p>
		</section>
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
	gap: var(--space-4);
}

.page-header {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
}

.section-media {
	margin: 0;
	width: 100%;
	max-width: 52rem;
	align-self: center;
}

.section-media--inset {
	max-width: none;
	align-self: stretch;
}

.section-media__img {
	display: block;
	width: 100%;
	height: auto;
	aspect-ratio: 16 / 9;
	object-fit: cover;
	border-radius: var(--space-1);
	border: 1px solid var(--color-border);
	background: var(--color-background-subtle);
}

.section-media__caption {
	margin: var(--space-0-5) 0 0 0;
	font-size: var(--font-size-small);
	line-height: var(--line-height-relaxed);
	color: var(--color-text-secondary);
	text-align: center;
}

.lede {
	margin: 0;
	max-width: 46rem;
	color: var(--color-text-secondary);
}

.season {
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
	padding-bottom: var(--space-3);
	border-bottom: 1px solid var(--color-border);
}

.season h2 {
	margin: 0 0 var(--space-0-5) 0;
	font-size: var(--font-size-h3);
}

.season-dates {
	margin: 0 0 var(--space-1) 0;
	font-family: var(--font-family-display);
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-h5);
	color: var(--teal-11);
}

.season .large {
	margin: 0;
	max-width: 48rem;
}

.season-subheading {
	margin: var(--space-2) 0 var(--space-0-5) 0;
	font-size: var(--font-size-h5);
}

.benefits {
	margin: 0 0 var(--space-2) 0;
	padding-left: 1.25rem;
	max-width: 48rem;
	font-size: var(--font-size-large);
	line-height: var(--line-height-relaxed);
}

.benefits li {
	margin-bottom: var(--space-0-5);
}

.format-notes {
	display: flex;
	flex-direction: column;
	gap: var(--space-0-5);
	margin-top: var(--space-1);
	padding: var(--space-2);
	background: var(--color-background-subtle);
	border-radius: var(--space-1);
	border: 1px solid var(--color-border);
}

.format-notes__item {
	margin: 0;
}

.muted {
	color: var(--color-text-secondary);
}

.tournament {
	margin-top: var(--space-1);
	padding: var(--space-3);
	background: linear-gradient(135deg, var(--teal-3) 0%, var(--color-background-subtle) 100%);
	border: 1px solid var(--teal-6);
	border-radius: var(--space-1);
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
}

.tournament h2 {
	margin: 0;
	font-size: var(--font-size-h3);
}

.tournament__copy {
	margin: 0;
	max-width: 48rem;
	font-size: var(--font-size-large);
	line-height: var(--line-height-relaxed);
}

.tournament .large {
	margin: 0;
}

a {
	color: var(--teal-11);
	font-weight: var(--font-weight-medium);
}
</style>
