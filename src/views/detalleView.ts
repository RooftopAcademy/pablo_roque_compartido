import { Producto } from "../models/producto";

export default function detalleItemView(product: Producto){
    return `
        <div>
            <img src="${product.img}" alt="">
        </div>

        <div class="caracteristicas">
            <p>
                Notebook Asus Zenbook 14 UX425EA-BM004T 
                Intel Core i5 1135G7 8Gb SSD 512Gb 14" 
                Win10 
            </p>
        </div>

        <div class="descripcion">
            <h2>Descripcion</h2>
            <p>
                ${product.descripcion}
            </p>
        </div>

        <div class="boton">
            <button>Comprar</button>
        </div>
    `;
};
