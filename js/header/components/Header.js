export function Header() {
    return /*html*/ `
        <div class="header__menu">
            <a href="index.html" class="header__logo"><img src="img/logo/logo-blanco.png" alt="Punto & Criollo"></a>
            <input type="checkbox" id="menu">
            <label for="menu" class="menu-icon">&#9776;</label>

            <!-- Barra de menu-->
            <nav class="navbar" id="navbar-list">
                <ul class="navbar__list">
                    <li class="navbar__item"><a href="index.html">Inicio</a></li>
                    <li class="navbar__item"><a href="menu.html">Menu</a></li>
                    <li class="navbar__item"><a href="blog.html">Blog</a></li>
                    <li class="navbar__item"><a href="delivery.html">Delivery</a></li>
                    <li class="navbar__item"><a href="contactanos.html">Contactanos</a></li>
                    <li class="navbar__item"><a class="header__btn" href="reservaciones.html">Reservaciones</a></li>
                </ul>
            </nav>
        </div>
    `
}