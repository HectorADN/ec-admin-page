
import type { ItemVenta } from "./ItemsVenta.interface";

export interface ItemsVentaResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    ItemVenta[];
}
