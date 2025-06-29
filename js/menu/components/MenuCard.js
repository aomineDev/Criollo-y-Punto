export function MenuCard({ image, name, price, description }) {

    return /*html*/ `
        <article class="content__box">
            <img class="box__img" src="img/Delivery/${image}" alt="">
            <div class="box__text">
                <h3>${name}</h3>
                <p>${description}</p>
                <p class="box__p">S/${price.toFixed(2)}</p>
            </div>
        </article>
    `
}