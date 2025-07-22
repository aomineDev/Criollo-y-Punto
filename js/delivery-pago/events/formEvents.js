import { deliveryPagoForm } from '../dom.js'

import { isRequired, isEqualLength } from '../../util/validator.js'

import {getCurrentOrder, saveOrder, getCart, clearCart, clearCurrentOrder } from '../../service.js'

function handleSubmitForm(evt) {
  evt.preventDefault()

  const { card, month, year, cvv } = this

  let errorCount = 0

  errorCount += isRequired(card)
  errorCount += isRequired(month)
  errorCount += isRequired(year)
  errorCount += isRequired(cvv)

  errorCount += isEqualLength(card, 19)
  errorCount += isEqualLength(month, 2)
  errorCount += isEqualLength(year, 2)
  errorCount += isEqualLength(cvv, 3)

  if (errorCount > 0) return

  const currentOrder = getCurrentOrder()
  const cart = getCart()

  saveOrder({ ...currentOrder, orderItems: cart })

  clearCart()
  clearCurrentOrder()

  window.location.href = 'delivery.html'
}

function handleInput(evt) {
  this.classList.remove('invalid')
}

export default function registerDeliveryPagoFormEvents() {
  deliveryPagoForm.addEventListener('submit', handleSubmitForm)

  deliveryPagoForm.card.addEventListener('input', handleInput)
  deliveryPagoForm.month.addEventListener('input', handleInput)
  deliveryPagoForm.year.addEventListener('input', handleInput)
  deliveryPagoForm.cvv.addEventListener('input', handleInput)
}