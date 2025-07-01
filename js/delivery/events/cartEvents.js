import { deliveryCartButton } from  '../dom.js'
import  { toggleDeliveryOverlay } from './menuEvents.js'
import { renderDeliveryCart } from '../render.js' 

import store from '../../store.js'


function handleOpenCartClick(evt) {
  renderDeliveryCart(store.cart, handleRemoveItem, handleQuantityMinus, handleQuantityPlus)

  toggleDeliveryOverlay()
}

function handleRemoveItem(evt) {
  const id = parseInt(this.dataset.id)

  store.cart = store.cart.filter(item => item.selectedMenu.id !== id)
  
  localStorage.setItem('cart', JSON.stringify(store.cart))

  renderDeliveryCart(store.cart, handleRemoveItem, handleQuantityMinus, handleQuantityPlus)
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

  renderDeliveryCart(store.cart, handleRemoveItem, handleQuantityMinus, handleQuantityPlus)
}

function handleQuantityPlus (evt) {
  const id = parseInt(this.dataset.id)

  store.cart = store.cart.map(item => {
    if (item.selectedMenu.id === id) 
      item.quantity++
    return item
  })

  localStorage.setItem('cart', JSON.stringify(store.cart))

  renderDeliveryCart(store.cart, handleRemoveItem, handleQuantityMinus, handleQuantityPlus)
}

export default function registerDeliveryCartEvents() {
  deliveryCartButton.addEventListener('click', handleOpenCartClick)
}