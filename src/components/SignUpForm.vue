<template>
	<section class="sign-up" :class="{ 'sign-up--plain': variant === 'plain' }">
		<h2 class="sign-up__title">CONTACT US FOR A FREE TRIAL PRACTICE</h2>
		<p class="sign-up__intro">Starter equipment for trials and beginners are provided. We'll reach out and coordinate scheduling.</p>
		<form class="sign-up__form" novalidate @submit.prevent="handleSubmit">
			<p v-if="submitGateError" class="form-error form-error--banner" role="alert">
				{{ submitGateError }}
			</p>
			<!-- Honeypot: hidden from view and accessibility tree; bots often fill every input. -->
			<div class="hp-field" aria-hidden="true">
				<label :for="ids.hp">Company website</label>
				<input
					:id="ids.hp"
					v-model="honeypot"
					type="text"
					tabindex="-1"
					autocomplete="off"
					name="website"
				/>
			</div>
			<div class="form-group">
				<label class="form-label" :for="ids.email">Parent's Email</label>
				<input
					:id="ids.email"
					v-model.trim="formData.email"
					type="email"
					name="email"
					autocomplete="email"
					placeholder="Enter email"
					class="form-input"
					:class="{ 'form-input--error': errors.email }"
					:aria-invalid="errors.email ? 'true' : 'false'"
					:aria-describedby="errors.email ? ids.emailErr : undefined"
					@input="onEmailInput"
				/>
				<p v-if="errors.email" :id="ids.emailErr" class="form-error" role="alert">
					{{ errors.email }}
				</p>
			</div>
			<div class="form-group">
				<label class="form-label" :for="ids.childName">Child's Name</label>
				<input
					:id="ids.childName"
					v-model="formData.childName"
					type="text"
					name="childName"
					autocomplete="name"
					placeholder="Child's Name"
					class="form-input"
					:class="{ 'form-input--error': errors.childName }"
					:aria-invalid="errors.childName ? 'true' : 'false'"
					:aria-describedby="errors.childName ? ids.childNameErr : undefined"
					@input="onChildNameInput"
				/>
				<p v-if="errors.childName" :id="ids.childNameErr" class="form-error" role="alert">
					{{ errors.childName }}
				</p>
			</div>
			<div class="form-group">
				<label class="form-label" :for="ids.ageGroup">Child's Age Group</label>
				<select
					:id="ids.ageGroup"
					v-model="formData.ageGroup"
					name="ageGroup"
					class="form-input"
					:class="{ 'form-input--error': errors.ageGroup }"
					:aria-invalid="errors.ageGroup ? 'true' : 'false'"
					:aria-describedby="errors.ageGroup ? ids.ageGroupErr : undefined"
					@change="onAgeGroupChange"
				>
					<option value="">Select Age Group</option>
					<option value="4-7">Little Sticks (4-7 years old)</option>
					<option value="8-12">Youth (8-12 years old)</option>
					<option value="13-17">Upper (13-17 years old)</option>
				</select>
				<p v-if="errors.ageGroup" :id="ids.ageGroupErr" class="form-error" role="alert">
					{{ errors.ageGroup }}
				</p>
			</div>
			<div class="sign-up__submit">
				<Button type="submit" variant="primary">Submit</Button>
			</div>
		</form>
	</section>
</template>

<script setup>
import { onMounted, reactive, ref, useId, watch } from 'vue'
import { useRoute } from 'vue-router'
import Button from './Button.vue'

defineProps({
	/** `highlight`: full-width teal band (home page). `plain`: no band, for standalone pages. */
	variant: {
		type: String,
		default: 'highlight',
		validator: (v) => ['highlight', 'plain'].includes(v)
	}
})

const AGE_GROUP_VALUES = ['4-7', '8-12', '13-17']

/** Ignore instant scripted submits; humans rarely submit valid data faster than this. */
const MIN_MS_BEFORE_SUBMIT = 2200

/** Simple RFC-inspired check; avoids full RFC 5322 complexity. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const route = useRoute()
const uid = useId()
const ids = {
	email: `${uid}-email`,
	emailErr: `${uid}-email-err`,
	childName: `${uid}-child`,
	childNameErr: `${uid}-child-err`,
	ageGroup: `${uid}-age`,
	ageGroupErr: `${uid}-age-err`,
	hp: `${uid}-hp`
}

const formData = ref({
	email: '',
	childName: '',
	ageGroup: ''
})

const errors = reactive({
	email: '',
	childName: '',
	ageGroup: ''
})

/** Decoy field — must stay empty. */
const honeypot = ref('')

/** Shown only when submit is blocked by the time gate (rare for real users). */
const submitGateError = ref('')

const formOpenedAt = ref(0)
onMounted(() => {
	formOpenedAt.value = Date.now()
})

function clearSubmitGateError() {
	submitGateError.value = ''
}

function onEmailInput() {
	errors.email = ''
	clearSubmitGateError()
}

function onChildNameInput() {
	errors.childName = ''
	clearSubmitGateError()
}

function onAgeGroupChange() {
	errors.ageGroup = ''
	clearSubmitGateError()
}

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

function validateEmail(value) {
	const t = value.trim()
	if (!t) return 'Please enter an email address.'
	if (!EMAIL_RE.test(t)) return 'Please enter a valid email address.'
	return ''
}

function validateChildName(value) {
	const t = value.trim()
	if (!t) return "Please enter your child's name."
	if (t.length < 2) return 'Name must be at least 2 characters.'
	if (t.length > 120) return 'Name is too long.'
	return ''
}

function validateAgeGroup(value) {
	if (!value || !AGE_GROUP_VALUES.includes(value)) return 'Please select an age group.'
	return ''
}

function runValidation() {
	errors.email = validateEmail(formData.value.email)
	errors.childName = validateChildName(formData.value.childName)
	errors.ageGroup = validateAgeGroup(formData.value.ageGroup)
	return !errors.email && !errors.childName && !errors.ageGroup
}

const handleSubmit = () => {
	clearSubmitGateError()

	if (honeypot.value.trim() !== '') {
		return
	}

	const elapsed = Date.now() - formOpenedAt.value
	if (elapsed < MIN_MS_BEFORE_SUBMIT) {
		submitGateError.value = 'Please wait a moment before submitting.'
		return
	}

	if (!runValidation()) return

	alert('Thank you! We will contact you soon.')
	formData.value = { email: '', childName: '', ageGroup: ageGroupFromQuery() }
	errors.email = ''
	errors.childName = ''
	errors.ageGroup = ''
	honeypot.value = ''
	formOpenedAt.value = Date.now()
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
	position: relative;
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	align-items: center;
	width: 100%;
	max-width: 28rem;
}

.hp-field {
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}

.sign-up__submit {
	align-self: stretch;
}

.sign-up__submit :deep(.button) {
	width: 100%;
	box-sizing: border-box;
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

.form-input--error {
	outline: 2px solid var(--color-error);
	outline-offset: 2px;
}

.form-input--error:focus {
	outline: 2px solid var(--color-error);
	outline-offset: 2px;
}

.form-error {
	margin: 0;
	font-family: var(--font-family-body);
	font-size: var(--font-size-small);
	line-height: var(--line-height-normal);
	font-weight: 600;
	color: var(--color-error-text);
}

.form-error--banner {
	align-self: stretch;
	text-align: center;
}

.sign-up--plain {
	background-color: transparent;
	padding-top: var(--space-3);
	padding-bottom: var(--space-4);
}

select.form-input {
	appearance: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='none' stroke='%23134e4a' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M2 4l4 4 4-4'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right var(--space-1) center;
	padding-right: var(--space-3);
}
</style>
