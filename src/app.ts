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