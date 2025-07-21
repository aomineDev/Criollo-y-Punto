export default function DeliveryResume(cart) {
  const quantityProdcuts = cart.length
  let subtotal = 0
  let products = ''

  if (quantityProdcuts === 0) {
    window.location.href = 'delivery.html'
    return
  }

  cart.forEach(item => {
    const { quantity, selectedMenu } = item 
    const { name, price, image } = selectedMenu
    subtotal += quantity * price

    products += /*html*/ `
      <div class="delivery-resume__product">
        <div class="delivery-resume__product-image">
          <img src="./img/delivery/${image}" alt="imagen de un platillo"
            class="delivery-resume__image">
        </div>
        <div class="delivery-resume__product-content">
          <h5 class="delivery-resume__product-title">${name}</h5>
          <div class="delivery-resume__product-details">
            <p class="delivery-resume__product-quantity">Cantidad: ${quantity}</p>
            <p class="delivery-resume__product-price">S/. ${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    `
  })

  const total = (subtotal + 10).toFixed(2)

  return  /*html*/ `
    <div class="delivery-resume__header">
      <h4 class="delivery-resume__title">Resumen del pedido</h4>
      <p class="delivery-resume__quantity">${quantityProdcuts} productos</p>
    </div>
    <div class="delivery-resume__content">
      ${products}
      <a href="delivery.html" class="delivery-resume__add-more"><i class="fa-solid fa-cart-shopping"></i> Añadir más productos</a>
      <div class="separator"></div>
      <div class="delivery-resume__total">
        <div class="delivery-resume__total-line">
          <p>Subtotal</p>
          <p class="delivery-resume__price">S/. ${subtotal.toFixed(2)}</p>
        </div>
        <div class="delivery-resume__total-line">
          <p>Costo de envio</p>
          <p class="delivery-resume__price">S/. 10.00</p>
        </div>
        <div class="delivery-resume__total-line">
          <p>Total</p>
          <p class="delivery-resume__total-price">S/. ${total}</p>
        </div>
      </div>
    </div>
  `
}