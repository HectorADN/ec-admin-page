
import { ecApi } from "@/api/ecApi";
import type { Category } from "@/interfaces/Category.interface";

export const getCategoryByIdAction = async (id: string ): Promise<Category> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
                    "id": -10,
                    "nombre": "",
            } as unknown as Category;
    }

    const { data } = await ecApi.get<Category>(`/admin/categoria/${id}`);
    return data ;
}

// "id": 101,
// "nombre": "categoría",
