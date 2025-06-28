import { Row } from "./components/Row.js"
import { MenuCard } from "./components/MenuCard.js"

export function renderMenuTable (menu, container) {
  container.innerHTML = ''

  menu.forEach(item => {
    container.innerHTML += Row(item)
  })
}

export function renderMenuCard(menu, container) {
  container.innerHTML = ''
  
  menu.slice(0,4).forEach(item => {
    container.innerHTML += MenuCard(item)
  })

}