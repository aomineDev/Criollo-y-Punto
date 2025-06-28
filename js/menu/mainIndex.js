import { renderMenuCard } from "./render.js";
import { menuCardEntradas, menuCardSopas, menuCardCriollo, menuCardPostres, menuCardBebidas } from "./dom.js";
import { getMenu } from "../service.js";
import store from "../store.js";

async function init() {

  store.menu = await getMenu()

  renderMenuCard(store.menu.entradas, menuCardEntradas)
  renderMenuCard(store.menu.sopas, menuCardSopas)
  renderMenuCard(store.menu.criollo, menuCardCriollo)
  renderMenuCard(store.menu.postres, menuCardPostres)
  renderMenuCard(store.menu.bebidas, menuCardBebidas)

}

window.addEventListener('load', init)