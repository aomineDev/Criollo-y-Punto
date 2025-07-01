import store from '../../store.js'
import { toggleDeliveryOverlay } from './modalEvents.js'

function handleQuantityInput (evt) {
  const total = getTotal(this)

  document.getElementById('delivery-modal-total').textContent = `Total: S/. ${total}`
}
function handleSubmitForm (evt) {
  evt.preventDefault()

  const quantity = parseInt(this.quantity.value)
  const details = this.details.value
  const selectedMenu = store.selectedMenu

  const repeatedItem = store.cart.findIndex(item => item.selectedMenu.id === selectedMenu.id)

  if (repeatedItem !== -1)
    store.cart[repeatedItem].quantity += quantity
  else
    store.cart.push({ quantity, details, selectedMenu })

  localStorage.setItem('cart', JSON.stringify(store.cart))
  
  toggleDeliveryOverlay()
}

function getTotal (input) {
  const quantity = parseInt(input.value) || 0
  const price = parseFloat(input.dataset.price)

  return (quantity * price).toFixed(2)
}

export default function registerDeliveryItemEvents (form) {
  form.quantity.addEventListener('input', handleQuantityInput)
  form.addEventListener('submit', handleSubmitForm)
}
