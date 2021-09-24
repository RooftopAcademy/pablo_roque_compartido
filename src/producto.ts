export class Producto{
    //id: number;
    //_nombre: string;
    //_descripcion: string;
    //_precio: number;
    //_img: string;

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

export let products: Producto[] = [
    {
        id: 1,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
    {
        id: 2,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
    {
        id: 3,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
    {
        id: 4,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
    {
        id: 5,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
    {
        id: 6,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
]

