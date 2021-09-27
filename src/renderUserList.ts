import { UI } from "./UI";
import { User } from "./user";
import { getUsers, users } from "./userApi";
import { usuarioView } from "./usuarioItem";

const contenido = document.getElementById('contenedor') as HTMLElement
const url: string = "https://jsonplaceholder.typicode.com/users";
getUsers(url);
console.log(users)
export function renderUserList(){
    // const ui = new UI()
    // ui.addUsers(users)
    // const arregloUsers = ui.getUsers()
    users.forEach(user=> {
        const elemento = usuarioView(user);
        contenido.innerHTML += elemento;
    });
    
}