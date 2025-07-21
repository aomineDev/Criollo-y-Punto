import { deliveryUbicacionForm } from '../dom.js'

import { getCurrentOrder, saveCurrentOrder } from '../../service.js'

function handleSubmitForm(evt) {
  evt.preventDefault()

  const { address } = this

  if (address.value === '') {
    address.classList.add('invalid')

    return
  }

  const currentOrder = getCurrentOrder()

  saveCurrentOrder({ ...currentOrder, address: address.value })

  window.location.href = 'delivery-pago.html'
}

export default function registerDeliveryUbicacionFormEvents() {
  deliveryUbicacionForm.addEventListener('submit', handleSubmitForm)
}