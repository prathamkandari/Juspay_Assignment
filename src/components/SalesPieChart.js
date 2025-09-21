import React, { useContext } from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";
import { Paper, Typography, Box, Stack } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

const data = [
    { name: "Direct", value: 300.56 },
    { name: "Affiliate", value: 135.18 },
    { name: "Sponsored", value: 154.02 },
    { name: "E-mail", value: 48.96 },
];

const COLORS_LIGHT = ["#111827", "#BAEDBD", "#95A4FC", "#B1E3FF"];
const COLORS_DARK = ["#C6C7F8", "#BAEDBD", "#95A4FC", "#B1E3FF"];

export default function SalesPieChart() {
    const { theme } = useContext(ThemeContext);

    const palette = theme === "light"
        ? {
            bg: "#f7fafc",
            text: "#111827",
            muted: "#6b7280",
        }
        : {
            bg: "#111316",
            text: "#f3f4f6",
            muted: "#9ca3af",
        };

    const colors = theme === "light" ? COLORS_LIGHT : COLORS_DARK;

    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 3,
                p: { xs: 2, sm: 2 },
                mt: 2,
                backgroundColor: palette.bg,
                flex: 1,
                minWidth: { xs: "160%", sm: 332 },
                ml: { xs: -1.8, md: 1.5 },
            }}
        >
            <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: palette.text }}
            >
                Total Sales
            </Typography>

            <Box sx={{ width: "100%", height: { xs: 220, sm: 200 } }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={45}
                            outerRadius={80}
                            paddingAngle={6}
                            dataKey="value"
                            cornerRadius={5}
                        >
                            {data.map((_, idx) => (
                                <Cell key={idx} fill={colors[idx % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value, name) => [`$${value}`, name]}
                            contentStyle={{
                                backgroundColor: theme === "light" ? "#fff" : "#fff", 
                                color: theme === "light" ? "#fff" : "#f3f4f6",          
                                border: `1px solid ${palette.muted}`,
                                borderRadius: 8,
                                fontSize: 13,
                            }}
                        />

                    </PieChart>
                </ResponsiveContainer>
            </Box>

            {/* Legend */}
            <Stack
                spacing={1.2}
                mt={2}
                alignItems="center"
                sx={{
                    flexDirection: { xs: "column", sm: "column" }, 
                    width: "100%",
                }}
            >
                {data.map((entry, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "auto auto 1fr",
                            gap: 2,
                            alignItems: "center",
                            width: { xs: "100%", sm: 200 },
                            maxWidth: 280,
                        }}
                    >
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: colors[idx % colors.length],
                            }}
                        />

                        <Typography sx={{ color: palette.text, fontSize: 14 }}>
                            {entry.name}
                        </Typography>

                        <Typography
                            sx={{
                                color: palette.text,
                                fontSize: 14,
                                justifySelf: "end",
                            }}
                        >
                            ${entry.value.toFixed(2)}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
}
