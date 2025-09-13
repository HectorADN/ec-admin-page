
import { ecApi } from "@/api/ecApi";
import type { ProductsResponse } from "@/interfaces/ProductsResponse";


export const getProductByIdAction = async (id: string ): Promise<ProductsResponse> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
            "message": "nuevo producto",
            "status": 200,
            "error": false,
            "data": 
                {
                    "id": -10,
                    "nombre": "",
                    "unidad": "",
                    "tipo": "",
                    "stock_minimo": 0,
                    "disponible": false,
                    "temporada": "",
                    "default_imagen": "",
                }
        } as unknown as ProductsResponse;
    }

    const { data } = await ecApi.get<ProductsResponse>(`/admin/productos/${id}`);
    // const default_imagen = import.meta.env.VITE_IMAGES_URL+data.data[0].default_imagen;
    return data ;
}


// "id": 101,
// "nombre": "Aceituna S. Extra Negra",
// "unidad": "kg",
// "tipo": "Aceitunas",
// "stock_minimo": "120.000",
// "disponible": 1,
// "temporada": "Todo el año",
// "default_imagen": "101-1756429999.jpg"