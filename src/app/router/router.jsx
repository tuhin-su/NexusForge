import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import DashboardLayout from "../../layouts/DashboardLayout";

import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";

import Dashboard from "../../pages/dashboard/Dashboard";
// import Inventory from "../../pages/inventory/Inventory";
// import Users from "../../pages/users/Users";

import ThemeGenerator from "../../components/theme/ThemeGenerator";

export const router = createBrowserRouter([
    // Auth Routes
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },

    // Dashboard Routes
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "inventory",
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <Dashboard />,
            },
            {
                path: "themes",
                element: <ThemeGenerator />,
            },
        ],
    },
]);