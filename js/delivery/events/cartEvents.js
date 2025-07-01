import { deliveryCartButton } from  '../dom.js'
import  { toggleDeliveryOverlay } from './modalEvents.js'
import { renderDeliveryCart } from '../render.js' 

import store from '../../store.js'


function handleOpenCartClick(evt) {
  renderDeliveryCart(store.cart)

  toggleDeliveryOverlay()
}

function handleRemoveItem(evt) {
  const id = parseInt(this.dataset.id)

  store.cart = store.cart.filter(item => item.selectedMenu.id !== id)
  
  localStorage.setItem('cart', JSON.stringify(store.cart))

  renderDeliveryCart(store.cart)
}

function handleQuantityMinus (evt) {
  const id = parseInt(this.dataset.id)

  store.cart = store.cart.map(item => {
    if (item.selectedMenu.id === id)  {
      if (item.quantity > 1)
        item.quantity--
    }
    return item
  })

  localStorage.setItem('cart', JSON.stringify(store.cart))

  renderDeliveryCart(store.cart)
}

function handleQuantityPlus (evt) {
  const id = parseInt(this.dataset.id)

  store.cart = store.cart.map(item => {
    if (item.selectedMenu.id === id) 
      item.quantity++
    return item
  })

  localStorage.setItem('cart', JSON.stringify(store.cart))

  renderDeliveryCart(store.cart)
}

export default function registerDeliveryCartEvents() {
  deliveryCartButton.addEventListener('click', handleOpenCartClick)
}

export function registerDynamicDeliveryCartEvents() {
  document.querySelectorAll('.delivery-cart__remove-btn').forEach(btn => btn.addEventListener('click', handleRemoveItem))
  document.querySelectorAll('.delivery-cart-quantity-btn-minus').forEach(btn => btn.addEventListener('click', handleQuantityMinus))
  document.querySelectorAll('.delivery-cart-quantity-btn-plus').forEach(btn => btn.addEventListener('click', handleQuantityPlus))
}