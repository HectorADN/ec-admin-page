import type { User } from "./User.interface";

export interface AuthResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    Datos;
}

export interface Datos {
    message: string;
    user:    User;
}


