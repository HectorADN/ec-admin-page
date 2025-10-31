
import { ecApi } from "@/api/ecApi";
import type { Order } from "@/interfaces/Order.interface";

export const getOrderByIdAction = async (id: string ): Promise<Order> => {

    if ( !id ) throw new Error('Id es requerido');

    if ( id === 'new' ) {
        return {
                    // 'id': -10,
                    'fecha': new Date().getDate(),            // Fecha de solicitud
                    'fecha_recepcion': '',  // Fecha de recepcion del pedido
                    'fecha_termino': '',    // Fecha en que se acaban las existencias del pedido
                    'estado': 'Pendiente',  // Pendiente-Pagado-Abonado
                    'total': '',            // Costo total del pedido
                    'proveedores_id': '',
            } as unknown as Order;
    }

    const { data } = await ecApi.get<Order>(`/admin/pedido/${id}`);
    return data ;
}

// Api Pedido = [
//  'id',
//  'fecha',
//  'fecha_recepcion',
//  'fecha_termino',
//  'estado',
//  'total',
//  'proveedores_id',
// ];
