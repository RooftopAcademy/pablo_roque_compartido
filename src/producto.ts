class Producto{
    _id: number;
    _nombre: string;
    _descripcion: string;
    _precio: number;
    _img: string;

    constructor(){
        this._id = 0;
        this._nombre = '';
        this._descripcion = '';
        this._precio = 0;
        this._img = '';
    }

    get id(){
        return this._id;
    }

    get nombre(): string{
        return this._nombre
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get descripcion(): string{
        return this._descripcion
    }

    set descripcion(descripcion: string){
        this._descripcion = descripcion;
    }

    get precio(): number{
        return this._precio
    }

    set precio(precio: number){
        this._precio = precio;
    }

    get img(): string{
        return this._img;
    }

    set img(img: string){
        this._img = img;
    }

}

let products = [
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
        id: 3,
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
        id: 3,
        nombre: "Nootbock Asus",
        descripcion: "Zenboock 14 UX42X",
        precio: 15000,
        img: "img/pc1.jpg",
    },
]