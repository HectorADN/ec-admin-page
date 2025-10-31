
import type { Supplier } from "./Supplier.interface";

export interface Order {
    id:              string;
    fecha:           Date;
    fecha_recepcion: Date | null;
    fecha_termino:   Date | null;
    estado:          EstadoPedido;
    total:           number;
    proveedores_id:  number;
    // costos:          any[];
    // pagos:           any[];
    proveedor:       Supplier;
}

export type EstadoPedido = 'Pendiente'|'Abonado'|'Pagado';