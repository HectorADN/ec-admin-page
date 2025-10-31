
import { useQuery } from "@tanstack/react-query";
import { getOrdersAction } from "../actions/get-orders.action";

export const useOrders = () => {
    // TODO: viene lógica
  
    return useQuery({
        queryKey: ['orders'],
        queryFn: getOrdersAction,
    });
}