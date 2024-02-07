<script lang="ts">
	import DepartureCard from '$lib/components/bkk/DepartureCard.svelte';

	import TableHeader from '../TableHeader.svelte';

	export const stops = {
		reinerToKeleti: 'BKK_F01145',
		reinerToHosok: 'BKK_F01149',
		chazarToZuglo: 'BKK_F02716'
	};

	export let data: any = {};
</script>

<table class="w-full">
	<tr>
		<TableHeader icon="map-rounded" name="Hova" />
		<TableHeader icon="directions-bus-rounded" name="Mivel" />
		<TableHeader icon="timer" name="Mikor" />
	</tr>
	<DepartureCard stopId={stops.reinerToKeleti} bkk_key={data.bkk_key} desc="Keleti pu." />

	<DepartureCard stopId={stops.reinerToHosok} bkk_key={data.bkk_key} desc="Hősök tere" />

	<DepartureCard stopId={stops.chazarToZuglo} bkk_key={data.bkk_key} desc="Zugló vá." />
</table>
