import { productItemView } from "./productItem";
import { Producto } from "./producto";

export function renderProductList(arreglo: Producto[]){
    const divElement = document.createElement('div')
    arreglo.forEach(product => {
        const elemento = productItemView(product)
        
        divElement.classList.add('cajas');
        divElement.id = 'product-list';
        divElement.innerHTML += elemento;
    });

    return divElement;

}