<script lang="ts">
	import { getSubs } from '$lib/fetchers/subs';

	import Icon from '@iconify/svelte';

	import TableHeader from '$lib/components/TableHeader.svelte';

	const subsPromise = getSubs();
</script>

{#await subsPromise}
	<p>loading...</p>
{:then subs}
	<table class="w-full">
		<tr>
			<TableHeader icon="nest-clock-farsight-analog" centered={true} />
			<TableHeader icon="person-off" name="Tanár" />
			<TableHeader icon="person" name="Helyettesítő" />
			<TableHeader icon="meeting-room" name="Terem" />
			<TableHeader icon="group" name="Osztály" centered={true} />
			<TableHeader icon="cell-merge-rounded" centered={true} />
		</tr>
		{#each subs as sub}
			<tr class="items-center border-t">
				<td class="font-bold text-center">{sub.ora}</td>
				<td>{sub.tname}</td>
				<td>{sub.helytan}</td>
				<td>{sub.terem}</td>
				<td class="text-center">{sub.class}</td>
				{#if sub.ovh == '0'}
					<div class="mt-1 text-xl justify-center items-center flex">
						<Icon icon="material-symbols-light:check" />
					</div>
				{/if}
			</tr>
		{/each}
	</table>
{:catch error}
	<p>valami nem jo!</p>
	<p>{error}</p>
{/await}
