import React, { useContext } from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

const rows = [
  { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
];

export default function TopProducts() {
  const { theme } = useContext(ThemeContext);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const palette =
    theme === "light"
      ? {
          bg: "#f7fafc",
          text: "#1C1C1C",
          muted: "#6b7280",
          border: "#e5e7eb",
        }
      : {
          bg: "#111316",
          text: "#f3f4f6",
          muted: "#9ca3af",
          border: "#2f3740",
        };

  if (isMobile) return null;

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        p: { sm: 3 },
        mt: 2,
        backgroundColor: palette.bg,
        flex: 1,
        width: "96%",
        height: "85%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: palette.text,
          fontSize: { sm: "1.1rem", md: "1.25rem" },
        }}
      >
        Top Selling Products
      </Typography>

      <Table size="small" sx={{ minWidth: 810 }}>
        <TableHead>
          <TableRow>
            {["Name", "Price", "Quantity", "Amount"].map((col) => (
              <TableCell
                key={col}
                sx={{
                  color: palette.muted,
                  fontWeight: 600,
                  borderBottom: `2px solid ${palette.border}`,
                  pb: 1.2,
                  whiteSpace: "nowrap",
                  fontSize: { sm: "0.85rem", md: "0.9rem" },
                }}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} hover>
              <TableCell
                sx={{
                  color: palette.text,
                  borderBottom: "none",
                  pb: 2,
                  fontSize: { sm: "0.85rem", md: "0.9rem" },
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text,
                  borderBottom: "none",
                  pb: 2,
                  fontSize: { sm: "0.85rem", md: "0.9rem" },
                }}
              >
                {row.price}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text,
                  borderBottom: "none",
                  pb: 2,
                  fontSize: { sm: "0.85rem", md: "0.9rem" },
                }}
              >
                {row.qty}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text,
                  borderBottom: "none",
                  pb: 2,
                  fontSize: { sm: "0.85rem", md: "0.9rem" },
                }}
              >
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}