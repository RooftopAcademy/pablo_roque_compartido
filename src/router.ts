import { btnRedesSociales } from "./helpers/boton-menu"
import { validateContactForm } from "./helpers/validateContactForm"
import { formPage } from "./views/formPage"
import { homePage } from "./views/home"
import  listProductsPage from './views/listProductsPage'
import toggleCardColorOnClick from './helpers/toggleCardColorOnClick'
import {productDetailPage} from './views/renderProductDetail'

const app = document.getElementById("app") as HTMLElement

const routes: any = {
    
    '#/' :  function(){
        app.innerHTML = homePage()
        btnRedesSociales()
    },
    '#/contacto' : function(){
        app.innerHTML = formPage()
        validateContactForm()
    },
    '#/listaproductos' : function(){
        app.innerHTML = listProductsPage()
        toggleCardColorOnClick()
    } ,
    '#/detalleproducto': function(){
        app.innerHTML = productDetailPage(0)
    }
    //'#/users' : () => renderUserList()
}

export function router(route: string) {
    if (routes[route]) {
        routes[route]()
    }

    return routes[route]()

}
