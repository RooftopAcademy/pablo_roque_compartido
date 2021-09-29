import { btnRedesSociales } from "./helpers/boton-menu"
import { validarFormulario } from "./helpers/formValidator"
import { formPage } from "./views/formPage"
import { homePage } from "./views/home"
import { products1 } from "./models/producto"
import { renderProductList } from "./components/renderProductList"
import { renderUserList } from "./components/renderUserList"
import { UI } from "./models/UI"
import { users } from "./services/userApi"


const contenido = document.getElementById('contenedor') as HTMLElement
let ui = new UI
ui.addUsers(users)

export function router(route: string){
    contenido.innerHTML = '';
    
    switch (route) {
        case '#/':{
            btnRedesSociales()
            contenido.classList.remove('listado')
            contenido.setAttribute('class','inicio')
            return contenido.innerHTML = homePage()
        }      
        case '#/contacto':{
            contenido.classList.remove('listado')
            contenido.innerHTML = formPage()
            validarFormulario()
            return contenido.innerHTML;
        }  
        case '#/listaproductos':{
            contenido.setAttribute('class','listado')
            return contenido.appendChild(renderProductList(products1))
            //return console.log("lista de productos")
        }
        case '#/users':{
            contenido.setAttribute('class','listado')
            return renderUserList()
        }  
        default:
            return console.log('404 NOT FOUND')
    }
}