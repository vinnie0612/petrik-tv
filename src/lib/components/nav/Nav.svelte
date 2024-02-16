<script lang="ts">
	import { getNews } from "$lib/fetchers/news";

	let newsPromise = getNews();

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

	let page = 0;
</script>

<nav
		class="bg-emerald-600 text-white rounded-b-lg p-2 flex flex-row justify-between items-center"
	>
		<h1 class="text-xl">
			<span class="font-extrabold">Petrik</span>TV <span class="text-base">v0.1</span>
		</h1>
		<div class="">
			{#await newsPromise}
				<p>loading...</p>
			{:then news}
				{#if news.length > 0}
					<p>{news[page].alert}</p>
				{/if}
			{:catch error}
				<p>valami nem jo!</p>
				<p>{error}</p>
			{/await}
		</div>
		<h1 class="clock">{time}</h1>
	</nav>

