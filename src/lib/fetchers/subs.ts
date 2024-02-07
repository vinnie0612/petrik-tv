//const baseUrl = 'https://helyettesites.petrik.hu/api/index.php?status=napihely';

// type for data
export type Sub = {
  tname: string;
  ora: number;
  helytan: string;
  terem: string;
  class: string;
  ovh: string;
  day: string;
};

export const getSubs = async () => {
  //const response = await fetch(baseUrl);

  //const input = await response.json();
  
  // cors error miatt
  const input = [{"tname":"Szabados István","ora":"1.óra","helytan":"-","terem":"Elmarad","class":"12.A","ovh":"","day":"2024.02.07"},{"tname":"Lukács Ferenc","ora":"1.óra","helytan":"Madarász Ákos","terem":"A.205 - Fizika I. Tanterem","class":"11.D  1cs","ovh":"0","day":"2024.02.07"},{"tname":"Lukács Ferenc","ora":"2.óra","helytan":"-","terem":"Elmarad","class":"10.E","ovh":"","day":"2024.02.07"},{"tname":"Lukács Ferenc","ora":"4.óra","helytan":"Siska Dávid","terem":"A.205 - Fizika I. Tanterem","class":"12.B","ovh":"0","day":"2024.02.07"},{"tname":"Lukács Ferenc","ora":"6.óra","helytan":"-","terem":"Elmarad","class":"11.D","ovh":"","day":"2024.02.07"},{"tname":"Demkó Erika","ora":"6.óra","helytan":"-","terem":"Elmarad","class":"9.E","ovh":"","day":"2024.02.07"},{"tname":"Demkó Erika","ora":"7.óra","helytan":"-","terem":"Elmarad","class":"9.E","ovh":"","day":"2024.02.07"},{"tname":"Bálint György","ora":"1.óra","helytan":"-","terem":"Elmarad","class":"10.C","ovh":"","day":"2024.02.07"},{"tname":"Bálint György","ora":"4.óra","helytan":"Hajagos Máté","terem":"A.216 - Tanterem","class":"12.E","ovh":"0","day":"2024.02.07"},{"tname":"Bálint György","ora":"5.óra","helytan":"Nyisztorné Kozma Amália Éva","terem":"B.307 - Tanterem","class":"12.C","ovh":"0","day":"2024.02.07"},{"tname":"Bálint György","ora":"7.óra","helytan":"-","terem":"Elmarad","class":"9.D","ovh":"","day":"2024.02.07"},{"tname":"Demkó Erika","ora":"3.óra","helytan":"Dr. Nagyné Székely Emőke","terem":"A.119 - Tanterem","class":"10.D","ovh":"0","day":"2024.02.07"}]

  const data: Sub[] = input.map((item) => {
    return {
      tname: item.tname,
      ora: parseInt(item.ora.charAt(0)),
      helytan: item.helytan,
      terem: item.terem,
      class: item.class,
      ovh: item.ovh,
      day: item.day,
    };
  })

  data.sort((a, b) => a.ora - b.ora);

  return data;
};