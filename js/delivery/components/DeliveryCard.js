export default function DeliveryCard({ id, image, name, price }) {
  return  /*html*/ `
    <div class="delivery-card">
      <div class="delivery-card__image">
        <img src="./img/delivery/${image}" alt="Imagen de un platillo">
      </div>
      <h3 class="delivery-card__title">${name}</h3>
      <p class="delivery-card__price">S/. ${price.toFixed(2)}</p>
      <button type="button" class="delivery-card__button" data-id="${id}">Añadir</button>
    </div>
  `
}
