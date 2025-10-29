import { useQuery } from "@tanstack/react-query";
import { getCategoryByIdAction } from "../actions/get-category-by-id.action";

export const useCategory = (id: string) => {

    const query = useQuery({
        queryKey: ['category', { id }],
        queryFn: () => getCategoryByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });

    //TODO: Mutacion

    return { ...query };
}