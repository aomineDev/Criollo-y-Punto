export const handleActionNavbar = () => {

    const menu = document.getElementById('menu')
    const navbarList = document.getElementById('navbar-list')

    menu.addEventListener("click", () => {
        navbarList.classList.toggle("active")
    })
}