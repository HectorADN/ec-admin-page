
import { useQuery } from "@tanstack/react-query";
import { getSuppliersAction } from "../actions/get-suppliers.action";


export const useSuppliers = () => {
  
    return useQuery({
        queryKey: ['suppliers'],
        queryFn: getSuppliersAction,
    });
}
