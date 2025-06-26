export function DeliveryCard({ image, name, price }) {
  return /*html*/ `
    <div class="delivery__card">
      <div class="delivery__card-image">
        <img src="./img/delivery/${image}" alt="Imagen de un platillo">
      </div>
      <h3 class="delivery__card-title">${name}</h3>
      <p class="delivery__card-price">S/. ${price.toFixed(2)}</p>
      <button type="button" class="delivery__card-button">Añadir</button>
    </div>
  `
}
