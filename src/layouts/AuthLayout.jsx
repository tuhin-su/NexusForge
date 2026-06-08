import { Layout, Typography } from "antd";

const { Content } = Layout;

export default function AuthLayout({ children }) {
    return (
        <Layout
            style={{
                minHeight: "100vh",
                background: "#f5f7fa",
            }}
        >
            <Content
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 24,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: 450,
                    }}
                >
                    <Typography.Title
                        level={2}
                        style={{ textAlign: "center" }}
                    >
                        My Application
                    </Typography.Title>

                    {children}
                </div>
            </Content>
        </Layout>
    );
}