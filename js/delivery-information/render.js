import DeliveryResume from './components/DeliveryResume.js'
import { deliveryResume } from './dom.js'

export const renderDeliveryResume = cart => deliveryResume.innerHTML = DeliveryResume(cart)