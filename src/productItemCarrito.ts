import { Producto } from "./producto";

export function productItemCarritoView(product: Producto){
    return `
        <div class="caja" id="${product.id}">
            <a href="detalleproducto.html"><img src="${product.img}" alt=""></a>
            <h3>$${product.precio}</h3>
            <p>
                ${product.nombre}
            </p>
            <input type="submit" value="Borrar" class="btn-borrar">
        </div>
    `;
};
