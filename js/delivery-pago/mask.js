const  deliveryPagoForm = document.getElementById('delivery-pago-form')

const {  
  card,
  month,
  year,
  cvv
} = deliveryPagoForm


const cardMask = IMask(card, { mask: '0000 0000 0000 0000' })
const monthMask = IMask(month, { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 })
const yearMask = IMask(year, { mask: '00' })
const cvvMask = IMask(cvv, { mask: '000' })