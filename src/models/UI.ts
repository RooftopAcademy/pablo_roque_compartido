import { Producto } from './producto';
import { User } from './user';


export class UI{
    products: Producto[];
    users: User[];
    constructor(){
        this.products = []
        this.users = []
    }

    addProducts(products1: Producto[]){
        products1.forEach((item) =>{
            let product = new Producto()
                product.id = item.id
                product.nombre = item.nombre
                product.descripcion = item.descripcion
                product.precio = item.precio
                product.img = item.img
            this.products.push(product) 
        });
    }

    addUsers(users: User[]){
        users.forEach((usuario) =>{
            let user = new User()
                user.id = usuario.id
                user.name = usuario.name
                user.username = user.username
                user.email = usuario.email
            this.users.push(user)    
        });
    }

    getProducts(): Producto[]{
        return this.products
    }

    getUsers(): User[]{
        return this.users
    }

}
