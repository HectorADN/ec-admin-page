
import { ecApi } from "@/api/ecApi";
import type { Product } from "@/interfaces/Product.interface";
// import type { ProductsResponse } from "@/interfaces/ProductsResponse";


export const getProductByIdAction = async (id: string ): Promise<Product> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
            "id": '',
            "nombre": "",
            "nombre_corto": "",
            "unidad": "",
            "tipo": "",
            "stock_minimo": 0,
            "disponible": false,
            "temporada": "",
            "default_imagen": "",
        } as unknown as Product;
    }

    const { data } = await ecApi.get<Product>(`/admin/producto/${id}`);
    // const default_imagen = import.meta.env.VITE_IMAGES_URL+data.data[0].default_imagen;
    return data ;
}

// "id": 101,
// "nombre": "Aceituna S. Extra Negra",
// "nombre_corto": "Super Extra Negra",
// "unidad": "kg",
// "tipo": "Aceitunas",
// "stock_minimo": "120.000",
// "disponible": 1,
// "temporada": "Todo el año",
// "default_imagen": "101-1756429999.jpg"