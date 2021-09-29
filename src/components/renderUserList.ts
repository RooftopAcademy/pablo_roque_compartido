import { getUsers, users } from "../services/userApi";
import { usuarioView } from "../views/usuarioItem";

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