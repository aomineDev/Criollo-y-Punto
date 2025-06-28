import { Row } from "./components/Row.js"

export function renderMenuTable (menu, container) {
  container.innerHTML = ''

  menu.forEach(item => {
    container.innerHTML += Row(item)
  })
}
