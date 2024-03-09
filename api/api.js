// js/api/api.js
const apiKey = "3b67358c";

export async function fetchData() {
    const search ="avengers"
  if (search === "") return null;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud a la API de OMDb");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API de OMDb:", error);
    throw error;
  }
}