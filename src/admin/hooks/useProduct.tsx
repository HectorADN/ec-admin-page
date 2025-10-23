import { useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";

export const useProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });

    //TODO: Mutacion

    return { ...query };
}
