
import { ecApi } from "@/api/ecApi"
import type { OrdersResponse } from "@/interfaces/OrdersResponse.interface";

export const getOrdersAction = async(): Promise<OrdersResponse> => {

    const { data } = await ecApi.get<OrdersResponse>('/admin/pedidos');

    return {
        ...data
    };
}

