
import { ecApi } from "@/api/ecApi"
import type { SuppliersResponse } from "@/interfaces/SuppliersResponse";


export const getSuppliersAction = async(): Promise<SuppliersResponse> => {

    const { data } = await ecApi.get<SuppliersResponse>('/admin/proveedores');

    return {
        ...data
    };
}
