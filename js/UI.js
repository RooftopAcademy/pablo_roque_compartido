class UI{
    /*addProduct(product){
        const listCarrito = document.getElementById('list-carrito');
        const elemento = productItemView(product);
        listCarrito.innerHTML += elemento;
    }*/

    addProducts(products){
        const productList = document.getElementById('product-list');
        products.forEach((item) =>{
            let product = new Producto()
                product.id = item.id
                product.nombre = item.nombre
                product.descripcion = item.descripcion
                product.precio = item.precio
                product.img = item.img
            console.log(product)    
            const elemento = productItemView(product);
            productList.innerHTML += elemento;
        });
    }
}
const ui = new UI();
ui.addProducts(products);

/*const btn = document.getElementById('btn-agregar');
btn.addEventListener('click',function(e){
    /*const id = document.getElementById(products[0])*/
    /*const carrito = new Carrito();
    carrito.agregarCarrito(products[0])
    carrito.addCarrito();
    e.preventDefault();
});*/


/*Array.from(document.getElementsByClassName('elemento').forEach(el => {
    el.addEventListener('click',function(e){
        e.preventDefault
        console.log('')
        e.target.href == 'contacto'
    })
}))*/ 