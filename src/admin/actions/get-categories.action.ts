
import { ecApi } from "@/api/ecApi"
import type { CategoriesResponse } from "@/interfaces/CategoriesResponse";

export const getCategoriesAction = async(): Promise<CategoriesResponse> => {

    const { data } = await ecApi.get<CategoriesResponse>('/admin/categorias');

    return {
        ...data
    };
}
