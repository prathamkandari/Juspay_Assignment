import React, { useContext } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Box,
    Typography,
    useTheme,
    alpha,
} from "@mui/material";
import {
    Menu as MenuIcon,
    List as ListIcon,
    StarBorder,
    WbSunny,
    DarkMode,
    NotificationsNone,
    History,
    Fullscreen,
    Search as SearchIcon,
} from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar({ onToggleNotifications, onToggleSidebar }) {
    const theme = useTheme();
    const { theme: mode, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            {/* ================= Desktop / Tablet Navbar ================= */}
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
                    display: { xs: "none", sm: "block" },
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                        minHeight: 56,
                        mr: 2,
                    }}
                >
                    {/* Left side */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <IconButton size="small" color="inherit">
                            <ListIcon fontSize="small" />
                        </IconButton>

                        <IconButton size="small" color="inherit">
                            <StarBorder fontSize="small" />
                        </IconButton>

                        <Typography variant="body2" sx={{ color: "var(--muted)" }}>
                            Dashboards
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            / Default
                        </Typography>
                    </Box>

                    {/* Center search bar */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "8px",
                            minWidth: 200,
                            backgroundColor:
                                mode === "light"
                                    ? "rgba(0,0,0,0.05)"
                                    : "rgba(255,255,255,0.1)",
                            "&:hover": {
                                backgroundColor:
                                    mode === "light"
                                        ? "rgba(0,0,0,0.1)"
                                        : "rgba(255,255,255,0.15)",
                            },
                            marginLeft: "auto",
                        }}
                    >
                        <SearchIcon
                            fontSize="small"
                            sx={{
                                mr: 1,
                                opacity: 0.6,
                                color: mode === "light" ? "black" : "white",
                            }}
                        />
                        <InputBase
                            placeholder="Search"
                            sx={{
                                fontSize: "0.875rem",
                                flex: 1,
                                color: mode === "light" ? "black" : "white",
                            }}
                        />
                        <Typography
                            variant="caption"
                            sx={{
                                ml: 1,
                                opacity: 0.6,
                                fontSize: "0.75rem",
                                color: mode === "light" ? "black" : "white",
                            }}
                        >
                            ⌘ /
                        </Typography>
                    </Box>

                    {/* Right side */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <IconButton size="small" onClick={toggleTheme} color="inherit">
                            {mode === "light" ? (
                                <WbSunny fontSize="small" />
                            ) : (
                                <DarkMode fontSize="small" />
                            )}
                        </IconButton>

                        <IconButton size="small" color="inherit" onClick={() => window.location.reload()}>
                            <History fontSize="small" />
                        </IconButton>

                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={onToggleNotifications}
                        >
                            <NotificationsNone fontSize="small" />
                        </IconButton>

                        <IconButton size="small" color="inherit" onClick={() => {
                            if (!document.fullscreenElement) {
                                document.documentElement.requestFullscreen(); // ✅ enter fullscreen
                            } else {
                                document.exitFullscreen(); // ✅ exit fullscreen
                            }
                        }}>
                            <Fullscreen fontSize="small" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* ================= Mobile Navbar ================= */}
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
                    display: { xs: "block", sm: "none" },
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                        minHeight: 50,
                        px: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            minWidth: 0, 
                            overflow: "hidden",
                        }}
                    >
                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={onToggleSidebar}
                            sx={{ flexShrink: 0 }}
                        >
                            <MenuIcon fontSize="small" />
                        </IconButton>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "var(--muted)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            Dashboards
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}
                        >
                            / Default
                        </Typography>
                    </Box>

                    {/* Right: Theme toggle */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            flexShrink: 0,
                        }}
                    >
                        <IconButton size="small" onClick={toggleTheme} color="inherit">
                            {mode === "light" ? (
                                <WbSunny fontSize="small" />
                            ) : (
                                <DarkMode fontSize="small" />
                            )}
                        </IconButton>
                        {/* If you want notifications back, re-add here */}
                        {/* <IconButton size="small" color="inherit" onClick={onToggleNotifications}>
        <NotificationsNone fontSize="small" />
      </IconButton> */}
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    );
}