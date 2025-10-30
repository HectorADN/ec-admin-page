import { useQuery } from "@tanstack/react-query";
import { getEmpresaPagoByIdAction } from "../actions/get-empresa-pago-by-id.action";

export const useEmpresaPago = (id: string) => {

    const query = useQuery({
        queryKey: ['empresapago', { id }],
        queryFn: () => getEmpresaPagoByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 Minutos
        // enabled: !!id, // No se hace la peticion hasta que el id exista
    });

    //TODO: Mutacion

    return { ...query };
}