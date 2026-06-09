import { Badge, Tooltip, theme } from "antd";

export default function AppSidebar({
    items = [],
    activeKey,
    onChange,
}) {
    const { token } = theme.useToken();

    return (
        <aside
            style={{
                width: 80,
                background: token.colorBgContainer,
                borderRight: `1px solid ${token.colorBorderSecondary}`,
            }}
            className="h-screen flex flex-col"
        >
            <div className="h-20 flex items-center justify-center">
                <div
                    style={{
                        background: token.colorPrimary,
                    }}
                    className="h-12 w-12 rounded-2xl text-white flex items-center justify-center font-bold"
                >
                    N
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 px-3">
                {items.map((item) => {
                    const active =
                        activeKey === item.key;

                    return (
                        <Tooltip
                            key={item.key}
                            title={item.label}
                            placement="right"
                        >
                            <button
                                onClick={() =>
                                    onChange(item.key)
                                }
                                className="relative h-12 w-12 rounded-xl mx-auto flex items-center justify-center"
                                style={{
                                    background: active
                                        ? token.colorPrimaryBg
                                        : "transparent",
                                    color: active
                                        ? token.colorPrimary
                                        : token.colorTextSecondary,
                                }}
                            >
                                {active && (
                                    <div
                                        className="absolute -left-3 h-8 w-1 rounded-full"
                                        style={{
                                            background:
                                                token.colorPrimary,
                                        }}
                                    />
                                )}

                                {item.badge ? (
                                    <Badge dot>
                                        {item.icon}
                                    </Badge>
                                ) : (
                                    item.icon
                                )}
                            </button>
                        </Tooltip>
                    );
                })}
            </div>
        </aside>
    );
}