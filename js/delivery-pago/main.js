import { getCart } from '../service.js'
import store from '../store.js'
import { renderDeliveryResume } from '../delivery-information/render.js'
import registerDeliveryPagoFormEvents from './events/formEvents.js'

store.cart = getCart()

renderDeliveryResume(store.cart)

registerDeliveryPagoFormEvents()