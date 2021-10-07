import headerComponent  from "../components/headerComponent";
import footerComponent  from "../components/footerComponent";
import { products1 } from '../models/producto'
import detalleItemView from './detalleView'

export function productDetailPage(id: number){
    let id_storage = localStorage.getItem('id')
    const contenido = detalleItemView(products1[parseInt(id_storage!)-1])  

    
    return `
        ${headerComponent()}
        <section class="detalle">
            ${contenido}
        </section>
        ${footerComponent()}
    `;
    
};
