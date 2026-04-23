/**
 * Trial signup notification delivery.
 * Prefer Web3Forms (set VITE_WEB3FORMS_ACCESS_KEY); destination is configured in the Web3Forms dashboard.
 * If no key, falls back to mailto with a runtime-built recipient (no literal address string in source).
 */

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

/** Assembled at runtime — avoids a single grep-friendly literal. */
export function getTrialSignupRecipient() {
	const local = [101, 100, 108, 117].map((c) => String.fromCharCode(c)).join('')
	const domain = [109, 101, 46, 99, 111, 109].map((c) => String.fromCharCode(c)).join('')
	return `${local}@${domain}`
}

const AGE_LABELS = {
	'4-7': 'Little Sticks (4–7 years old)',
	'8-12': 'Youth (8–12 years old)',
	'13-17': 'Upper (13–17 years old)'
}

export function formatTrialSignupMessage({ parentEmail, childName, ageGroup }) {
	const ageLine = AGE_LABELS[ageGroup] || ageGroup
	return [
		'New trial signup request (Comets website form)',
		'',
		`Parent email: ${parentEmail}`,
		`Child's name: ${childName}`,
		`Age group: ${ageLine}`,
		'',
		'— Sent from the public signup form'
	].join('\n')
}

/**
 * @returns {{ ok: true, mode: 'web3'|'mailto' } | { ok: false, error: string }}
 */
export async function sendTrialSignupRequest({ parentEmail, childName, ageGroup }) {
	const message = formatTrialSignupMessage({ parentEmail, childName, ageGroup })
	const subject = 'Comets website: trial signup request'
	const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

	if (accessKey && String(accessKey).trim() !== '') {
		try {
			const res = await fetch(WEB3FORMS_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: accessKey,
					subject,
					name: `Trial signup — ${childName}`,
					email: parentEmail,
					message
				})
			})
			const data = await res.json().catch(() => ({}))
			if (data.success) return { ok: true, mode: 'web3' }
			return {
				ok: false,
				error: typeof data.message === 'string' ? data.message : 'Could not send your message. Please try again.'
			}
		} catch {
			return { ok: false, error: 'Network error. Please try again.' }
		}
	}

	const to = getTrialSignupRecipient()
	const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
	window.location.href = mailto
	return { ok: true, mode: 'mailto' }
}
