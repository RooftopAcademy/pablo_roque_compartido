import { Producto } from "./producto"

export class Carrito{
    _productsCarrito: Producto[]

    constructor(){
        this._productsCarrito = []
    }

    addCarrito(producto: Producto){
        this._productsCarrito.push(producto)
    }

    borrarCarrito(id: number){
        this._productsCarrito.forEach(producto => {
            if (producto.id == id){
                let indice = this._productsCarrito.indexOf(producto)
                this._productsCarrito.slice(indice)
            }
        })
    }
}