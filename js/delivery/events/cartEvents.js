import { deliveryCartButton } from  '../dom.js'
import  { toggleDeliveryOverlay } from './menuEvents.js'
import { renderDeliveryCart } from '../render.js' 

import store from '../../store.js'


function handleOpenCartClick(evt) {
  renderDeliveryCart(store.cart, handleRemoveItem)

  toggleDeliveryOverlay()
}

function handleRemoveItem(evt) {
  console.log(evt.target)
  console.log(store.cart)
  const id = parseInt(this.dataset.id)
  console.log(id)
  store.cart = store.cart.filter(item => item.selectedMenu.id !== id)
  
  localStorage.setItem('cart', JSON.stringify(store.cart))

  renderDeliveryCart(store.cart, handleRemoveItem)
}

export default function registerDeliveryCartEvents() {
  deliveryCartButton.addEventListener('click', handleOpenCartClick)
}