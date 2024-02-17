const baseUrl = 'https://helyettesites.petrik.hu/api/index.php?status=napihely';

// type for data
type Sub = {
	tname: string;
	ora: number;
	helytan: string;
	terem: string;
	class: string;
	ovh: string;
	day: string;
};

type SubInput = {
	tname: string;
	ora: string;
	helytan: string;
	terem: string;
	class: string;
	ovh: string;
	day: string;
};

export const getSubs = async () => {
	const response = await fetch(baseUrl);

	const resbody = await response.text();

	if (resbody === '') {
		return [];
	}

	const input: SubInput[] = JSON.parse(resbody);


	const data: Sub[] = input.map((item: SubInput) => {
		return {
			tname: item.tname,
			ora: parseInt(item.ora.charAt(0)),
			helytan: item.helytan,
			terem: item.terem,
			class: item.class,
			ovh: item.ovh,
			day: item.day
		};
	});

	data.sort((a, b) => a.ora - b.ora);

	return data;
};
