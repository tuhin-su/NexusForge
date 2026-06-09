import {
    Button,
    Card,
    Checkbox,
    Divider,
    Form,
    Input,
    Space,
    Typography,
    theme,
} from "antd";

import {
    GithubOutlined,
    GoogleOutlined,
    LockOutlined,
    MailOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Login() {
    const { token } = theme.useToken();

    return (
        <div
            className="min-h-screen flex items-center justify-center p-6"
            style={{
                background: token.colorBgLayout,
            }}
        >
            <div className="w-full max-w-md">

                {/* Brand */}

                <div className="text-center mb-8">

                    <div
                        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white text-xl font-bold"
                        style={{
                            background:
                                token.colorPrimary,
                        }}
                    >
                        NF
                    </div>

                    <Title level={2}>
                        NexusForge
                    </Title>

                    <Text type="secondary">
                        Welcome back to your workspace
                    </Text>

                </div>

                <Card
                    bordered={false}
                    className="shadow-xl"
                    styles={{
                        body: {
                            padding: 32,
                        },
                    }}
                >

                    <div className="mb-6">

                        <Title level={3}>
                            Sign In
                        </Title>

                        <Text type="secondary">
                            Enter your credentials
                            below
                        </Text>

                    </div>

                    <Form
                        layout="vertical"
                        size="large"
                    >

                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input
                                prefix={
                                    <MailOutlined />
                                }
                                placeholder="john@example.com"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                        >
                            <Input.Password
                                prefix={
                                    <LockOutlined />
                                }
                                placeholder="Password"
                            />
                        </Form.Item>

                        <div className="flex justify-between mb-6">

                            <Checkbox>
                                Remember me
                            </Checkbox>

                            <Button
                                type="link"
                                className="p-0"
                            >
                                Forgot Password?
                            </Button>

                        </div>

                        <Button
                            type="primary"
                            size="large"
                            block
                        >
                            Sign In
                        </Button>

                        <Divider>
                            OR
                        </Divider>

                        <Space
                            direction="vertical"
                            className="w-full"
                        >

                            <Button
                                block
                                size="large"
                                icon={
                                    <GoogleOutlined />
                                }
                            >
                                Continue with Google
                            </Button>

                            <Button
                                block
                                size="large"
                                icon={
                                    <GithubOutlined />
                                }
                            >
                                Continue with GitHub
                            </Button>

                        </Space>

                        <div className="text-center mt-6">

                            <Text type="secondary">
                                Don't have an account?
                            </Text>

                            <Button
                                type="link"
                                className="p-0 ml-1"
                            >
                                Sign Up
                            </Button>

                        </div>

                    </Form>

                </Card>

            </div>
        </div>
    );
}