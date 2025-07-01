import { deliveryMenu, deliveryModal } from './dom.js'
import DeliveryCard from './components/DeliveryCard.js'
import DeliveryItem from './components/DeliveryItem.js'
import DeliveryCart from './components/DeliveryCart.js'

export function renderDeliveryMenu (menu) {
  deliveryMenu.innerHTML = ''

  menu.forEach(item => {
    deliveryMenu.innerHTML += DeliveryCard(item)
  })
}

export function renderDeliveryItem (selectedMenu) {
  deliveryModal.innerHTML = DeliveryItem(selectedMenu)
} 

export function  renderDeliveryCart (cart) {
  deliveryModal.innerHTML = DeliveryCart(cart)
}