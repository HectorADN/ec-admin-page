
import { ecApi } from "@/api/ecApi";
import type { Product } from "@/interfaces/Product.interface";

export const getProductByIdAction = async (id: string ): Promise<Product> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
            // "id": '',
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
    return data ;
}

