<template>
	<Navigation />
	<main class="page">
		<header class="page-header">
			<h1>Programs</h1>
			<p class="lede large">
				Seasonal programs breakdown—how we train and play across the year, from box lacrosse in the fall through the main spring season and optional tournament travel.
			</p>
		</header>

		<div class="seasons">
			<Card
				v-for="season in seasons"
				:key="season.id"
				as="section"
				class="season"
				:aria-labelledby="`${season.id}-heading ${season.id}-descriptor`"
			>
				<template #media>
					<img
						class="season__image"
						:src="getAssetPath(season.image.src)"
						:width="season.image.width"
						:height="season.image.height"
						:alt="season.image.alt"
						loading="lazy"
					/>
				</template>

				<hgroup class="season-heading">
					<h2 :id="`${season.id}-heading`">{{ season.name }}</h2>
					<p :id="`${season.id}-descriptor`" class="season-descriptor">{{ season.descriptor }}</p>
					<p class="season-dates">{{ season.dates }}</p>
				</hgroup>

				<p v-for="(paragraph, i) in season.description" :key="i" class="season__text">
					<strong v-if="paragraph.lead">{{ paragraph.lead }}</strong>
					{{ paragraph.text }}
				</p>

				<template v-if="season.benefits">
					<h3 class="season-subheading">Benefits</h3>
					<ul class="benefits">
						<li v-for="benefit in season.benefits" :key="benefit.title">
							<strong>{{ benefit.title }}</strong> — {{ benefit.text }}
						</li>
					</ul>
				</template>

				<div v-if="season.formats" class="format-notes surface surface--sunken">
					<p v-for="format in season.formats" :key="format.label" class="format-notes__item">
						<strong>{{ format.label }}:</strong>{{ ' ' }}
						<em v-if="format.pending">{{ format.text }}</em>
						<template v-else>{{ format.text }}</template>
						<span v-if="format.note" class="muted">{{ ' ' + format.note }}</span>
					</p>
				</div>
			</Card>
		</div>

		<section class="tournament" aria-labelledby="tournament-heading">
			<img
				class="tournament__image media-frame"
				:src="getAssetPath('assets/programs-tournament.jpg')"
				width="1024"
				height="683"
				alt="Three Comets players hug on the field during a tournament game"
				loading="lazy"
			/>
			<div class="tournament__body">
				<h2 id="tournament-heading">Tournament team</h2>
				<p class="large">
					Culver City Comets offer a competitive travel team as well that participates in tournaments throughout
					Southern California. This program is for dedicated players looking to challenge themselves and compete at a
					higher level and represent our great community!
				</p>
				<p class="large">
					<RouterLink to="/register">Register or contact us</RouterLink>
					to learn whether tournament team is the right fit for your player.
				</p>
			</div>
		</section>
	</main>
	<SignUpForm />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import Card from '@/components/Card.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import { getAssetPath } from '@/utils/assets'

const boysAndGirlsFormats = [
	{ label: 'Boys', text: '6 v 6 · typically 2nd–7th grade', note: '(confirm with program)' },
	{ label: 'Girls', text: '5 v 5 · Grade range — update when finalized', pending: true }
]

const seasons = [
	{
		id: 'fall',
		name: 'Fall',
		descriptor: 'Box Lacrosse',
		dates: 'September – November',
		image: {
			src: 'assets/programs-fall.jpg',
			width: 1600,
			height: 1066,
			alt: 'A Comets player catches a pass during a box lacrosse game on an outdoor rink'
		},
		description: [{ text: 'Fast-paced, high-rep version of lacrosse played on a roller hockey rink.' }],
		benefits: [
			{ title: 'More touches', text: 'Get more reps in tighter space.' },
			{ title: 'Improve stick skills', text: 'Passing, catching, and shooting all sharpen fast.' },
			{ title: 'Game IQ', text: 'Learn to make quick decisions under pressure.' },
			{ title: 'Toughness & confidence', text: 'Handle contact and chaos with composure.' },
			{ title: 'Goalie development', text: 'More live shots = faster growth.' }
		],
		formats: boysAndGirlsFormats
	},
	{
		id: 'winter',
		name: 'Winter',
		descriptor: 'Sixes',
		dates: 'January – February',
		image: {
			src: 'assets/programs-winter.jpg',
			width: 1600,
			height: 900,
			alt: 'A Comets player protects the ball while two opponents reach in with their sticks'
		},
		description: [
			{
				lead: 'Olympic format:',
				text: 'fast-paced games (5 field players + 1 goalie per team). Quick transitions, high-scoring opportunities, and constant movement.'
			}
		],
		benefits: [
			{ title: 'More playing time', text: 'More rotations, more touches, more reps, and more chances to grow.' }
		],
		formats: boysAndGirlsFormats
	},
	{
		id: 'spring',
		name: 'Spring',
		descriptor: 'Main Lacrosse Season',
		dates: 'March – May',
		image: {
			src: 'assets/programs-spring.jpg',
			width: 1600,
			height: 1066,
			alt: 'A Comets player takes a face-off against an opponent as the referee looks on'
		},
		description: [{ text: 'Full-field play for boys 5th grade and up.' }],
		benefits: [
			{ title: '2nd–4th grade', text: 'Play set positions and follow more advanced game rules.' },
			{ title: 'K–1', text: 'Fun, action-packed league play against different opponents each week!' }
		],
		formats: [
			{ label: 'Boys', text: 'Breakdown by age group — update when finalized', pending: true },
			{ label: 'Girls', text: 'Breakdown by age group — update when finalized', pending: true }
		]
	}
]
</script>

<style scoped>
.page-header {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
}

/* ------------------------------------------------------------------
 * Seasons grid: 1 col → 2 col (last card spans) → 3 col
 * ------------------------------------------------------------------ */

.seasons {
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--space-1-5);
}

@media (min-width: 768px) { /* --breakpoint-tablet */
	.seasons {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.season:last-child:nth-child(odd) {
		grid-column: 1 / -1;
	}

	/* Full-width card: use a wider crop so the photo doesn't dominate */
	.season:last-child:nth-child(odd) .season__image {
		aspect-ratio: 21 / 9;
	}
}

@media (min-width: 1024px) { /* --breakpoint-desktop */
	.seasons {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.season:last-child:nth-child(odd) {
		grid-column: auto;
	}

	.season:last-child:nth-child(odd) .season__image {
		aspect-ratio: 16 / 9;
	}
}

.season__image {
	aspect-ratio: 16 / 9;
}

.season-heading {
	display: flex;
	flex-direction: column;
	gap: var(--space-0-25);
	margin: 0;
}

.season h2 {
	margin: 0;
	font-size: var(--font-size-h3);
}

.season-descriptor {
	margin: 0;
	font-family: var(--font-family-display);
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-h4);
	line-height: var(--line-height-tight);
	color: var(--color-text-secondary);
}

.season-dates {
	margin: var(--space-0-25) 0 0 0;
	font-family: var(--font-family-display);
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-h5);
	line-height: var(--line-height-normal);
	color: var(--teal-11);
}

.season__text {
	margin: 0;
}

.season-subheading {
	margin: var(--space-0-5) 0 0 0;
	font-size: var(--font-size-h5);
}

.benefits {
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: var(--space-0-25);
	line-height: var(--line-height-relaxed);
}

/* Pinned to the card bottom so notes line up across a row */
.format-notes {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: var(--space-0-25);
	padding: var(--padding-sm);
}

.format-notes__item {
	margin: 0;
}

/* ------------------------------------------------------------------
 * Tournament feature band: stacked → image beside text
 * ------------------------------------------------------------------ */

.tournament {
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--space-1-5);
	align-items: center;
	padding: var(--padding-card);
	background: linear-gradient(135deg, var(--teal-3) 0%, var(--color-background-subtle) 100%);
	border: 1px solid var(--teal-6);
	border-radius: var(--radius-md);
}

@media (min-width: 768px) { /* --breakpoint-tablet */
	.tournament {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		padding: var(--padding-lg);
	}
}

.tournament__image {
	aspect-ratio: 3 / 2;
}

.tournament__body {
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
}

.tournament h2 {
	margin: 0;
	font-size: var(--font-size-h3);
}

.tournament .large {
	margin: 0;
}

a {
	font-weight: var(--font-weight-medium);
}
</style>
