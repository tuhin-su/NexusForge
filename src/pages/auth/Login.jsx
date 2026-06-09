import {
    Button,
    Checkbox,
    Divider,
    Form,
    Input,
    Typography,
    theme,
} from "antd";

import {
    UserOutlined,
    MailOutlined,
    LockOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export default function Register() {
    const { token } = theme.useToken();

    const submit = (values) => {
        console.log(values);
    };

    return (
        <div className="w-full">

            {/* Header */}

            <div className="mb-8">
                <div
                    className="inline-flex items-center justify-center h-14 w-14 rounded-2xl mb-5"
                    style={{
                        background: token.colorPrimaryBg,
                        color: token.colorPrimary,
                    }}
                >
                    <UserOutlined style={{ fontSize: 24 }} />
                </div>

                <Title
                    level={2}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    Create Account
                </Title>

                <Text type="secondary">
                    Join the platform and start managing
                    inventory, warehouses and logistics.
                </Text>
            </div>

            {/* Form */}

            <Form
                layout="vertical"
                size="large"
                onFinish={submit}
                requiredMark={false}
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your full name",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="John Doe"
                    />
                </Form.Item>

                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your email",
                        },
                        {
                            type: "email",
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="john@company.com"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please enter a password",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Create password"
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        {
                            required: true,
                            message: "Confirm your password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    value ===
                                        getFieldValue("password")
                                ) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error(
                                        "Passwords do not match"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Confirm password"
                    />
                </Form.Item>

                <Form.Item
                    name="terms"
                    valuePropName="checked"
                >
                    <Checkbox>
                        I agree to the Terms of Service
                        and Privacy Policy
                    </Checkbox>
                </Form.Item>

                <Button
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                    style={{
                        height: 48,
                        fontWeight: 600,
                    }}
                >
                    Create Account
                </Button>
            </Form>

            <Divider>
                <Text type="secondary">
                    Secure Registration
                </Text>
            </Divider>

            {/* Features */}

            <div className="grid grid-cols-3 gap-3 mb-8">

                <div
                    className="rounded-xl p-3 text-center"
                    style={{
                        background: token.colorFillTertiary,
                    }}
                >
                    <div
                        style={{
                            fontWeight: 700,
                            color: token.colorPrimary,
                        }}
                    >
                        99.9%
                    </div>

                    <Text
                        type="secondary"
                        style={{ fontSize: 12 }}
                    >
                        Accuracy
                    </Text>
                </div>

                <div
                    className="rounded-xl p-3 text-center"
                    style={{
                        background: token.colorFillTertiary,
                    }}
                >
                    <div
                        style={{
                            fontWeight: 700,
                            color: token.colorPrimary,
                        }}
                    >
                        24/7
                    </div>

                    <Text
                        type="secondary"
                        style={{ fontSize: 12 }}
                    >
                        Monitoring
                    </Text>
                </div>

                <div
                    className="rounded-xl p-3 text-center"
                    style={{
                        background: token.colorFillTertiary,
                    }}
                >
                    <div
                        style={{
                            fontWeight: 700,
                            color: token.colorPrimary,
                        }}
                    >
                        Cloud
                    </div>

                    <Text
                        type="secondary"
                        style={{ fontSize: 12 }}
                    >
                        Managed
                    </Text>
                </div>

            </div>

            {/* Footer */}

            <div className="text-center">
                <Text type="secondary">
                    Already have an account?
                </Text>

                <Link
                    to="/login"
                    className="ml-2 font-medium"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}