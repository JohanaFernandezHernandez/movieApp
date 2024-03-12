import { fetchData } from "../api/api";

export function searchMovies() {
  //creacion de contantes
  const searchInput = document.querySelector("#searchInput");
  const appContainer = document.querySelector("#app");

  searchInput.addEventListener("input", async () => {
    const searchMovie = searchInput.value;

    //Hacer peticion en la api solo apartir de 3 caracteres
    if (searchMovie.length >= 3) {
      try {
        const { Search } = await fetchData(searchMovie);

        //Validacion si existe la pelicula y si hay mas de una
        if (Search && Search.length > 0) {
          // Mostrar películas en el HTML
          const moviesHtml = Search.map(
            ({ Title, Year, Poster }) => `
              <div class="card">
                <img class="card-poster" 
                  src=${
                  Poster && Poster !== "N/A"
                  ? Poster
                  : "/assets/imgDefault.jpg"
                  } 
                  alt="${Title} Poster">
                <h2>${Title}</h2>
                <p>${Year}</p>
              </div>
            `
          ).join("");
          //insertar peliculas en el html
          appContainer.innerHTML = moviesHtml;
        } else {
          appContainer.innerHTML = "<p>No se encontraron películas.</p>";
        }
      } catch (error) {
        console.error(error);
        appContainer.innerHTML = "<p>Error al obtener datos de la API.</p>";
      }
    } else {
      // si no incluye 3 caracteres mostrara esto al usuario
      appContainer.innerHTML =
        "<p>Ingrese al menos 3 caracteres para buscar tu pelicula.</p>";
    }
  });
}
