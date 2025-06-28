export default function DeliveryModal( { id, img, name, price }) {
  return /* html */ `
    <div class="delivery-modal__content">
      <img src="./img/delivery/${img}" alt="Imagen de un platillo">
      <h3 class="delivery-modal__title">${name}</h3>
      <p class="delivery-modal__price">S/. ${price.toFixed(2)}</p>
      <button type="button" class="delivery-modal__button" data-id="${id}">Añadir</button>
    </div>
  `
}