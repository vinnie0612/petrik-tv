<script lang="ts">
	import { getSubs } from '$lib/fetchers/subs';

  import Icon from '@iconify/svelte';

	import Header from '$lib/components/subs/subcard/Header.svelte';

	const subsPromise = getSubs();
</script>

<h1>Substitutions</h1>

{#await subsPromise}
	<p>loading...</p>
{:then subs}
	<table class="w-full">
		<tr>
			<Header icon="nest-clock-farsight-analog" centered={true} />
			<Header icon="person-off" name="Tanár" />
			<Header icon="person" name="Helyettesítő" />
			<Header icon="meeting-room" name="Terem" />
			<Header icon="group" name="Osztály" centered={true} />
			<Header icon="cell-merge-rounded" name="ÖVH" centered={true} />
		</tr>
		{#each subs as sub}
			<!-- 
    tname
    ora
    helytan
    terem
    class
    ovh
    -->
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
	<p>owchie!</p>
	<p>{error}</p>
{/await}
