import { Button, Checkbox, Form, Input, Typography } from "antd";
import { motion } from "motion/react";
import {
    LockOutlined,
    MailOutlined,
    ArrowRightOutlined,
    DatabaseOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function LoginPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
                bg-white
                rounded-[32px]
                p-10
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                border
                border-slate-100
            "
        >
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
                <div
                    className="
                        h-14
                        w-14
                    "
                >
                    <svg
                            width="52"
                            height="52"
                            viewBox="0 0 128 128"
                            fill="none"
                        >
                            <defs>
                                <linearGradient
                                    id="inventoryGradient"
                                    x1="0"
                                    y1="0"
                                    x2="128"
                                    y2="128"
                                >
                                    <stop offset="0%" stopColor="#1677ff" />
                                    <stop offset="100%" stopColor="#36cfc9" />
                                </linearGradient>
                            </defs>

                            <rect
                                x="12"
                                y="12"
                                width="104"
                                height="104"
                                rx="28"
                                fill="url(#inventoryGradient)"
                            />

                            <path
                                d="M64 34L88 46V74L64 86L40 74V46L64 34Z"
                                stroke="white"
                                strokeWidth="5"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M64 34V60"
                                stroke="white"
                                strokeWidth="5"
                            />

                            <path
                                d="M40 46L64 60L88 46"
                                stroke="white"
                                strokeWidth="5"
                            />

                            <path
                                d="M64 60V86"
                                stroke="white"
                                strokeWidth="5"
                            />
                        </svg>
                </div>

                <div>
                    <h2 className="text-xl font-bold m-0">
                        Nexus Inventory
                    </h2>

                    <Text type="secondary">
                        Warehouse Management System
                    </Text>
                </div>
            </div>

            {/* Heading */}

            <Title
                level={2}
                style={{
                    marginBottom: 8,
                }}
            >
                Welcome Back 👋
            </Title>

            <Text type="secondary">
                Sign in to access inventory, orders,
                logistics and warehouse operations.
            </Text>

            {/* Form */}

            <Form
                layout="vertical"
                className="mt-8"
                size="large"
            >
                <Form.Item
                    label="Email Address"
                    name="email"
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="name@company.com"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Enter password"
                    />
                </Form.Item>

                <div className="flex items-center justify-between mb-6">
                    <Checkbox>
                        Remember me
                    </Checkbox>

                    <a
                        href="#"
                        className="font-medium"
                    >
                        Forgot Password?
                    </a>
                </div>

                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    block
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    style={{
                        height: 52,
                        borderRadius: 14,
                    }}
                >
                    Sign In
                </Button>
            </Form>

            {/* Footer */}

            <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="font-bold text-lg">
                            99.9%
                        </div>
                        <div className="text-xs text-slate-500">
                            Accuracy
                        </div>
                    </div>

                    <div>
                        <div className="font-bold text-lg">
                            24/7
                        </div>
                        <div className="text-xs text-slate-500">
                            Monitoring
                        </div>
                    </div>

                    <div>
                        <div className="font-bold text-lg">
                            500K+
                        </div>
                        <div className="text-xs text-slate-500">
                            Transactions
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}