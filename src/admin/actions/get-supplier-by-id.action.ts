
import { ecApi } from "@/api/ecApi";
import type { Supplier } from "@/interfaces/Supplier.interface";

export const getSupplierByIdAction = async (id: string ): Promise<Supplier> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
            // 'id': '',
            'nombre': '',
            'giro': '',
            'rut': '',
            'contacto': '',
            'direccion': '',
            'ciudad': '',
            'fono': '',
            'logo': '',
        } as unknown as Supplier;
    }

    const { data } = await ecApi.get<Supplier>(`/admin/proveedor/${id}`);
    return data ;
}

// proveedor database = [
//     'id'
//     'nombre',
//     'giro',
//     'rut',
//     'contacto',
//     'direccion',
//     'ciudad',
//     'fono',
//     'logo',
// ];