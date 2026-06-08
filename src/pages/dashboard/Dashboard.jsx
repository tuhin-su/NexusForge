import {
    Row,
    Col,
    Card,
    Statistic,
} from "antd";

export default function Dashboard() {
    return (
        <>
                <Row gutter={16}>
                <Col xs={24} md={8}>
                    <Card>
                        <Statistic
                            title="Users"
                            value={1250}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={8}>
                    <Card>
                        <Statistic
                            title="Orders"
                            value={523}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={8}>
                    <Card>
                        <Statistic
                            title="Revenue"
                            prefix="$"
                            value={12950}
                        />
                    </Card>
                </Col>
            </Row>

            <Card
                title="Overview"
                style={{ marginTop: 20 }}
            >
                Dashboard Content Here
            </Card>
        </>
    );
}