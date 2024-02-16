const baseUrl = "https://helyettesites.petrik.hu/api/?status=napihir";

export const getNews = async () => {
  const response = await fetch(baseUrl);

  const rt = await response.text();
  if (rt === "\"empty\"") return {}

  const input = JSON.parse(rt);

  return input;
}