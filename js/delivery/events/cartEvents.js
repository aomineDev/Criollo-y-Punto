import { deliveryCartButton } from  '../dom.js'
import  { toggleDeliveryOverlay } from './menuEvents.js'
import { renderDeliveryCart } from '../render.js' 

import store from '../../store.js'


function handleOpenCartClick(evt) {
  renderDeliveryCart(store.cart)

  toggleDeliveryOverlay()
}

export default function registerDeliveryCartEvents() {
  deliveryCartButton.addEventListener('click', handleOpenCartClick)
}