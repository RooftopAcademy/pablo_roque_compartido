import btnRedesSocialesComponent  from "../components/btnRedesSocialesComponent";
import headerComponent  from "../components/headerComponent";
import footerComponent  from "../components/footerComponent";

export function homePage(){

    return `
    ${headerComponent()}
    ${btnRedesSocialesComponent()}
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
    ${footerComponent()}
    `;
};
