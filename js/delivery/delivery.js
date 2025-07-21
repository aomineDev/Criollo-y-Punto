import { getMenu, getCart } from '../service.js'
import { renderDeliveryMenu } from './render.js'
import registerDeliveryFormEvents from './events/formEvents.js'
import registerDeliveryCartEvents from './events/cartEvents.js'
import registerDeliveryModalEvents from './events/modalEvents.js'
import store from '../store.js'

async function init() {
  store.menu = await getMenu()

  store.cart = getCart()
  
  renderDeliveryMenu(store.menu.entradas)
  registerDeliveryFormEvents()
  registerDeliveryModalEvents()
  registerDeliveryCartEvents()
}

window.addEventListener('load', init)
