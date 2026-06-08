import {
    Layout,
    Menu,
    Avatar,
    Dropdown,
} from "antd";

import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } =
    Layout;

export default function DashboardLayout({
    children,
}) {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible>
                <div
                    style={{
                        color: "#fff",
                        textAlign: "center",
                        padding: 20,
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                >
                    Admin
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key: "dashboard",
                            icon: (
                                <DashboardOutlined />
                            ),
                            label: "Dashboard",
                        },
                        {
                            key: "users",
                            icon: (
                                <UserOutlined />
                            ),
                            label: "Users",
                        },
                        {
                            key: "settings",
                            icon: (
                                <SettingOutlined />
                            ),
                            label: "Settings",
                        },
                    ]}
                />
            </Sider>

            <Layout>
                <Header
                    style={{
                        display: "flex",
                        justifyContent:
                            "flex-end",
                        alignItems: "center",
                        background: "#fff",
                    }}
                >
                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "profile",
                                    label:
                                        "Profile",
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
                            icon={<UserOutlined />}
                        />
                    </Dropdown>
                </Header>

                <Content
                    style={{
                        padding: 24,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}