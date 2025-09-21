import React, { useContext } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";
import { Paper, Typography, Box } from "@mui/material";

const data = [
    { name: "Jan", previous: 10, current: 16 },
    { name: "Feb", previous: 19, current: 10 },
    { name: "Mar", previous: 16, current: 11 },
    { name: "Apr", previous: 12, current: 17, dashedCurrent: 17 },
    { name: "May", previous: 13, current: null, dashedCurrent: 21 },
    { name: "Jun", previous: 23, current: null, dashedCurrent: 20 },
];

export default function RevenueChart() {
    const { theme } = useContext(ThemeContext);

    const palette =
        theme === "light"
            ? {
                cardBg: "#f7fafc",
                text: "#111827",
                muted: "#9ca3af",
                grid: "#e6e9ec",
                previousStroke: "#9ec6f9",
                current: "#111827",
            }
            : {
                cardBg: "#111316",
                text: "#e6eef8",
                muted: "#9aa0a6",
                grid: "#2f3740",
                previousStroke: "#7fb6ea",
                current: "#e6eef8",
            };

    const currentWeekAmount = "$58,211";
    const previousWeekAmount = "$68,768";

    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 3,
                backgroundColor: palette.cardBg,
                width: { xs: "96%", sm: "100%", md: "100%" },
                // ✅ Responsive padding & margin
                p: { xs: 2, sm: 3, md: 4 },
                mt: { xs: 2, sm: 3, md: 5 },
            }}
        >
            {/* ----------------- Header ----------------- */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: { xs: "flex-start", sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 1.5, sm: 3, md: 40 },
                    mb: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: palette.text,
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem", lg: "1.4rem" },
                    }}
                >
                    Revenue
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 1, sm: 2 },
                        alignItems: "center",
                    }}
                >
                    {/* Current Week */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: palette.current,
                            }}
                        />
                        <Typography
                            sx={{ color: palette.text, fontSize: { xs: 11, sm: 12, md: 13 } }}
                        >
                            Current Week{" "}
                            <strong
                                style={{
                                    color: palette.text,
                                    marginLeft: 6,
                                    fontWeight: 600,
                                }}
                            >
                                {currentWeekAmount}
                            </strong>
                        </Typography>
                    </Box>

                    {/* Previous Week */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: palette.previousStroke,
                            }}
                        />
                        <Typography
                            sx={{ color: palette.text, fontSize: { xs: 11, sm: 12, md: 13 } }}
                        >
                            Previous Week{" "}
                            <strong
                                style={{
                                    color: palette.text,
                                    marginLeft: 6,
                                    fontWeight: 600,
                                }}
                            >
                                {previousWeekAmount}
                            </strong>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* ----------------- Chart ----------------- */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: 220, sm: 260, md: 320, lg: 360 },
                }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 10, right: 26, left: 6, bottom: 10 }}
                    >
                        <CartesianGrid
                            stroke={palette.grid}
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={{
                                stroke: palette.muted,
                                strokeOpacity: 0.2,
                                strokeWidth: 1.5,
                            }}
                            tickLine={false}
                            tick={{
                                fill: palette.muted,
                                fontSize: 12,
                                dy: 6,
                            }}
                            interval={0}
                            padding={{ left: 8, right: 8 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(val) => `${val}M`}
                            tick={{
                                fill: palette.muted,
                                fontSize: 12,
                            }}
                            domain={[-2, 30]}
                            ticks={[0, 10, 20, 30]}
                        />

                        {/* Previous Week line */}
                        <Line
                            type="monotone"
                            dataKey="previous"
                            stroke={palette.previousStroke}
                            strokeWidth={2.2}
                            dot={false}
                        />

                        {/* Current solid line */}
                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke={palette.current}
                            strokeWidth={3.2}
                            dot={false}
                        />

                        {/* Current dashed line */}
                        <Line
                            type="monotone"
                            dataKey="dashedCurrent"
                            stroke={palette.current}
                            strokeWidth={3.2}
                            strokeDasharray="5 6"
                            dot={false}
                            connectNulls={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: palette.cardBg,
                                border: "1px solid rgba(0,0,0,0.06)",
                                borderRadius: 8,
                                color: palette.text,
                                boxShadow: "0 6px 20px rgba(12,18,31,0.08)",
                            }}
                            itemStyle={{ color: palette.text }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
    );
}
