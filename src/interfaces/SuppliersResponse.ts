
import type { Supplier } from "./Supplier.interface";

export interface SuppliersResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    Supplier[];
}

