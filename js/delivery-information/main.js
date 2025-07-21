import { getCart } from '../service.js'
import store from '../store.js'
import { renderDeliveryResume } from './render.js'
import registerDeliveryInformationFormEvents from './events/formEvents.js'


store.cart = getCart()

renderDeliveryResume(store.cart)

registerDeliveryInformationFormEvents()