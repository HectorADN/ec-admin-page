import { ecApi } from '@/api/ecApi';
import type { AuthResponse } from '../interfaces/AuthResponse';


export const checkAuthAction = async (): Promise<AuthResponse> => {

    const token = localStorage.getItem('eccomToken');
    if( !token ) throw new Error('No token found');

    try {
        const { data } = await ecApi.post<AuthResponse>('/checktoken',

 {
                token,
            }
        );

        localStorage.setItem('eccomToken', data.data.user.access_token);

        return data;

    } catch (error) {
        console.log(error);
        localStorage.removeItem('eccomToken');
        throw new Error('Token expired or not valid');
    }

}