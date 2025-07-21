import { getCart } from '../service.js'
import store from '../store.js'
import { renderDeliveryResume } from '../delivery-information/render.js'
import registerDeliveryUbicacionFormEvents from './events/formEvents.js'

store.cart = getCart()

renderDeliveryResume(store.cart)

registerDeliveryUbicacionFormEvents()