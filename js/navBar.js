import "../css/navbar.css";

export function setupNavbar() {
    const navbarElement = document.querySelector('#navbar');
    navbarElement.innerHTML = `
    <nav class="navbar">
      <ul>
        <li><a href="#">Inicio</a></li>
      </ul>
    </nav>
  `;
  // Otro código para la inicialización de la barra de navegación
  console.log('Navbar inicializado');



}