import React, { useContext } from "react";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import MapImg from "../assets/imgs/World_Map.png";

const locations = [
  { name: "New York", value: 72 },
  { name: "San Francisco", value: 39 },
  { name: "Sydney", value: 25 },
  { name: "Singapore", value: 61 },
];

export default function LocationStats() {
  const { theme } = useContext(ThemeContext);

  const palette =
    theme === "light"
      ? {
          cardBg: "#f7fafc",
          title: "#111827",
          muted: "#6b7280",
          bar: "#A8C5DA",
          track: "#e6eefc",
          dot: "#0f1724",
        }
      : {
          cardBg: "#111316",
          title: "#e6eef8",
          muted: "#9aa0a6",
          bar: "#A8C5DA",
          track: "#17202a",
          dot: "#111827",
        };

  const max = 100;

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        p: { xs: 2, sm: 3 },
        backgroundColor: palette.cardBg,
        width: { xs: "155%", sm: "100%", md: "100%" },
        height: "84%",
        marginLeft: { xs: 0, sm: 4, md: 7.5 },
        mt: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: { xs: 1.5, sm: 2 },
          color: palette.title,
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
        }}
      >
        Revenue by Location
      </Typography>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          mb: { xs: 1.5, sm: 2 },
        }}
      >
        {/* Map image */}
        <Box
          component="img"
          src={MapImg}
          alt="World Map"
          sx={{
            width: { xs: "120px", sm: "160px", md: "180px" },
            display: "block",
            opacity: 1,
            userSelect: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: { xs: 14, sm: 22, md: 26 },
            top: { xs: 14, sm: 18 },
          }}
        >
          <Box sx={{ position: "relative", width: 0, height: 0 }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: "-90px", sm: "-100px", md: "-110px" },
                top: { xs: "12px", sm: "14px", md: "16px" },
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: palette.dot,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: { xs: "-70px", sm: "-80px", md: "-84px" },
                top: { xs: "20px", sm: "22px", md: "24px" },
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: palette.dot,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: { xs: "-16px", sm: "-18px", md: "-20px" },
                top: { xs: "32px", sm: "36px", md: "40px" },
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: palette.dot,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: { xs: "-28px", sm: "-32px", md: "-36px" },
                top: { xs: "44px", sm: "50px", md: "56px" },
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: palette.dot,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Location list */}
      <Box>
        {locations.map((loc) => {
          const percent = Math.round((loc.value / max) * 100);
          return (
            <Box
              key={loc.name}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: palette.title,
                      fontWeight: 600,
                      fontSize: { xs: 13, sm: 14 },
                    }}
                  >
                    {loc.name}
                  </Typography>
                  <Typography
                    sx={{ color: palette.muted, fontSize: { xs: 12, sm: 13 } }}
                  >
                    {loc.value}K
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={percent}
                  sx={{
                    height: 6,
                    borderRadius: 8,
                    backgroundColor: palette.track,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: palette.bar,
                      borderRadius: 8,
                    },
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}