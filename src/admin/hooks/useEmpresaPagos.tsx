
import { useQuery } from "@tanstack/react-query";
import { getEmpresaPagosAction } from "../actions/get-empresa-pagos.action";

export const useEmpresaPagos = () => {
    // TODO: viene lógica
  
    return useQuery({
        queryKey: ['empresapagos'],
        queryFn: getEmpresaPagosAction,
    });

}

