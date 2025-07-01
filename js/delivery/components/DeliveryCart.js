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
        <td>${item.quantity}</td>
        <td>S/. ${total}</td>
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
            </tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total:</td>
              <td>S/. ${cartTotal.toFixed(2)}</td>
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