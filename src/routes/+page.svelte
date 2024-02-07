<script lang="ts">
	import '../app.css';

	export let data;

	import Departures from '$lib/components/bkk/Departures.svelte';

	import Substitutions from '$lib/components/subs/Substitutions.svelte';
</script>

<Departures {data} />

<Substitutions />
