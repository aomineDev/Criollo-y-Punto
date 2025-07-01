import store from '../../store.js'
import { deliveryMenu, deliveryForm } from '../dom.js'
import { renderDeliveryItem } from '../render.js'
import { toggleDeliveryOverlay } from './modalEvents.js'

function handleChooseToCartClick(evt) {
  if (evt.target.classList.contains('delivery-card__button')) {

    const id = parseInt(evt.target.dataset.id)
    const item = store.menu[deliveryForm.categories.value].find(item => item.id === id)

    store.selectedMenu = item;

    renderDeliveryItem(item)

    toggleDeliveryOverlay()
  }
}

export default function registerDeliveryMenuEvents() {
  deliveryMenu.addEventListener('click', handleChooseToCartClick)
}