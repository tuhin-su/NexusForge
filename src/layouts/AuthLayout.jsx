import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex overflow-hidden bg-slate-100">

            {/* LEFT SIDE */}
            <div className="hidden lg:flex flex-1 relative bg-[#0f172a] overflow-hidden">

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px"
                    }}
                />

                {/* Animated Routes */}
                <motion.div
                    animate={{
                        x: ["-100%", "100%"]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/3 h-[2px] w-[300px]
                               bg-gradient-to-r
                               from-transparent
                               via-cyan-400
                               to-transparent"
                />

                <motion.div
                    animate={{
                        x: ["100%", "-100%"]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-2/3 h-[2px] w-[250px]
                               bg-gradient-to-r
                               from-transparent
                               via-blue-400
                               to-transparent"
                />

                {/* Main Content */}
                <div className="relative z-10 flex flex-col justify-center px-20 w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                    >
                        <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            Warehouse Intelligence Platform
                        </span>

                        <h1 className="text-white text-6xl font-bold mt-8 leading-tight">
                            Manage
                            <br />
                            Inventory
                            <br />
                            In Real-Time
                        </h1>

                        <p className="text-slate-400 text-lg mt-6 max-w-xl">
                            Control stock, shipments, warehouses,
                            vendors and operations from a single
                            intelligent dashboard.
                        </p>
                    </motion.div>

                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-2 gap-5 mt-16 max-w-3xl">

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

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[520px] flex items-center justify-center p-8 bg-white">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    className="w-full max-w-md"
                >
                    <Outlet />
                </motion.div>
            </div>

        </div>
    );
}

function MetricCard({ title, value }) {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: 1.02
            }}
            className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                p-6
            "
        >
            <div className="text-slate-400 text-sm">
                {title}
            </div>

            <div className="text-white text-4xl font-bold mt-3">
                {value}
            </div>

            <div
                className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-cyan-500/10
                "
            />
        </motion.div>
    );
}