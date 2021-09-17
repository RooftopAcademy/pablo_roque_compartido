class Producto{
    constructor(id,nombre,descripcion,precio, urlImagen){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.urlImagen = urlImagen;
    }
    
}
const product1 = new Producto(1,"Nootbock Asus", "Zenboock 14 UX42X", 15000, "img/pc1.jpg");
const product2 = new Producto(2,"Nootbock Lenovo", "Intel i8 14 UX42X", 18000, "img/pc2.jpg");
const product3 = new Producto(3,"Nootbock HP", "AMD 14 XFH", 23000, "img/pc3.jpg");