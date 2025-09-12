
import { useAuthStore } from "@/auth/store/auth.store";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";


// En Caso de que el usuario esta authenticado se redirige
export const AuthenticatedRoute = ({ children }: PropsWithChildren) => {
    
    const { authStatus } = useAuthStore(); // de Zustand Estado
    if( authStatus === 'checking' ) return null;
    if( authStatus === 'not-authenticated') return <Navigate to="/" />;

    return children; // por defecto si esta 'authenticated'
}


// export const NotAuthenticatedRoute = ({ children }: PropsWithChildren) => {
    
//     const { authStatus } = useAuthStore(); // de Zustand Estado
//     if( authStatus === 'checking' ) return null;
//     if( authStatus === 'authenticated') return <Navigate to="/admin" />;

//     return children; // por defecto si esta 'authenticated'
// }



// Consulta si el usuario es ADMIN
export const AdminRoute = ({ children }: PropsWithChildren) => {
    
    const { authStatus, isAdmin } = useAuthStore(); // de Zustand Estado
    if( authStatus === 'checking' ) return null;
    if( authStatus === 'not-authenticated') return <Navigate to="/" />;
    if( !isAdmin() ) return <Navigate to="/" />

    return children; // por defecto si esta 'authenticated'
}
