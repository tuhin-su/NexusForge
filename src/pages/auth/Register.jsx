import {
    Card,
    Form,
    Input,
    Button,
    Typography,
} from "antd";

export default function Register() {
    const submit = (values) => {
        console.log(values);
    };

    return (
        <Card>
            <Typography.Title level={3}>
                Register
            </Typography.Title>

            <Form
                layout="vertical"
                onFinish={submit}
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true }]}
                >
                    <Input.Password />
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    block
                >
                    Register
                </Button>
            </Form>
        </Card>
    );
}