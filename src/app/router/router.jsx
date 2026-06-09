import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";

import Dashboard from "../../pages/dashboard/Dashboard";

import AuthLayout from "../../layouts/AuthLayout";
import DashboardLayout from "../../layouts/DashboardLayout";
import ThemeGenerator from "../../components/theme/ThemeGenerator";

export const router =
    createBrowserRouter([
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ]
        },
        {
            path: "/themes",
            element: (
                <DashboardLayout>
                    <ThemeGenerator />
                </DashboardLayout>
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