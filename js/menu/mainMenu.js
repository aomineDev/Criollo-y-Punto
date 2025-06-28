import { renderMenuTable } from "./render.js";
import { menuTableEntradas, menuTableSopas, menuTableCriollo, menuTablePostres, menuTableBebidas } from "./dom.js";
import { getMenu } from "../service.js";
import store from "../store.js";

async function init() {

  store.menu = await getMenu()

  renderMenuTable(store.menu.entradas, menuTableEntradas)
  renderMenuTable(store.menu.sopas, menuTableSopas)
  renderMenuTable(store.menu.criollo, menuTableCriollo)
  renderMenuTable(store.menu.postres, menuTablePostres)
  renderMenuTable(store.menu.bebidas, menuTableBebidas)

}

window.addEventListener('load', init)
