
import { ecApi } from "@/api/ecApi"
import type { ItemsVentaResponse } from "@/interfaces/ItemsVentaResponse";

export const getItemsAction = async(): Promise<ItemsVentaResponse> => {

    const { data } = await ecApi.get<ItemsVentaResponse>('/itemventas');

    return {
        ...data
    };
}