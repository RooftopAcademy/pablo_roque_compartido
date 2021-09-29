export function homePage(){
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

    <div class="menu-content">
        <span class="menu-item" id="menu">
            <img src="img/plus.svg" alt="">
        </span>
        <a href="#" class="menu-item">
            <img src="img/facebook.svg" alt="">
        </a>
        <a href="#" class="menu-item">
            <img src="img/instagram.svg" alt="">
        </a>
    </div>

    <section class="inicio" id="contenedor">
        <div>
            <h1>Bienvenidos a la pagina de inicio</h1>
            <p>
                Esta es una pagina de para realizar un ejemplo visto en clase,
                de como utilizar HTML y CSS para desarrollar una pagina web,
                como asi decorarla.

            </p>
        </div>
    </section>

    <footer>Bienvenidos al ejemplo de Pablo Roque &copy;</footer>
    `;
};
