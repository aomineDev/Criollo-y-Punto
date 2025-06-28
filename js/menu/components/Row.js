export function Row({ image, name, price, description }) {

    return /*html*/ `
        <tr class="table__row">
            <td><img src="img/Delivery/${image}" alt=""></td>
            <td>
                <p>${name}</p>
            </td>
            <td>
                <p>${description}</p>
            </td>
            <td>
                <p>S/. ${price}</p>
            </td>
        </tr>
    `
}