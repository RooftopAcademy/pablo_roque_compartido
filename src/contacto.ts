const nombre = document.getElementById("nombre") as HTMLInputElement;
const apellido = document.getElementById("apellido") as HTMLInputElement;
const consulta = document.getElementById("consulta") as HTMLTextAreaElement;
const formulario: HTMLElement = document.getElementById("formulario")!;

formulario.addEventListener("submit",function(e: Event){
    e.preventDefault();
    if(nombre.value === '' || nombre.value == null){
        alert("El nombre es requerido")
    }

    if(apellido.value === '' || apellido.value == null){
        alert("El apellido es requerido")
    }

    if(consulta.value === '' || consulta.value == null){
        alert("La consulta es requerida")
    }

});