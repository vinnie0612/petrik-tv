<script lang="ts">
	import '../app.css';

	export let data;

	import Departures from '$lib/components/bkk/Departures.svelte';

	import Substitutions from '$lib/components/subs/Substitutions.svelte';

	let time = new Date().toLocaleTimeString('hu-HU', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});

	setInterval(() => {
		time = new Date().toLocaleTimeString('hu-HU', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
	}, 1000);
</script>

<main class="h-screen flex flex-col">
	<nav
		class="bg-emerald-600 text-white rounded-b-lg p-2 flex flex-row justify-between items-center"
	>
		<h1 class="text-xl">
			<span class="font-extrabold">Petrik</span>TV <span class="text-base">v0.1</span>
		</h1>
		<h1 class="clock">{time}</h1>
	</nav>
	<div class="flex flex-row w-full h-full py-2">
		<div class="flex flex-col w-1/3 mx-2">
			<div class="bg-emerald-700 text-white p-2 rounded-lg">
				<Departures {data} />
			</div>
			<div class="h-full mt-2 rounded-lg p-2 bg-emerald-700 text-white">
				<h1>Ide vajon mit fogok rakni?</h1>
			</div>
		</div>

		<div class="bg-emerald-700 text-white w-2/3 h-full flex flex-col p-2 mx-2 ml-0 rounded-lg">
			<Substitutions />
		</div>
	</div>
</main>
