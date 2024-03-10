import "../css/navbar.css";
import Rollopeli from "/img/Rollopeli.jpg"

export function setupNavbar() {
    const navbarElement = document.querySelector('#navbar');
    navbarElement.innerHTML = `
    <nav class="navbar">
      <ul>
        <li><a href="#">Inicio</a></li>
      </ul>
    </nav>
  `;
}