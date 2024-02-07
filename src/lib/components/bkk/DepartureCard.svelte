<script lang="ts">
	import { getDeparturesForStop } from '$lib/fetchers/bkk';

	import Icon from '@iconify/svelte';

	export let bkk_key: string;
	export let stopId: string;
	export let desc: string;

	let depPromise = getDeparturesForStop(bkk_key, stopId);

	// refetch every minute
	// setInterval(() => {
	// 	depPromise = getDeparturesForStop(bkk_key, stopId)
	// }, 60000)
</script>

<tr>
	<td class="font-semibold flex items-center mt-0.5">{desc}</td>
	{#await depPromise}
		<td><Icon icon="material-symbols-light:clock-loader-90" class="animate-spin text-2xl" /></td>
	{:then dep}
		<td>
			<!-- What the fuck is this -->
			<div class="flex">
				<div class="bg-blue-500 flex flex-row items-center text-2xl pl-1 pr-1.5 rounded-xl">
					<Icon icon="material-symbols-light:directions-bus" />
					<span class="text-base busdesc">
						{dep.routeShortDesc}
					</span>
				</div>
			</div>
		</td>

		<td class="text-xl text-center">
			{#if dep.minutesUntilDeparture > 0}
				{dep.minutesUntilDeparture}'
			{:else}
				Indul!
			{/if}
		</td>
	{/await}
</tr>
