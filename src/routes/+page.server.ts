import { BKK_KEY } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		bkk_key: BKK_KEY
	};
}
