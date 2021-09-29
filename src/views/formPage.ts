export function formPage(){
    return `
        <div class="titulo-contacto">
            <h3>Contacto</h3>
        </div>
        <form action="" class="form-contacto" id="formulario">
            <div>
                <label for="">Nombre</label>
                <input type="text" id="nombre">
            </div>
            
            <div>
                <label for="">Apellido</label>
                <input type="text" id="apellido">
            </div>
            
            <div>
                <label for="">Email</label>
                <input type="email" id="email" required>
            </div>

            <div>
                <label for="">Consulta</label>
                <textarea name="" cols="18" rows="10" id="consulta"></textarea>
            </div>

            <div>
                <input type="submit" value="Enviar">
            </div>
        
        </form> 
    `;
};
