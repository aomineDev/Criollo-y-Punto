import { getMenu } from '../service.js'
import { renderDeliveryMenu } from './render.js'
import registerDeliveryFormEvents from './events/formEvents.js'
import registerDeliveryMenuEvents from './events/menuEvents.js'
import registerDeliveryCartEvents from './events/cartEvents.js'
import store from '../store.js'

async function init() {
  store.menu = await getMenu()

  renderDeliveryMenu(store.menu.entradas)
  registerDeliveryFormEvents()
  registerDeliveryMenuEvents()
  registerDeliveryCartEvents()
}

window.addEventListener('load', init)
