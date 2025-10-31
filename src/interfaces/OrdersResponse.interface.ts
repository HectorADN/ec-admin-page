
import type { Order } from "./Order.interface";

export interface OrdersResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    Order[];
}
