
import type { Product } from "./Product.interface";

export interface ProductsResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    Product[];
}

