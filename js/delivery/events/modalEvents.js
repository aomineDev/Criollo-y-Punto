import { deliveryModal } from '../dom.js'

function handleOverlayClick(evt) {
  if (evt.target.id === 'delivery-modal' || evt.target.id === 'delivery-modal-close') 
    toggleDeliveryOverlay()
}

export function toggleDeliveryOverlay() {
  deliveryModal.classList.toggle('active')
}

export default function registerDeliveryModalEvents() {
  deliveryModal.addEventListener('click', handleOverlayClick)
}