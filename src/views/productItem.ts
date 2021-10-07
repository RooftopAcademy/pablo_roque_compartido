import { Producto } from "../models/producto";

export function productItemView(product: Producto){
    return `
        <div class="caja">
            <a href="#/detalleproducto" onClick="showID(this.id)" class="enlace-detalle" id="${product.id}"><img src="${product.img}" alt=""></a>
            <h3>$${product.precio}</h3>
            <p>
                ${product.nombre}
            </p>
            <input type="submit" value="Agregar" class="btn-agregar">
        </div>
    `;
};
