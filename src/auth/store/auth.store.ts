import { create } from 'zustand';
import type { User } from '../interfaces/User.interface';

import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.action';

type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

type AuthState = {
    // Propiedades - Properties
    user: User | null,
    token: string | null,
    authStatus: AuthStatus;

    // Getters o propiedades computadas etc.


    // Actions y/o funciones
    login: (email:string, password:string) => Promise<boolean>;
    logout: () => void;
    checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set) => ({
    // Implementacion de properties del AuthStore
    user: null,
    token: null,
    authStatus: 'checking',

    // implementando las actions del AuthStore
    login: async(email: string, password: string) => {
        console.log({email, password});

        try {
            const data = await loginAction(email, password);
            localStorage.setItem('eccomToken', data.data.user.access_token);

            set({user: data.data.user, token: data.data.user.access_token, authStatus: 'authenticated'});
            return true;

        } catch (error) {
            console.log(error);
            localStorage.removeItem('eccomToken');
            set({user: null, token: null, authStatus: 'not-authenticated'});
            return false;
        }
    },


    logout: () => {
      localStorage.removeItem('eccomToken');
      set({user: null, token: null, authStatus: 'not-authenticated'});
    },


    checkAuthStatus: async () => {

      try {
        const { data } = await checkAuthAction();
        set({
            user: data.user,
            token: data.user.access_token,
            authStatus: 'authenticated',
        });
        return true;

      } catch (error) {
        console.log(error);
        set({
            user: undefined,
            token: undefined,
            authStatus: 'not-authenticated',
        });
        return false;        
      }

    }

}));

