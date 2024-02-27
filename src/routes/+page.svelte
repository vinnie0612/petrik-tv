<script lang="ts">
  import ClassTimes from '../lib/components/ClassTimes.svelte';

  import Nav from '$lib/components/nav/Nav.svelte';

	import '../app.css';

	export let data;

	import Departures from '$lib/components/bkk/Departures.svelte';

	import Substitutions from '$lib/components/subs/Substitutions.svelte';
</script>

<main class="h-screen flex flex-col">
	<Nav />
	<div class="flex flex-row w-full h-full py-2">
		<div class="flex flex-col w-1/3 mx-2">
			<div class="bg-emerald-700 text-white p-2 rounded-lg">
				<Departures {data} />
			</div>
			<div class="h-full mt-2 rounded-lg p-2 bg-emerald-700 text-white">
				<ClassTimes />
			</div>
		</div>

		<div class="bg-emerald-700 text-white w-2/3 h-full flex flex-col p-2 mx-2 ml-0 rounded-lg">
			<Substitutions />
		</div>
	</div>
</main>
