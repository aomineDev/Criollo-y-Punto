export async function getMenu() {
  const response = await fetch('/data/menu.json')

  if (!response.ok) throw new Error('Error al cargar el menu')

  const menu = await response.json()

  return menu
}

export function getCart() {
  if (localStorage.getItem('cart'))
    return JSON.parse(localStorage.getItem('cart'))

  return []
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function clearCart() {
  localStorage.removeItem('cart')
}

export function getCurrentOrder() {
  if (localStorage.getItem('currentOrder'))
    return JSON.parse(localStorage.getItem('currentOrder'))

  return {}
}

export function saveCurrentOrder(currentOrder) {
  localStorage.setItem('currentOrder', JSON.stringify(currentOrder))
}

export function clearCurrentOrder() {
  localStorage.removeItem('currentOrder')
}

export function getOrders() {
  if (localStorage.getItem('orders'))
    return JSON.parse(localStorage.getItem('orders'))

  return []
}

export function saveOrder(order) {
  const orders = getOrders()

  orders.push(order)

  localStorage.setItem('orders', JSON.stringify(orders))
}