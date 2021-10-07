import {renderProductList} from '../components/renderProductList'
import { products1 } from '../models/producto'
import headerComponent  from "../components/headerComponent";
import footerComponent  from "../components/footerComponent";

export default function listProductsPage(){
    const contenido = renderProductList(products1)
    return `
        ${headerComponent()}
        <section class="listado">
            ${contenido.innerHTML}
        </section>
        ${footerComponent()}
    `
}