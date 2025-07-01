import { deliveryMenu, deliveryModal } from './dom.js'
import DeliveryCard from './components/DeliveryCard.js'
import DeliveryItem from './components/DeliveryItem.js'
import DeliveryCart from './components/DeliveryCart.js'

import { registerDynamicDeliveryCartEvents } from './events/cartEvents.js'
import registerDeliveryItemEvents from './events/itemEvents.js'
import registerDeliveryMenuEvents from './events/menuEvents.js'

export function renderDeliveryMenu (menu) {
  deliveryMenu.innerHTML = ''

  menu.forEach(item => {
    deliveryMenu.innerHTML += DeliveryCard(item)
  })

  registerDeliveryMenuEvents()
}

export function renderDeliveryItem (selectedMenu) {
  deliveryModal.innerHTML = DeliveryItem(selectedMenu)

  registerDeliveryItemEvents(document.getElementById('delivery-modal-form'))
} 

export function renderDeliveryCart (cart) {
  deliveryModal.innerHTML = DeliveryCart(cart)

  registerDynamicDeliveryCartEvents()
}