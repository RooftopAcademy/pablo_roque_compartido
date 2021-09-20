function productItemView(id){
    return `
        <div class="caja">
            <img src="${product.img}" alt="">
            <h3>$${product.precio}</h3>
            <p>
                ${product.nombre}
            </p>
            <button class="btn-agregar">Agregar</button>
        </div>
    `;
};
