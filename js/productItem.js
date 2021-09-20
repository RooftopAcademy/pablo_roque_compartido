function productItemView(product){
    return `
        <div class="caja">
            <img src="${product.urlImagen}" alt="">
            <h3>$${product.precio}</h3>
            <p>
                ${product.nombre}
            </p>
            <input type="submit" value="Agregar">
        </div>
    `;
};

