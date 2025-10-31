
import { ecApi } from "@/api/ecApi"
import type { ProductsResponse } from "@/interfaces/ProductsResponse";

export const getProductsAction = async(): Promise<ProductsResponse> => {

    const { data } = await ecApi.get<ProductsResponse>('/home-web/productos');

    // agregar url completa a cada producto
    const productsWithImageUrls = data.data.map( product => ({
        ...product,
        default_imagen: `${import.meta.env.VITE_IMAGES_URL}${product.default_imagen}`
    }));

    // console.log('getProductsAction',productsWithImageUrls);
    return {
        ...data,
        data: productsWithImageUrls,
    };
}