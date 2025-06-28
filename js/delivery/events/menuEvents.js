import store from '../../store.js'
import { deliveryMenu, deliveryForm, deliveryModal } from '../dom.js'

const selectedMenu = {}

function handleChooseToCartClick(evt) {
  if (evt.target.classList.contains('delivery-card__button')) {

    const id = parseInt(evt.target.dataset.id)
    const item = store.menu[deliveryForm.categories.value].find(item => item.id === id)

    selectedMenu = item;

    

    deliveryModal.classList.toggle('active')
  }
}

function handleOverlayClick(evt) {
  if (evt.target.id === 'delivery-modal') 
    deliveryModal.classList.toggle('active')
}

export default function menuEvents() {
  deliveryMenu.addEventListener('click', handleChooseToCartClick)
  deliveryModal.addEventListener('click', handleOverlayClick)
}