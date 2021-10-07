export default function headerComponent(){
    return `
    <header>
        <input type="checkbox" id="btn-menu">
        <label for="btn-menu" class="label-check"><span class="material-icons material-icons-outlined">reorder</span></label>
        <a href="#"class="logo"><span class="material-icons material-icons-outlined">
            shopping_cart
            </span></a>
        <nav class="menu">
            <ul>
                <li>
                    <a class="rutas" href="#/">Inicio</a>
                </li>

                <li>
                    <a class="rutas" href="#/listaproductos">Lista de Productos</a>
                </li>
                <li>
                    <a class="rutas" href="#/users">Usuarios</a>
                </li>

                <li>
                    <a class="rutas" href="#/contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
    `;
}