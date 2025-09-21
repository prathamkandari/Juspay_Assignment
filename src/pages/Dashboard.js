import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import DashboardCards from "../components/DashboardCards";
import RevenueChart from "../components/RevenueChart";
import ProjectionsChart from "../components/ProjectionsChart";
import LocationStats from "../components/LocationStats";
import TopProducts from "../components/TopProducts";
import SalesPieChart from "../components/SalesPieChart";

const Dashboard = () => {
    return (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, pl: {md: 6}}}>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600,
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: 18, sm: 20, md: 22 },
                }}
            >
                eCommerce
            </Typography>

            <Grid container spacing={3}>
                {/* Row 1 - Dashboard Cards */}
                <Grid item xs={12}>
                    <DashboardCards />
                </Grid>

                {/* Row 2 - Projections (left) and Revenue + Location (right) */}
                <Grid item xs={12} md={6}>
                    <ProjectionsChart />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <RevenueChart />
                        </Grid>
                        <Grid item xs={12}>
                            <LocationStats />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Row 3 - Top Products & Sales Pie */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TopProducts />
                        </Grid>
                        <Grid item xs={12}>
                            <SalesPieChart />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
