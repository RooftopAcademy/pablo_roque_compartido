import { btnRedesSociales } from "./helpers/boton-menu"
import { validateContactForm } from "./helpers/validateContactForm"
import { formPage } from "./views/formPage"
import { homePage } from "./views/home"
import { products1 } from "./models/producto"
import { renderProductList } from "./components/renderProductList"
import { renderUserList } from "./components/renderUserList"
import toggleCardColorOnClick from './helpers/toggleCardColorOnClick'

let routes = {
    '#/' : function () {
        homePage()
    },
    '#/contacto' : function () {
        formPage()
    },
    '#/listaproductos' : function () {
        renderProductList(products1)
    },
    '#/users' : function () {
        renderUserList()
    }
}

export function router(route: string) {
    if (routes[route]) {
        routes[route]()
    }


    // switch (route) {
        // case '#/': {
            // Asigna un evento a un elemento
            // btnRedesSociales()

            // cambios en el contenedor
            // contenedor.classList.remove('listado')
            // contenedor.setAttribute('class','inicio')
            
            // render(contenedor, homePage())
        // }

        // case '#/contacto':{
            // contenedor.classList.remove('listado')
            // contenedor.innerHTML = formPage()
            // validateContactForm() // despues de que se cargo la pagina
        // }  
        
        // case '#/listaproductos':{
            // contenedor.setAttribute('class','listado')
            // contenedor.appendChild(renderProductList(products1))
            // toggleCardColorOnClick(); // despues que se cargo la pagina
        // }

        // case '#/users':{
            // contenedor.setAttribute('class','listado')
            // return renderUserList()
        // }
        
        // default:
            // return console.log('404 NOT FOUND')
    // }
}
