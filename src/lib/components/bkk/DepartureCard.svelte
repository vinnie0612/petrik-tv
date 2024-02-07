<script lang="ts">
  import { getDeparturesForStop } from '$lib/fetchers/bkk';

  export let bkk_key;
  export let stopId;

  const depPromise = getDeparturesForStop(bkk_key, stopId);
</script>

{#await depPromise}
  <p>loading...</p>
{:then dep}
  {dep.minutesUntilDeparture}p múlva
  {dep.routeShortDesc}-es busz
{:catch error}
  <p>owchie!</p>
  <p>{error}</p>
{/await}