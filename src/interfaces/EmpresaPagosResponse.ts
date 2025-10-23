
import type { EmpresaPagos } from "./EmpresaPagos.interface";

export interface EmpresaPagosResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    EmpresaPagos[];
}

