import "./style.css";
import viteLogo from "/vite.svg";
import { setupNavbar } from "./js/navBar.js";
import { fetchData } from "./api/api.js";
import "./css/main.css";

// Implementar la barra de navegación
setupNavbar();


//// Obtener el elemento de entrada (input)
const searchInput = document.querySelector("#searchInput");

// Escuchar el evento de cambio en el campo de búsqueda
searchInput.addEventListener("input", async () => {
  // Obtener el valor actual del campo de búsqueda
  const searchMovie = searchInput.value;

  try {
    const { Search } = await fetchData(searchMovie);

    // Limpiar el contenedor antes de mostrar nuevos resultados
    document.querySelector("#app").innerHTML = "";

    // Verificar si hay resultados de la búsqueda
    if (Search && Search.length > 3) {
      // Mostrar cada película individualmente
      Search.map(({ Title, Year,  Poster }) => {
        const movieHtml = `
          <div class="card">
            <img class="card-poster" src="${Poster}" alt="${Title} Poster">
            <h2>${Title}</h2>
            <p>${Year}</p>
          </div>
        `;
        // Agregar la película al contenedor
        document.querySelector("#app").innerHTML += movieHtml;
      });
    } else if (Search === undefined ) {
      // Mostrar un mensaje si no hay resultados
      document.querySelector("#app").innerHTML =
        "<p>No se encontraron películas.</p>";
    } else {
      // Mostrar un mensaje si no hay resultados
      document.querySelector("#app").innerHTML =
      "<p>Por favor, ingresa al menos 3 caracteres.</p>";
    }
  } catch (error) {
    // Manejar errores
    console.error(error);
    document.querySelector("#app").innerHTML =
      "<p>Error al obtener datos de la API.</p>";
  }
});
