import { Menu } from "./boton-menu"
import { validarFormulario } from "./contacto"
import { formPage } from "./formPage"
import { homePage } from "./home"
import { Producto, products1 } from "./producto"
import { renderProductList } from "./renderProductList"
import { renderUserList } from "./renderUserList"
import { UI } from "./UI"
import { users } from "./userApi"


const contenido = document.getElementById('contenedor') as HTMLElement
let ui = new UI
ui.addUsers(users)
const arreglo_usuarios = ui.getUsers()

export function router(route: string){
    contenido.innerHTML = '';
    
    switch (route) {
        case '#/':{
            Menu()
            return contenido.innerHTML = homePage()
        }      
        case '#/contacto':{
            contenido.innerHTML = formPage()
            //validarFormulario()
            return contenido.innerHTML;
        }  
        case '#/listaproductos':{
            return contenido.appendChild(renderProductList(products1))
            //return console.log("lista de productos")
        }
        case '#/users':{
            return renderUserList()
        }  
        default:
            return console.log('404 NOT FOUND')
    }
}