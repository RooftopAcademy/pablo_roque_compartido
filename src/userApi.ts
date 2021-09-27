import { User } from "./user"
import { UsuarioInterface } from "./user"


export let users: User[] = []



export async function getUsers(url: string){
    const respuesta = await fetch(url)
                    .then(response => response.json())
                    .then(data => pushUsers(data))
                    .catch(err => console.log(err))
}


const pushUsers = (respuesta: UsuarioInterface[]) =>{
    for (let index = 0; index < respuesta.length; index++) {
        users.push(respuesta[index]);
    }
//   let body = document.getElementById('list-usuarios')
//   for (let index = 0; index < data.length; index++) {
//     body.innerHTML += usuarioView(data[index])  
//   }
}

