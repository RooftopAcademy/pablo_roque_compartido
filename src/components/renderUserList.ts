import { getUsers, users } from "../services/userApi";
import { usuarioView } from "../views/usuarioItem";

const contenido = document.getElementById('contenedor') as HTMLElement
const URL: string = "https://jsonplaceholder.typicode.com/users";
getUsers(URL);
export function renderUserList(){

    users.forEach(user=> {
        const elemento = usuarioView(user);
        contenido.innerHTML += elemento;
    });
    
}