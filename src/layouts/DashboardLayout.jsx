import {
    Layout,
    Avatar,
    Dropdown,
    Typography,
    Drawer,
    Button,
    theme,
} from "antd";

import {
    UserOutlined,
    LogoutOutlined,
    DashboardOutlined,
    InboxOutlined,
    TeamOutlined,
    BgColorsOutlined,
    MenuOutlined,
} from "@ant-design/icons";

import {
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useState } from "react";
import AppSidebar from "../components/common/AppSidebar";

const { Header, Content } = Layout;
const { Text } = Typography;

export default function DashboardLayout() {
    const { token } = theme.useToken();

    const navigate = useNavigate();
    const location = useLocation();

    const [mobileOpen, setMobileOpen] =
        useState(false);

    const sidebarItems = [
        {
            key: "/dashboard",
            label: "Dashboard",
            icon: <DashboardOutlined />,
        },
        {
            key: "/inventory",
            label: "Inventory",
            icon: <InboxOutlined />,
        },
        {
            key: "/users",
            label: "Users",
            icon: <TeamOutlined />,
        },
        {
            key: "/themes",
            label: "Themes",
            icon: <BgColorsOutlined />,
        },
    ];

    const sidebar = (
        <AppSidebar
            items={sidebarItems}
            activeKey={location.pathname}
            onChange={(path) => {
                navigate(path);
                setMobileOpen(false);
            }}
        />
    );

    return (
        <div className="h-screen flex overflow-hidden bg-slate-50">

            {/* Desktop Sidebar */}

            <div className="hidden lg:block">
                {sidebar}
            </div>

            {/* Mobile Sidebar */}

            <Drawer
                open={mobileOpen}
                onClose={() =>
                    setMobileOpen(false)
                }
                placement="left"
                width={90}
                styles={{
                    body: {
                        padding: 0,
                    },
                }}
            >
                {sidebar}
            </Drawer>

            {/* Main */}

            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header */}

                <Header
                    className="
                        !h-[72px]
                        !leading-none
                        !px-4
                        lg:!px-6
                        flex
                        items-center
                        justify-between
                        border-b
                        shrink-0
                    "
                    style={{
                        background:
                            token.colorBgContainer,
                        borderColor:
                            token.colorBorderSecondary,
                    }}
                >
                    <div className="flex items-center gap-4">

                        <div className="block lg:hidden">
                            <Button
                                icon={<MenuOutlined />}
                                onClick={() => setMobileOpen(true)}
                            />
                        </div>

                        <div>
                            <h1 className="m-0 text-xl font-semibold">
                                Dashboard
                            </h1>

                            <Text
                                type="secondary"
                                className="text-xs"
                            >
                                Welcome back
                            </Text>
                        </div>
                    </div>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: [
                                {
                                    key: "profile",
                                    label:
                                        "Profile",
                                },
                                {
                                    type: "divider",
                                },
                                {
                                    key: "logout",
                                    icon: (
                                        <LogoutOutlined />
                                    ),
                                    label:
                                        "Logout",
                                },
                            ],
                        }}
                    >
                        <Avatar
                            className="cursor-pointer"
                            icon={
                                <UserOutlined />
                            }
                        />
                    </Dropdown>
                </Header>

                {/* Content */}

                <Content
                    className="
                        flex-1
                        overflow-auto
                        p-4
                        lg:p-6
                    "
                    style={{
                        background:
                            token.colorBgLayout,
                    }}
                >
                    <div
                        className="
                            rounded-2xl
                            min-h-full
                            p-4
                            lg:p-6
                        "
                        style={{
                            background:
                                token.colorBgContainer,
                            border: `1px solid ${token.colorBorderSecondary}`,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </div>
        </div>
    );
}