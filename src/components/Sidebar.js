// src/components/Sidebar.js
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  FolderOutlined,
  MenuBookOutlined,
  PersonOutline,
  DescriptionOutlined,
  PeopleOutline,
  WorkOutline,
  ChatBubbleOutline,
  ExpandMore,
  ChevronRight,
} from "@mui/icons-material"; // ✅ Using only MUI icons
import { useTheme } from "@mui/material/styles";
import userProfile from "../assets/imgs/userProfile.png";

const drawerWidth = 250;

export default function Sidebar({ open, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openMenu, setOpenMenu] = useState("user-profile");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleToggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 3,
      }}
    >
      {/* Profile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar src={userProfile} alt="profile" sx={{ width: 40, height: 40 }} />
        <Typography fontWeight={600}>Bye Wind</Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      {/* Favorites / Recents */}
      <Box>
        <Tabs
          value={activeTab}
          onChange={(e, newVal) => setActiveTab(newVal)}
          textColor="inherit"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            minHeight: "auto",
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
              opacity: 0.5,
              minHeight: "auto",
              p: 0,
              mr: 2,
            },
            "& .Mui-selected": {
              fontWeight: 600,
              opacity: 1,
            },
          }}
        >
          <Tab label="Favorites" />
          <Tab label="Recents" />
        </Tabs>
        <List dense disablePadding sx={{ mt: 1 }}>
          <ListItemButton>
            <ListItemText
              primary="• Overview"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary="• Projects"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        </List>
      </Box>

      {/* Dashboards */}
      <Box>
        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            opacity: 0.6,
            mb: 1,
          }}
        >
          Dashboards
        </Typography>
        <List dense disablePadding>
          <ListItemButton selected>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <HomeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Default"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <ShoppingCartOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="eCommerce"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <FolderOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Online Courses"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        </List>
      </Box>

      {/* Pages */}
      <Box>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            opacity: 0.6,
            mb: 1,
          }}
        >
          Pages
        </Typography>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleToggleMenu("user-profile")}>
            {openMenu === "user-profile" ? (
              <ExpandMore fontSize="small" />
            ) : (
              <ChevronRight fontSize="small" />
            )}
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <PersonOutline fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="User Profile"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <Collapse in={openMenu === "user-profile"} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {["Overview", "Projects", "Campaigns", "Documents", "Followers"].map(
                (item, idx) => (
                  <ListItemButton key={idx} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ fontSize: 13 }}
                    />
                  </ListItemButton>
                )
              )}
            </List>
          </Collapse>

          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <DescriptionOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Account"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <PeopleOutline fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Corporate"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <WorkOutline fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Blog"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              <ChatBubbleOutline fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Social"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor:
            theme.palette.mode === "light" ? "#ffffff" : "#1f1f1f",
          color: "var(--text)",
          borderRight:
            theme.palette.mode === "light"
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.1)",
          boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
        },
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "none",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {drawerContent}
      </Box>
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      open
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor:
            theme.palette.mode === "light" ? "#ffffff" : "#1f1f1f",
          color: "var(--text)",
          borderRight:
            theme.palette.mode === "light"
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.1)",
          boxSizing: "border-box",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor:
              theme.palette.mode === "light" ? "#9ca3af" : "#6b7280",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor:
              theme.palette.mode === "light" ? "#f9fafb" : "#111827",
          },
        }}
      >
        {drawerContent}
      </Box>
    </Drawer>
  );
}
