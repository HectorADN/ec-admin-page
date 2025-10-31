import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/Product.interface";
import { createUpdateProductAction } from "../actions/create-update-product.action";

export const useProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });


    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            console.log('Todo salió ok', product);

            //TODO: 
            // invalidar caché
            // Actualizar queryData
        }
    });
    



    // const handleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log({productLike});
    // }

    return { 
        ...query,
        mutation,
    };
}
