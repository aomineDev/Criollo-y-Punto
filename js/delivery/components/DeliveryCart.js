export default function DeliveryCart(cart) {
  let rows = ''
  let cartTotal = 0

  cart.forEach(item => {
    const total = (item.quantity * item.selectedMenu.price).toFixed(2)
    cartTotal += parseFloat(total)

    rows += /*html*/ `
      <tr>
        <td><img src="./img/delivery/${item.selectedMenu.image}" alt="Imagen de un platillo" class="delivery-cart__image"></td>
        <td>${item.selectedMenu.name}</td>
        <td><button class="delivery-cart__quantity-btn delivery-cart-quantity-btn-minus" data-id="${item.selectedMenu.id}">-</button> <span class="delivery-cart__quantity" id="delivery-cart-quantity-${item.selectedMenu.id}" data-id="${item.selectedMenu.id}">${item.quantity}</span> <button class="delivery-cart__quantity-btn delivery-cart-quantity-btn-plus" data-id="${item.selectedMenu.id}">+</button></td>
        <td>S/. ${total}</td>
        <td><button class="delivery-cart__remove-btn" data-id="${item.selectedMenu.id}"><i class="fa-regular fa-trash-can"></i></button></td>
      </tr>
    `
  })

  return  /*html*/ `
    <div class="delivery-cart" id="delivery-cart">
      <h2 class="delivery-cart__title">Lista de Pedidos</h2>
      <div class="delivery-cart__wrapper">
        <table class="delivery-cart__table">
          <thead>
            <tr>
              <th></th>
              <th>Platillo</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total:</td>
              <td colspan="2">S/. ${cartTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="delivery-cart__actions">
        <button type="button" class="delivery-modal-form__button" id="delivery-modal-close">Cerrar</button>
      </div>
    </div>
  `
}