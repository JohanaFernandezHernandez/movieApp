const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchData(searchMovie) {

  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchMovie}`;
  if (searchMovie === "") return null;

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;

  } catch (error) {
    console.error("Error al obtener datos de la API ", error);
    throw error;
  }
}
