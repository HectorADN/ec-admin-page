
import { useQuery } from "@tanstack/react-query";
import { getSupplierByIdAction } from "../actions/get-supplier-by-id.action";

export const useSupplier = (id: string) => {

    const query = useQuery({
        queryKey: ['supplier', { id }],
        queryFn: () => getSupplierByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });

    //TODO: Mutacion

    return { ...query };
}