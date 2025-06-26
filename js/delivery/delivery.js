import { getMenu } from '../service.js'
import { renderDeliveryMenu } from './render.js'
import { registerDeliveryFormEvents  } from  './events/formEvents.js'

const menu = await getMenu()

renderDeliveryMenu(menu.entradas)
registerDeliveryFormEvents()