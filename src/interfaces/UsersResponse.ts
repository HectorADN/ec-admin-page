import type { User } from "@/auth/interfaces/User.interface";

export interface UsersResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    User[];
}

