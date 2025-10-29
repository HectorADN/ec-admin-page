
import { useQuery } from "@tanstack/react-query";
import { getCategoriesAction } from "../actions/get-categories.action";


export const useCategories = () => {
    // TODO: viene lógica
  
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategoriesAction,
    });
}