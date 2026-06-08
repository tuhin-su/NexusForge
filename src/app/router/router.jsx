import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";

import Dashboard from "../../pages/dashboard/Dashboard";

import AuthLayout from "../../layouts/AuthLayout";
import DashboardLayout from "../../layouts/DashboardLayout";

export const router =
    createBrowserRouter([
        {
            path: "/login",
            element: (
                <AuthLayout>
                    <Login />
                </AuthLayout>
            ),
        },

        {
            path: "/register",
            element: (
                <AuthLayout>
                    <Register />
                </AuthLayout>
            ),
        },

        {
            path: "/",
            element: (
                <DashboardLayout>
                    <Dashboard />
                </DashboardLayout>
            ),
        },
    ]);