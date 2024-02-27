<script lang="ts">
	import Icon from '@iconify/svelte';

	const times = [
		{ idx: 1, start: '08:00', end: '08:45' },
		{ idx: 2, start: '08:55', end: '09:40' },
		{ idx: 3, start: '09:55', end: '10:40' },
		{ idx: 4, start: '10:50', end: '11:35' },
		{ idx: 5, start: '11:45', end: '12:30' },
		{ idx: 6, start: '12:50', end: '13:35' },
		{ idx: 7, start: '13:45', end: '14:30' },
		{ idx: 8, start: '14:35', end: '23:20' }
];

function isClassTime(start: string, end: string) {
	const now = new Date();
	const startDate = new Date(`${now.toDateString()} ${start}`);
	const endDate = new Date(`${now.toDateString()} ${end}`);
	return now >= startDate && now <= endDate;
}
</script>

<table class="w-full">
		<tr>
			<th colspan="2" class="flex flex-row items-center gap-2">
				<Icon icon="material-symbols-light:nest-clock-farsight-analog-outline-rounded" class="text-xl"/>
			</th>
			<th class="text-left">
				<p>Csengetési rend</p>
			</th>
		</tr>
		{#each times as time}
			<tr>
				<td class:bg-emerald-600={isClassTime(time.start, time.end)} class="font-bold rounded-s-lg">{time.idx}.</td>
				<td class:bg-emerald-600={isClassTime(time.start, time.end)} class="rounded-e-lg">{time.start} - {time.end}</td>
			</tr>
		{/each}
</table>
