import { User } from "../models/user"
import UsuarioInterface from "../interfaces/userInterface"

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

}

