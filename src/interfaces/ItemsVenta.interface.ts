
import type { Product } from "./Product.interface";

export interface ItemVenta {
    id:                  number;
    unidades:            string;
    cantidad:            string;
    valor_normal:        string;
    valor_negocio:       string;
    valor_mayorista:     string;
    valor_especial:      string;
    editable:            boolean;
    productos_id:        number;
    cantidad_por_unidad: string;
    is_divisible:        boolean;
    producto:            Product | null;
}

