
import { ecApi } from "@/api/ecApi"
import type { AuthResponse } from "../interfaces/AuthResponse";

export const loginAction = async( 
    email: string, 
    password: string 
): Promise<AuthResponse> => {

    try {        
    const { data } = await ecApi.post<AuthResponse>('/login', {
        email,
        password,
    });

    console.log(data);
    return data;

    } catch (error) {
        console.log(error);
        throw error;        
    }

}