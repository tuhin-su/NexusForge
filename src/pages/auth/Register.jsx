import {
    Button,
    Form,
    Input,
    Typography,
    Checkbox,
} from "antd";

import {
    UserOutlined,
    MailOutlined,
    LockOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export default function Register() {
    const submit = (values) => {
        console.log(values);
    };

    return (
        <>
            <Title level={2}>
                Create Account
            </Title>

            <Text type="secondary">
                Create your warehouse management account
            </Text>

            <Form
                layout="vertical"
                className="mt-8"
                onFinish={submit}
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your name",
                        },
                    ]}
                >
                    <Input
                        size="large"
                        prefix={<UserOutlined />}
                        placeholder="John Doe"
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please enter email",
                        },
                        {
                            type: "email",
                        },
                    ]}
                >
                    <Input
                        size="large"
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
                            message: "Please enter password",
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined />}
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: "Please confirm password",
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined />}
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item
                    name="terms"
                    valuePropName="checked"
                >
                    <Checkbox>
                        I agree to the Terms & Conditions
                    </Checkbox>
                </Form.Item>

                <Button
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                >
                    Create Account
                </Button>

                <div className="mt-6 text-center">
                    <Text type="secondary">
                        Already have an account?
                    </Text>

                    <Link
                        to="/login"
                        className="ml-2"
                    >
                        Sign In
                    </Link>
                </div>
            </Form>
        </>
    );
}