import "../styles/navbar.css";
// import Rollopeli from "../public/assets/Rollopeli.jpg";

export function setupNavbar() {
  const navbarElement = document.querySelector("#navbar");
  navbarElement.innerHTML = `
    <nav class="navbar">
      <ul class="navbar-content">
      <li><img class="navbar-logo" src="/assets/logo.png" alt="logo"/></li>

        <li><a href="#">Inicio</a></li>
      </ul>
    </nav>
  `;
}
