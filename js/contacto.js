const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const consulta = document.getElementById("consulta");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function(e){
    
    if(nombre.value === '' || nombre.value == null){
        e.preventDefault();
        alert("El nombre es requerido")
    }

    if(apellido.value === '' || apellido.value == null){
        e.preventDefault();
        alert("El apellido es requerido")
    }

    if(consulta.value === '' || consulta.value == null){
        e.preventDefault();
        alert("La consulta es requerida")
    }

});
