<script lang="ts">
	import DepartureCard from '$lib/components/bkk/DepartureCard.svelte';

	export const stops = {
		reinerToKeleti: 'BKK_F01145',
		reinerToHosok: 'BKK_F01149',
		chazarToZuglo: 'BKK_F02716'
	};

	export let data: any = {};
</script>

<h1>Departures</h1>
<br />

<h2>Reiner to Keleti</h2>
<DepartureCard stopId={stops.reinerToKeleti} bkk_key={data.bkk_key} />
<br />

<h2>Reiner to Hosok</h2>
<DepartureCard stopId={stops.reinerToHosok} bkk_key={data.bkk_key} />
<br />

<h2>Chazar to Zuglo</h2>
<DepartureCard stopId={stops.chazarToZuglo} bkk_key={data.bkk_key} />
