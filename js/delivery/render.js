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

export function renderDeliveryCart (cart, handleRemoveItem, handleQuantityMinus, handleQuantityPlus) {
  deliveryModal.innerHTML = DeliveryCart(cart)

    document.querySelectorAll('.delivery-cart__remove-btn').forEach(btn => btn.addEventListener('click', handleRemoveItem))

    document.querySelectorAll('.delivery-cart-quantity-btn-minus').forEach(btn => btn.addEventListener('click', handleQuantityMinus))
    document.querySelectorAll('.delivery-cart-quantity-btn-plus').forEach(btn => btn.addEventListener('click', handleQuantityPlus))
}