import ProductInterface from '../interfaces/productInterface'
export class Producto implements ProductInterface{

    constructor(){
        this.id = 0;
        this.nombre = '';
        this.descripcion = '';
        this.precio = 0;
        this.img = '';
    }

    get id(){
        return this.id;
    }

    set id(id:number){
        this.id = id;
    }

    get nombre(): string{
        return this.nombre
    }

    set nombre(nombre: string){
        this.nombre = nombre;
    }

    get descripcion(): string{
        return this.descripcion
    }

    set descripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    get precio(): number{
        return this.precio
    }

    set precio(precio: number){
        this.precio = precio;
    }

    get img(): string{
        return this.img;
    }

    set img(img: string){
        this.img = img;
    }

}

export let products1: Producto[] = [
    {
        id: 1,
        nombre: "Nootbock Asus",
        descripcion: "El nuevo ZenBook 14 es más portátil que nunca. Es más fino, ligero y compacto, sin embargo; los puertos HDMI, Thunderbolt™ 4 USB-C®, USB de tipo A y el lector de tarjetas micro-SD le dan una versatilidad inigualable. ",
        precio: 5000,
        img: "img/pc1.jpg",
    },
    {
        id: 2,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 45000,
        img: "img/pc2.jpg",
    },
    {
        id: 3,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 28000,
        img: "img/pc3.jpg",
    },
    {
        id: 4,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 700,
        img: "img/pc3.jpg",
    },
    {
        id: 5,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 70000,
        img: "img/pc2.jpg",
    },
    {
        id: 6,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 10000,
        img: "img/pc1.jpg",
    },
]

