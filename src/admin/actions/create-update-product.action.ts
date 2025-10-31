import { ecApi } from "@/api/ecApi";
import type { Product } from "@/interfaces/Product.interface";


export const createUpdateProductAction = async (
    productLike: Partial<Product>
): Promise<Product> => {

const { id, ...rest } = productLike;

const isNew = id === 'new';

rest.stock_minimo = Number(rest.stock_minimo || 0);

const { data } = await ecApi<Product>({
    url: isNew ? '/admin/productos' : `/admin/productos/${id}`,
    method: isNew ? 'POST' : 'PUT',
    data: rest,
});

return {
    ...data,
}


}

// export interface Product {
//     id:             string;
//     nombre:         string;
//     nombre_corto:   string;
//     tipo:           string;
//     unidad:         string;
//     stock_minimo:   number;
//     disponible:     boolean;
//     temporada:      string;
//     default_imagen: string;
//     categorias_id:  number;
// }