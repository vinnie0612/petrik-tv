const baseUrl = 'https://futar.bkk.hu/api/query/v1/ws/otp/api/where';

export async function getDeparturesForStop(apiKey: string, stopId: string) {
	const response = await fetch(
		`${baseUrl}/arrivals-and-departures-for-stop.json?key=${apiKey}&stopId=${stopId}&limit=1&minutesBefore=0&minutesAfter=30`
	);

	const body = await response.json();
	console.log(body);
	const stopTime = body.data.entry.stopTimes[0];
	const routeId = body.data.references.trips[stopTime.tripId].routeId;
	const routeShortDesc = body.data.references.routes[routeId].shortName;

	// multiply by 1000 to convert to milliseconds
	const departureTime = new Date(
		(stopTime.predictedDepartureTime || stopTime.departureTime) * 1000
	);

	// but don't multiply here because BKK can't do math
	const currentTime = new Date(body.currentTime);

	// do this shit to get minutes
	const minutesUntilDeparture = Math.floor(
		(departureTime.getTime() - currentTime.getTime()) / 60000
	);

	return {
		routeShortDesc: routeShortDesc,
		minutesUntilDeparture: minutesUntilDeparture
	};
}
