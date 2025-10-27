import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { AuthLayout } from "./auth/layouts/AuthLayout";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";

import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { AdminRoute } from "./components/routes/ProtectedRoutes";
import { AdminUsersPage } from "./admin/pages/users/AdminUsersPage";
import { AdminSuppliersPage } from "./admin/pages/supplies/AdminSuppliersPage";
import { AdminEmpresaPagosPage } from "./admin/pages/empresapagos/AdminEmpresaPagosPage";
// import AdminLayout from "./admin/layouts/AdminLayout";


// Para no cargar las rutas administrativas si es que no
// se han logueado los usuarios
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
    // Auth Routes
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ],
    },

    // Admin Routes
    {
        path: '/admin',
        element: (
            <AdminRoute>
                <AdminLayout />
            </AdminRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            },
            {
                path: 'users',
                element: <AdminUsersPage />
            },
            {
                path: 'suppliers',
                element: <AdminSuppliersPage />
            },
            {
                path: 'mediospagos',
                element: <AdminEmpresaPagosPage />
            },
        ],
    },

    // Cualquier otra ruta redigir a LoginPage o Dashboard
    {
        path: '*',
        element: <Navigate to='/' />
    }

]);