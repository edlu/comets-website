<template>
	<section class="sign-up">
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
					<option value="4-7">Little Sticks (4-7 years old)</option>
					<option value="8-12">Youth (8-12 years old)</option>
					<option value="13-17">Upper (13-17 years old)</option>
				</select>
			</div>
			<Button type="submit" variant="primary">Submit</Button>
		</form>
	</section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Button from './Button.vue'

const AGE_GROUP_VALUES = ['4-7', '8-12', '13-17']

const route = useRoute()

const formData = ref({
	email: '',
	childName: '',
	ageGroup: ''
})

function ageGroupFromQuery() {
	const raw = route.query.ageGroup
	const value = Array.isArray(raw) ? raw[0] : raw
	return typeof value === 'string' && AGE_GROUP_VALUES.includes(value) ? value : ''
}

watch(
	() => route.query.ageGroup,
	() => {
		const next = ageGroupFromQuery()
		if (next) formData.value.ageGroup = next
	},
	{ immediate: true }
)

const handleSubmit = () => {
	alert('Thank you! We will contact you soon.')
	formData.value = { email: '', childName: '', ageGroup: ageGroupFromQuery() }
}
</script>

<style scoped>
.sign-up {
	background-color: var(--teal-5);
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	align-items: center;
	justify-content: center;
	padding: var(--space-4);
	width: 100%;
	max-width: none;
	box-sizing: border-box;
}

.sign-up__title {
	font-family: var(--font-family-display);
	font-size: var(--font-size-h3);
	line-height: var(--line-height-tight);
	font-weight: var(--font-weight-extra-bold);
	color: var(--teal-12);
	margin: 0;
	text-align: center;
}

.sign-up__intro {
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	line-height: var(--line-height-normal);
	color: var(--teal-12);
	text-align: center;
	max-width: 36rem;
	margin: 0;
}

.sign-up__form {
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	align-items: center;
	width: 100%;
	max-width: 28rem;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: var(--space-0-5);
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
	font-family: var(--font-family-body);
	font-size: var(--font-size-medium);
	width: 100%;
	box-sizing: border-box;
}

.form-input:focus {
	outline: 2px solid var(--teal-9);
	outline-offset: 2px;
}

select.form-input {
	appearance: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='none' stroke='%23134e4a' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M2 4l4 4 4-4'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right var(--space-1) center;
	padding-right: var(--space-3);
}
</style>
