import React, { useContext } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "Jan", actual: 4, projected: 18 },
  { name: "Feb", actual: 6, projected: 20 },
  { name: "Mar", actual: 5, projected: 18 },
  { name: "Apr", actual: 8, projected: 21 },
  { name: "May", actual: 4, projected: 15 },
  { name: "Jun", actual: 5, projected: 20 },
];

const ProjectionsChart = () => {
  const { theme } = useContext(ThemeContext);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const chartColors =
    theme === "light"
      ? {
        bg: "#f9fafb",
        text: "#374151",
        grid: "#e5e7eb",
        actual: "#dbeafe",
        projected: "#A8C5DA",
      }
      : {
        bg: "#111316",
        text: "#e5e7eb",
        grid: "#374151",
        actual: "#A8C5DA",
        projected: "#dbeafe",
      };

  return (
    <>
      {/* ================= Desktop / Tablet ================= */}
      {!isMobile && (
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            pl: 3,
            pr: 38,
            backgroundColor: chartColors.bg,
            height: "100%",
            marginLeft: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: chartColors.text,
              paddingLeft: "18px",
              pt: 2,
            }}
          >
            Projections vs Actuals
          </Typography>

          <ResponsiveContainer width="230%" height={300}>
            <BarChart
              data={data}
              barSize={35}
              barCategoryGap="25%"
              barGap={3}
              margin={{ top: 0, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={chartColors.grid}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke={chartColors.text}
                tick={{ fill: chartColors.text }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke={chartColors.text}
                tick={{ fill: chartColors.text }}
                tickFormatter={(value) => `${value}M`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: chartColors.bg,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  color: chartColors.text,
                }}
              />
              <Bar
                dataKey="projected"
                stackId="a"
                fill={chartColors.projected}
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="actual"
                stackId="a"
                fill={chartColors.actual}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      )}

      {/* ================= Mobile ================= */}

      {isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            m: 1, // margin around the whole box
          }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: "12px",
              backgroundColor: chartColors.bg,
              pr: 14,
              width: "100%",
              maxWidth: 400,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: chartColors.text,
                pl: 2,
                pt: 1,
              }}
            >
              Projections vs Actuals
            </Typography>

            <ResponsiveContainer width="140%" height={200}>
              <BarChart
                data={data}
                barSize={20}
                barCategoryGap="15%"
                barGap={2}
                margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={chartColors.grid}
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke={chartColors.text}
                  tick={{ fill: chartColors.text, fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke={chartColors.text}
                  tick={{ fill: chartColors.text, fontSize: 10 }}
                  tickFormatter={(value) => `${value}M`}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: chartColors.bg,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    color: chartColors.text,
                    fontSize: "0.75rem",
                  }}
                />
                <Bar
                  dataKey="projected"
                  stackId="a"
                  fill={chartColors.projected}
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="actual"
                  stackId="a"
                  fill={chartColors.actual}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default ProjectionsChart;