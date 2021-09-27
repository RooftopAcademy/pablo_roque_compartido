import { User } from "./user"

export let users: User[] = []

interface responseUser{
    id: number,
    name: string,
    username: string,
    email: string
}

const url: string = "https://jsonplaceholder.typicode.com/users";
async function getUsers(url: string){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
                    .then(response => response.json())
                    .then(data => pushUsers(data))
                    .catch(err => console.log(err))
}


const pushUsers = (respuesta: responseUser[]) =>{
    for (let index = 0; index < respuesta.length; index++) {
        users.push(respuesta[index]);
    }
//   let body = document.getElementById('list-usuarios')
//   for (let index = 0; index < data.length; index++) {
//     body.innerHTML += usuarioView(data[index])  
//   }
}

getUsers(url);