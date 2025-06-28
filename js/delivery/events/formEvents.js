import store from '../../store.js'

import {  deliveryForm, deliveryFormRangeValue } from '../dom.js'

import { renderDeliveryMenu } from '../render.js'

function handleSearchInput(evt) {
  renderDeliveryMenu(store.menu[deliveryForm.categories.value].filter(item => filterCondition(item, this.value, deliveryForm.range.value)))
}

function handleCategorieInput(evt) {
  deliveryForm.range.value = 100
  deliveryForm.search.value = ''
  handleRangeDisplay(deliveryForm.range, 100)
  renderDeliveryMenu(store.menu[this.value])
}

function handleRangeInput(evt) {
  const percentage = (this.value / this.max) * 100
  handleRangeDisplay(this, percentage)
  renderDeliveryMenu(store.menu[deliveryForm.categories.value].filter(item => filterCondition(item, deliveryForm.search.value, this.value)))
}

function handleRangeDisplay(range, percentage) {
    range.style.setProperty('--range-value', percentage + '%');
    deliveryFormRangeValue.style.left = `${percentage >= 90 ? 90 : percentage}%`
    deliveryFormRangeValue.innerHTML = range.value
}

function filterCondition(item, name, price) {
  return item.name.toLowerCase().includes(name.toLowerCase()) && item.price <= parseInt(price)
}

export default function registerDeliveryFormEvents() {
  deliveryForm.range.addEventListener('input', handleRangeInput)
  deliveryForm.search.addEventListener('input', handleSearchInput)
  deliveryForm.categories.addEventListener('change', handleCategorieInput)
}