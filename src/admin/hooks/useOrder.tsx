
import { useQuery } from "@tanstack/react-query";
import { getOrderByIdAction } from "../actions/get-order-by-id";

export const useOrder = (id: string) => {

    const query = useQuery({
        queryKey: ['order', { id }],
        queryFn: () => getOrderByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });

    //TODO: Mutacion

    return { ...query };

}
