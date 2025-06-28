import { header } from '../dom.js'
import { Header } from './components/Header.js'

export const renderHeader = () => {

    header.insertAdjacentHTML("afterbegin", Header());

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = header.querySelectorAll(".navbar__item a");

    navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.parentElement.classList.add("navbar__item--active");
    }});

}