import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

export default function AuthLayout() {
    return (
        <div className="h-screen overflow-hidden flex bg-slate-100">

            {/* LEFT PANEL */}
            <div className="hidden lg:flex flex-1 relative bg-[#0B1220] overflow-hidden">

                {/* Background Grid */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
                        `,
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* Glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

                {/* Animated Route 1 */}
                <motion.div
                    animate={{
                        x: [-500, 1500],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[35%] h-[2px] w-[250px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />

                {/* Animated Route 2 */}
                <motion.div
                    animate={{
                        x: [1500, -500],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[60%] h-[2px] w-[300px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full w-full max-w-5xl mx-auto px-16">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-flex px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm">
                            Warehouse Intelligence Platform
                        </span>

                        <h1 className="mt-8 text-white text-5xl xl:text-6xl font-bold leading-[1.1]">
                            Manage
                            <br />
                            Inventory
                            <br />
                            In Real-Time
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-slate-400">
                            Control inventory, warehouses, vendors,
                            logistics and shipments from one intelligent
                            dashboard built for modern businesses.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-5 mt-14 max-w-3xl">
                        <MetricCard
                            title="Warehouse Utilization"
                            value="92%"
                        />

                        <MetricCard
                            title="Active Orders"
                            value="12,485"
                        />

                        <MetricCard
                            title="Inventory Accuracy"
                            value="99.8%"
                        />

                        <MetricCard
                            title="Shipments"
                            value="428"
                        />
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full lg:w-[520px] bg-white flex items-center justify-center px-10 py-8">

                <div className="w-full max-w-md">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

function MetricCard({ title, value }) {
    return (
        <motion.div
            whileHover={{
                y: -4,
                scale: 1.02,
            }}
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-sm
                p-6
            "
        >
            <div className="text-sm text-slate-400">
                {title}
            </div>

            <div className="mt-3 text-4xl font-bold text-white">
                {value}
            </div>

            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-cyan-500/10" />
        </motion.div>
    );
}