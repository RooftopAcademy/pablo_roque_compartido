class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const elemento = productItemView(product);
        console.log(elemento);
        productList.innerHTML += elemento;
    }

    deleteProduct(){

    }
}

console.log(product1);
const ui = new UI();
ui.addProduct(product1);
ui.addProduct(product2);
ui.addProduct(product3);