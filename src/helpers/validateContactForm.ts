export function validateContactForm(){

    const nombre = document.getElementById("nombre") as HTMLInputElement;
    const apellido = document.getElementById("apellido") as HTMLInputElement;
    const consulta = document.getElementById("consulta") as HTMLTextAreaElement;

    const formulario = document.getElementById("formulario") as HTMLFormElement;

    formulario.addEventListener("submit",function(e: Event): void{
        e.preventDefault();
        if(nombre.value === ''){
            alert("El nombre es requerido")
        }
    
        if(apellido.value === ''){
            alert("El apellido es requerido")
        }
    
        if(consulta.value === ''){
            alert("La consulta es requerida")
        }
    
    });
}
