import { deliveryMenu } from "./dom.js"
import { DeliveryCard } from "./components/DeliveryCard.js"

export const renderDeliveryMenu = (menu) => {
  deliveryMenu.innerHTML = ''

  menu.forEach(item => {
    deliveryMenu.innerHTML += DeliveryCard(item)
  })
}