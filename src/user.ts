 export interface UsuarioInterface{
     id: number,
     name: string,
     username: string,
     email: string,
 }
 
 
 export class User implements UsuarioInterface{
    // id: number;
    // name: string;
    // username: string;
    // email: string;

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