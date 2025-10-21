
import { ecApi } from "@/api/ecApi"
import type { ItemsVentaResponse } from "@/interfaces/ItemsVentaResponse";

export const getItemsByProductAction = async(id: string): Promise<ItemsVentaResponse> => {

    if ( !id ) throw new Error('Id es requerido');
    const { data } = await ecApi.get<ItemsVentaResponse>(`/admin/itemsbyproducto/${id}`);

    return {
        ...data
    };
}