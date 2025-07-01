export default function DeliveryItem( { id, image, name, price }) {
  return /* html */ `
    <div class="delivery-modal__content">
      <img src="./img/delivery/${image}" alt="Imagen de un platillo" class="delivery-modal__image">
      <div class="delivery-modal__details">
        <div class="delivery-modal__header">
          <h3 class="delivery-modal__title">${name}</h3>
          <p class="delivery-modal__price">S/. ${price.toFixed(2)}</p>
        </div>
        <form class="delivery-modal-form" id="delivery-modal-form" data-id="${id}">
          <div class="delivery-form__field">
            <label for="delivery-modal-quantity" class="delivery-form__label">Cantidad</label>
            <input type="number" id="delivery-modal-quantity" name="quantity" class="delivery-form__text" value="1" required min="1" data-price="${price}">
          </div>
          <div class="delivery-form__field">
            <label for="delivery-modal-form-details" class="delivery-form__label">Detalles</label>
            <input type="text" class="delivery-form__text" name="details" id="delivery-modal-form-details">
          </div>
          <p class="delivery-modal-form__total" id="delivery-modal-total">Total: S/. ${price.toFixed(2)}</p>
          <div class="delivery-modal-form__actions">
            <button type="button" class="delivery-modal-form__button" id="delivery-modal-close">Cerrar</button>
            <button type="submit" class="delivery-modal-form__button delivery-modal-form__button--primary">Añadir</button>
          </div>
        </form>
      </div>
    </div>
  `
}