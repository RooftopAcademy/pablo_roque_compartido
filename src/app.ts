import { UI } from "./models/UI"
import { users } from "./services/userApi"
import {router} from './router'

class App {
    private container? : HTMLElement
    private router : any

    public loadRouter() : void {
        this.router = router

        /**
         * Url por defecto
         */
        window.location.hash = '#/'

        /**
         * Redirigiendo a la url por defecto
         */
        router(window.location.hash)

        /**
         * Detecta el cambio de la url y despacha la accion al router
         */
        window.addEventListener('hashchange', () => {
            /**
             * Limpia la vista actual cuando cambia una ruta
             */
            this.render(this.container as HTMLElement)

            /**
             * Insertando el contenido de la pagina
             */
            router(window.location.hash)
        })
    }

    render(element : HTMLElement, content : string = '') {
        element.innerHTML = content
    }

    public setContainer(container : HTMLElement) {
        this.container = container
    }
}

let app = new App
app.setContainer(document.getElementById('contenedor') as HTMLElement)





 /**
  * Inicializa el store de datos
  */
 let store = new UI
 
 /**
  * Cargar la lista de usuarios
  */
 store.addUsers(users)
