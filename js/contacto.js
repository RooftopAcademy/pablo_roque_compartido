const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const consulta = document.getElementById("consulta");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function(e){
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
