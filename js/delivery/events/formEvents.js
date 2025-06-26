import { deliveryForm } from '../dom.js'

function handleDeliveryFormSubmit(evt) {
  evt.preventDefault()
  alert("se hizo submit")
  // que haga algo
}

export function registerDeliveryFormEvents() {
  deliveryForm.addEventListener('submit', handleDeliveryFormSubmit)
}