import React, { useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Notifications from "./components/Notifications";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";

function Layout() {
  const { theme } = useContext(ThemeContext);
  const isDesktop = useMediaQuery("(min-width:768px)");

  const [notificationsOpen, setNotificationsOpen] = useState(isDesktop);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`app ${theme}`} style={{ display: "flex" }}>
      <Sidebar
        open={isDesktop ? true : sidebarOpen}
        onClose={toggleSidebar}
        isDesktop={isDesktop}
      />

      <div style={{ flex: 1, display: "flex" }}>
        <div
          className="main"
          style={{
            flex: 1,
            marginLeft: isDesktop ? 250 : 0,
            transition: "margin-left 0.3s ease",
          }}
        >
          <Navbar
            onToggleNotifications={toggleNotifications}
            onToggleSidebar={toggleSidebar}
            isDesktop={isDesktop}
          />

          {/* ✅ Routing goes here */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>

        {/* Notifications */}
        {notificationsOpen && (
          <div style={{ width: 280, flexShrink: 0 }}>
            <Notifications open={notificationsOpen} />
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;