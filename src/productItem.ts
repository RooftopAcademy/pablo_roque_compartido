import { Producto } from "./producto";

export function productItemView(product: Producto){
    return `
        <div class="caja" id="${product.id}">
            <a href="/detalleproducto" class="enlace-detalle"><img src="${product.img}" alt=""></a>
            <h3>$${product.precio}</h3>
            <p>
                ${product.nombre}
            </p>
            <input type="submit" value="Agregar" class="btn-agregar">
        </div>
    `;
};
