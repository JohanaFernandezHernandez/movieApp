import { fetchData } from "../api/api";

export function searchMovies() {

  const searchInput = document.querySelector("#searchInput");
  const appContainer = document.querySelector("#app");

  searchInput.addEventListener("input", async () => {
    const searchMovie = searchInput.value;

    try {
      const { Search } = await fetchData(searchMovie);

      appContainer.innerHTML="";

  
      if (Search && Search.length >= 3) {
        //mostrar peliculas en el html
        const moviesHtml = Search.map(({ Title, Year, Poster }) => `
          <div class="card">
            <img class="card-poster" 
            src=${Poster && Poster !== "N/A"
            ? Poster
            :"/assets/imgDefault.jpg"} 
            alt="${Title} Poster">
            <h2>${Title}</h2>
            <p>${Year}</p>
          </div>
        `).join('');
        appContainer.innerHTML += moviesHtml;
      } else {
        appContainer.innerHTML = "<p>No se encontraron películas.</p>";
      }
    } catch (error) {
      console.error(error);
      appContainer.innerHTML = "<p>Error al obtener datos de la API.</p>";
    }
  });
}


