import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		bkk_key: env.BKK_KEY
	};
}
