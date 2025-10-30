
import { ecApi } from "@/api/ecApi";
import type { EmpresaPagos } from "@/interfaces/EmpresaPagos.interface";

export const getEmpresaPagoByIdAction = async (id: string ): Promise<EmpresaPagos> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
            // "id": '',
            'empresa': '',
            'comision': 0,
            'disponible': false,
            'predeterminado': false,
        } as unknown as EmpresaPagos;
    }

    const { data } = await ecApi.get<EmpresaPagos>(`/admin/empresapago/${id}`);
    return data ;
}

// EmpresaPago = [
//     'empresa',
//     'comision',
//     'disponible',
//     'predeterminado',
// ];