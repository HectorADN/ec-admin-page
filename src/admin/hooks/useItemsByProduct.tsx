import { useQuery } from "@tanstack/react-query";
import { getItemsByProductAction } from "../actions/get-items-by-product.action";

export const useItemsByProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['itemsByProduct', { id }],
        queryFn: () => getItemsByProductAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });

    return { ...query };
}