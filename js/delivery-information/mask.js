const deliveryInformationForm = document.getElementById('delivery-information-form')

const { phone } = deliveryInformationForm

const cardMask = IMask(phone, { mask: '000 000 000' })