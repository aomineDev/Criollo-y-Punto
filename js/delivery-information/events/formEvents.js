import { deliveryInformationForm } from '../dom.js'

import { isRequired, isPhone, isEmail } from '../../util/validator.js'

import { saveCurrentOrder } from '../../service.js'

function handleSubmitForm(evt) {
  let errorCount = 0

  evt.preventDefault()

  const { name, lastname, phone, email } = this

  errorCount += isRequired(name)
  errorCount += isRequired(lastname)
  errorCount += isRequired(phone)
  errorCount += isRequired(email)
  errorCount += isPhone(phone)
  errorCount += isEmail(email)

  console.log(errorCount)

  if (errorCount > 0) return

  saveCurrentOrder({    
    name: name.value,
    lastname: lastname.value,
    phone: phone.value,
    email: email.value
  })

  window.location.href = 'delivery-ubicacion.html'
}

function handleInput(evt) {
  this.classList.remove('invalid')
}

export default function registerDeliveryInformationFormEvents() {
  deliveryInformationForm.addEventListener('submit', handleSubmitForm)
  deliveryInformationForm.name.addEventListener('input', handleInput)
  deliveryInformationForm.lastname.addEventListener('input', handleInput)
  deliveryInformationForm.phone.addEventListener('input', handleInput)
  deliveryInformationForm.email.addEventListener('input', handleInput)
}

