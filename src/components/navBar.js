import "../styles/navbar.css";

export function setupNavbar() {
  const navbarElement = document.querySelector("#navbar");
  navbarElement.innerHTML = `
    <nav class="navbar">
    <div class="navbar-content">
      <img class="navbar-logo" src="/assets/cine.png" alt="logo"/>
      <ul class="navbar-menu">
        <li><a href="#">Login</a></li>
      </ul>
      </div>
    </nav>
  `;
}
