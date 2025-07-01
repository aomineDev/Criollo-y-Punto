import store from '../../store.js'
import { deliveryMenu, deliveryForm, deliveryModal } from '../dom.js'
import { renderDeliveryItem } from '../render.js'
import registerDeliveryItemEvents from './itemEvents.js'

function handleChooseToCartClick(evt) {
  if (evt.target.classList.contains('delivery-card__button')) {

    const id = parseInt(evt.target.dataset.id)
    const item = store.menu[deliveryForm.categories.value].find(item => item.id === id)

    store.selectedMenu = item;

    renderDeliveryItem(item)

    registerDeliveryItemEvents(document.getElementById('delivery-modal-form'))

    toggleDeliveryOverlay()
  }
}

function handleOverlayClick(evt) {
  if (evt.target.id === 'delivery-modal' || evt.target.id === 'delivery-modal-close') 
    toggleDeliveryOverlay()
}

export function toggleDeliveryOverlay() {
  deliveryModal.classList.toggle('active')
}

export default function registerDeliveryMenuEvents() {
  deliveryMenu.addEventListener('click', handleChooseToCartClick)
  deliveryModal.addEventListener('click', handleOverlayClick)
}