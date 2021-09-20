class Carrito{
    constructor(){
        this.products = []
    }

    agregarCarrito(product){
        this.products.push(product)
    }

    addCarrito(){
        const listCarrito = document.getElementById('list-carrito');
        this.products.forEach((item) =>{
            let product = new Producto()
                product.id = item.id
                product.nombre = item.nombre
                product.descripcion = item.descripcion
                product.precio = item.precio
                product.img = item.img
            console.log(product)    
            const elemento = productItemView(product);
            listCarrito.innerHTML += elemento;
        });
    }

}
