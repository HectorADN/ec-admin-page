
import { ecApi } from "@/api/ecApi"
import type { EmpresaPagosResponse } from "@/interfaces/EmpresaPagosResponse";

export const getEmpresaPagosAction = async(): Promise<EmpresaPagosResponse> => {

    const { data } = await ecApi.get<EmpresaPagosResponse>(`/admin/empresapagos`);

    return {
        ...data
    };
}