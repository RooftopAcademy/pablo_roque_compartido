import {User} from '../models/user';

export function usuarioView(usuario: User){
    return `
        <div class="usuario">
            <p>
                Id: ${usuario.id}
                <br>
                Nombre: ${usuario.name}
                <br>
                Apellido: ${usuario.username}
                <br>
                Email:${usuario.email}
            </p>
        </div>
    `;
};