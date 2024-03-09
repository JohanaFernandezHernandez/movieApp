import './style.css';
import viteLogo from '/vite.svg';
import { setupNavbar } from './js/navBar.js';
import { fetchData } from './api/api.js';

// Configurar la barra de navegación
setupNavbar();

// Obtener el elemento con ID 'app'
const appContainer = document.querySelector('#app');

// Realizar la llamada a la API y procesar los datos
fetchData()
  .then(data => {
    // Hacer algo con los datos obtenidos, por ejemplo: Poster
    console.log(data.Search);
    const resp = data.Search || [];

    // const {Search} = data;

    const searchHtml = resp.map(movie=>{
      return`
        <div>
          <!-- Tu contenido aquí utilizando los datos de la API -->
          <h2>${movie.Title}</h2>
          <img src="${movie.Poster}"></img>
          <p>${movie.Year}</p>
          <p>${movie.imdbID}</p>
          <p>${movie.Type}</p>

        </div>
      `;
    });
    appContainer.innerHTML = searchHtml.join('');
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
    appContainer.innerHTML = '<p>Error al obtener datos de la API.</p>';
  });