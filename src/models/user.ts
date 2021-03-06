 import UsuarioInterface from '../interfaces/userInterface'
 export class User implements UsuarioInterface{

    constructor(){
        this.id = 0;
        this.name = '';
        this.username = '';
        this.email = '';
    }

    get id(): number{
        return this.id;
    }

    set id(id: number){
        this.id = id;
    }

    get name(): string{
        return this.name;
    }

    set name(nombre: string){
        this.name = nombre;
    }

    get username(): string{
        return this.username;
    }

    set username(apellido: string){
        this.username = apellido
    }

    get email(): string{
        return this.email;
    }
    
    set email(email: string){
        this.email = email;
    }
}