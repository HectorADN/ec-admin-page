import { useQuery } from "@tanstack/react-query";
import { getUsersAction } from "../actions/get-users.action";


export const useUsers = () => {
    // TODO: viene lógica
  
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsersAction,
    });
}