import { UI } from "./UI";
import { users } from './userApi';
import { products1 } from './producto';
import { detalleItemView } from "./detalleView";
import { Menu } from "./boton-menu";
import { validarFormulario } from "./contacto";
import { homePage } from "./home";
import { formPage } from "./formPage";
import { router } from "./routes";


function app(){

    //  Array.from(rutas).forEach(ruta =>{
    //      ruta.addEventListener('click',function(e: Event){
    //          const pages = {
    //             'file:///' : homePage,
    //             'file:///listaproductos': ui.addProducts,
    //             'file:///product-detail': detalleItemView,
    //             'file:///users': ui.addUsers,
    //             'file:///contacto': formPage,
    //         }
                 
    //      })
    //  });

    //  validarFormulario();
    window.location.hash = '#/'
    router(window.location.hash)
    window.addEventListener('hashchange',function(){
        router(window.location.hash)
    })
}

app()