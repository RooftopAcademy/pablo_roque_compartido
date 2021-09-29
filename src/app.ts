import { router } from "./routes";
function app(){

    window.location.hash = '#/'
    router(window.location.hash)
    window.addEventListener('hashchange',function(){
        router(window.location.hash)
    })
}

app()