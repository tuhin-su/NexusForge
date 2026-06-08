import {
    Card,
    Form,
    Input,
    Button,
    Checkbox,
    Typography,
} from "antd";

export default function Login() {
    const submit = (values) => {
        console.log(values);
    };

    return (
        <Card>
            <Typography.Title level={3}>
                Login
            </Typography.Title>

            <Form
                layout="vertical"
                onFinish={submit}
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Checkbox>
                        Remember Me
                    </Checkbox>
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    block
                >
                    Login
                </Button>
            </Form>
        </Card>
    );
}