/**
 * Get the correct asset path for public assets
 * Handles base path for GitHub Pages deployment
 */
export function getAssetPath(path) {
	const base = import.meta.env.BASE_URL
	// Remove leading slash from path if present, and ensure base ends with /
	const cleanPath = path.startsWith('/') ? path.slice(1) : path
	const cleanBase = base.endsWith('/') ? base : base + '/'
	return cleanBase + cleanPath
}


