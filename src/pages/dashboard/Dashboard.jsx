import { Card, Col, Row, Statistic } from "antd";

export default function Dashboard() {
    return (
        <Row gutter={[16, 16]}>
            <Col span={6}>
                <Card>
                    <Statistic
                        title="Products"
                        value={1250}
                    />
                </Card>
            </Col>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Orders"
                        value={458}
                    />
                </Card>
            </Col>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Users"
                        value={85}
                    />
                </Card>
            </Col>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Warehouses"
                        value={12}
                    />
                </Card>
            </Col>
        </Row>
    );
}