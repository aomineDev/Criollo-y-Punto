import { deliveryMenu, deliveryModal } from './dom.js'
import DeliveryCard from './components/DeliveryCard.js'
import DeliveryModal from './components/DeliveryModal.js'

export function renderDeliveryMenu (menu) {
  deliveryMenu.innerHTML = ''

  menu.forEach(item => {
    deliveryMenu.innerHTML += DeliveryCard(item)
  })
}

export function renderDeliveryModal (selectedMenu) {
  deliveryModal.innerHTML = DeliveryModal(selectedMenu)
} 