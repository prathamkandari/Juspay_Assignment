import React, { useContext, useMemo, useState } from "react";
import {
    Box,
    Paper,
    Typography,
    IconButton,
    TextField,
    InputAdornment,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Pagination,
    Stack,
    Button,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    InputLabel,
    Select,
    Checkbox,
    TableContainer,
    Tooltip,
} from "@mui/material";
import {
    ImportExport as ImportExport,
    Add as AddIcon,
    FilterList as FilterListIcon,
    Search as SearchIcon,
    MoreHoriz as MoreHorizIcon,
    CalendarToday as CalendarIcon,
} from "@mui/icons-material";
import Andi from '../assets/imgs/Contacts/Andi.png';
import Drew from '../assets/imgs/Contacts/Drew.png';
import Kate from '../assets/imgs/Contacts/Kate.png';
import Natali from '../assets/imgs/Contacts/Natali.png';
import Orlando from '../assets/imgs/Contacts/Orlando.png';
import { ThemeContext } from "../context/ThemeContext";

const INITIAL_ORDERS = [
    {
        id: "#CM9801",
        user: "Natali Craig",
        avatar: Natali,
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        dateText: "Just now",
        status: "In Progress",
    },
    {
        id: "#CM9802",
        user: "Kate Morrison",
        avatar: Kate,
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        dateText: "A minute ago",
        status: "Complete",
    },
    {
        id: "#CM9803",
        user: "Drew Cano",
        avatar: Drew,
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        dateText: "1 hour ago",
        status: "Pending",
    },
    {
        id: "#CM9804",
        user: "Orlando Diggs",
        avatar: Orlando,
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        dateText: "Yesterday",
        status: "Approved",
    },
    {
        id: "#CM9805",
        user: "Andi Lane",
        avatar: Andi,
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        dateText: "Feb 2, 2023",
        status: "Rejected",
    },
    // duplicate to show pagination
    {
        id: "#CM9806",
        user: "Natali Craig",
        avatar: Natali,
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        dateText: "Just now",
        status: "In Progress",
    },
    {
        id: "#CM9807",
        user: "Kate Morrison",
        avatar: Kate,
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        dateText: "A minute ago",
        status: "Complete",
    },
    {
        id: "#CM9808",
        user: "Drew Cano",
        avatar: Drew,
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        dateText: "1 hour ago",
        status: "Pending",
    },
    {
        id: "#CM9809",
        user: "Orlando Diggs",
        avatar: Orlando,
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        dateText: "Yesterday",
        status: "Approved",
    },
    {
        id: "#CM9810",
        user: "Andi Lane",
        avatar: Andi,
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        dateText: "Feb 2, 2023",
        status: "Rejected",
    },
];

export default function Orders() {
    const { theme } = useContext(ThemeContext);

    const palette = theme === "light"
        ? {
            bg: "#fff",
            text: "#111827",
            muted: "#6b7280",
            border: "#e6e9ec",
            rowHover: "#f7fafc",
            inputBg: "#fff",
            checkbox: "#000",
        }
        : {
            bg: "#0b0d0e",
            text: "#e6eef8",
            muted: "#9ca3af",
            border: "#2f3740",
            rowHover: "#111316",
            inputBg: "#1a1d1f",
            checkbox: "#e6eef8",
        };

    const STATUS_MAP = {
        "In Progress": { text: "#8A8CD9" },
        Complete: { text: "#4AA785" },
        Pending: { text: "#59A8D4" },
        Approved: { text: "#FFC555" },
        Rejected: { text: theme === "light" ? "#1C1C1C" : "#ffffff" },
    };

    const [orders, setOrders] = useState(INITIAL_ORDERS);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortField, setSortField] = useState("user");
    const [sortAsc, setSortAsc] = useState(true);
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const [addOpen, setAddOpen] = useState(false);
    const [newOrder, setNewOrder] = useState({
        id: "",
        user: "",
        avatar: "",
        project: "",
        address: "",
        dateText: "Just now",
        status: "Pending",
    });

    const [filterAnchor, setFilterAnchor] = useState(null);

    const openFilterMenu = (event) => {
        setFilterAnchor(event.currentTarget);
    };

    const closeFilterMenu = () => {
        setFilterAnchor(null);
    };

    const filteredOrders = useMemo(() => {
        const q = search.trim().toLowerCase();
        let items = orders.filter((r) => {
            if (statusFilter !== "All" && r.status !== statusFilter) return false;
            if (!q) return true;
            return (
                r.id.toLowerCase().includes(q) ||
                r.user.toLowerCase().includes(q) ||
                (r.project && r.project.toLowerCase().includes(q))
            );
        });

        items.sort((a, b) => {
            let A = (sortField === "user" ? a.user : a.id).toLowerCase();
            let B = (sortField === "user" ? b.user : b.id).toLowerCase();
            if (A < B) return sortAsc ? -1 : 1;
            if (A > B) return sortAsc ? 1 : -1;
            return 0;
        });

        return items;
    }, [orders, search, statusFilter, sortField, sortAsc]);

    const pageCount = Math.max(1, Math.ceil(filteredOrders.length / rowsPerPage));
    const pageItems = filteredOrders.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handleStatusFilter = (status) => {
        setStatusFilter(status);
        setPage(1);
    };

    const handleToggleSort = () => {
        setSortAsc((s) => !s);
    };

    const handleChangeSortField = () => {
        setSortField((f) => (f === "user" ? "id" : "user"));
    };

    const handlePageChange = (e, p) => {
        setPage(p);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openAddDialog = () => {
        setNewOrder({
            id: `#CM${Math.floor(9800 + Math.random() * 200).toString()}`,
            user: "",
            avatar: "/images/contact-placeholder.png",
            project: "",
            address: "",
            dateText: "Just now",
            status: "Pending",
        });
        setAddOpen(true);
    };

    const handleAddSubmit = () => {
        setOrders((prev) => [newOrder, ...prev]);
        setAddOpen(false);
        setPage(1);
    };

    const handleRemove = (id) => {
        setOrders((prev) => prev.filter((r) => r.id !== id));
    };

    const [selected, setSelected] = useState({});
    const toggleSelect = (id) => {
        setSelected((s) => ({ ...s, [id]: !s[id] }));
    };

    return (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 }}}>
            <Typography
                variant="h6"
                sx={{ mb: 2, color: palette.text, fontWeight: 600 }}
            >
                Order List
            </Typography>

            <Paper
                elevation={0}
                sx={{
                    width: { xs: "100%", sm:"100%", md: "80%", lg: "85%" },
                    borderRadius: 2,
                    backgroundColor: theme === "light" ? palette.bg : "#1e1e1e",
                    border: `1px solid ${palette.border}`,
                    overflow: "hidden",
                    position: { xs: "absolute"}, 
                    overflowX: { xs: "auto" },
                }}
            >
                {/* header controls */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 1.5,
                        py: 1,
                        mb: 2,
                        borderBottom: `1px solid ${palette.border}`,
                        width: { xs: 10, sm: 20, md: "100%" },
                        justifyContent: "space-between",
                        borderRadius: 2, // rounded corners for whole control bar
                        background: theme === "light" ? "#F7F9FB" : "#111316",
                    }}
                >
                    {/* Left Controls */}
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <Tooltip title="Add order">
                            <IconButton
                                size="small"
                                onClick={openAddDialog}
                                sx={{
                                    color: palette.text,
                                    width: { xs: "10%" },
                                    pl: { md: 2 }
                                }}
                            >
                                <AddIcon />
                            </IconButton>
                        </Tooltip>

                        <IconButton size="small" sx={{ color: palette.text, pl: { md: 1.5 } }} onClick={openFilterMenu}>
                            <FilterListIcon />
                        </IconButton>

                        <Menu
                            anchorEl={filterAnchor}
                            open={Boolean(filterAnchor)}
                            onClose={closeFilterMenu}
                        >
                            <MenuItem value="All" onClick={() => { handleStatusFilter("All"); closeFilterMenu(); }}>
                                All
                            </MenuItem>
                            {Object.keys(STATUS_MAP).map((s) => (
                                <MenuItem
                                    key={s}
                                    value={s}
                                    onClick={() => { handleStatusFilter(s); closeFilterMenu(); }}
                                >
                                    {s}
                                </MenuItem>
                            ))}
                        </Menu>


                        <IconButton
                            size="small"
                            onClick={() => {
                                handleChangeSortField();
                                setSortAsc(true);
                            }}
                            sx={{ color: palette.text }}
                        >
                            <ImportExport />
                        </IconButton>
                    </Stack>

                    {/* Right Controls */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TextField
                            size="small"
                            placeholder="Search"
                            value={search}
                            onChange={handleSearchChange}
                            sx={{
                                minWidth: { xs: 160, sm: 260 },
                                background: palette.inputBg,
                                borderRadius: "999px",
                                "& fieldset": { border: "none" },
                                input: { color: palette.text },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: palette.muted }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>


                <TableContainer
                    sx={{
                        width: "100%",
                        overflowY: "auto", 
                        overflowX: "auto",
                        "& th, & td": {
                            fontSize: { xs: "0.5rem", sm: "0.8rem", md: "0.875rem" },
                            px: { xs: 1, sm: 1.5, md: 2 },
                            py: { xs: 0.5, sm: 0.75, md: 1 },
                        },
                    }}
                >
                    <Table
                        size="small"
                        sx={{
                            minWidth: 900,
                            borderCollapse: "separate",
                            borderSpacing: 0,

                        }}
                    >
                        <TableHead>
                            <TableRow sx={{ opacity: 0.4 }}>
                                <TableCell sx={{ width: 40, borderBottom: `1px solid ${palette.border}` }}>
                                    <Checkbox
                                        sx={{
                                            color: palette.checkbox,
                                            "&.Mui-checked": { color: palette.checkbox },
                                        }}
                                        size="small"
                                        onChange={(e) => {
                                            const checked = e.target.checked;
                                            if (checked) {
                                                const map = {};
                                                orders.forEach((o) => (map[o.id] = true));
                                                setSelected(map);
                                            } else {
                                                setSelected({});
                                            }
                                        }}
                                        checked={Object.keys(selected).length === orders.length && orders.length > 0}
                                    />
                                </TableCell>
                                <TableCell sx={{ borderBottom: `1px solid ${palette.border}`, color: palette.text }}>Order ID</TableCell>
                                <TableCell sx={{ borderBottom: `1px solid ${palette.border}`, color: palette.text }}>User</TableCell>
                                <TableCell sx={{ borderBottom: `1px solid ${palette.border}`, color: palette.text }}>Project</TableCell>
                                <TableCell sx={{ borderBottom: `1px solid ${palette.border}`, color: palette.text }}>Address</TableCell>
                                <TableCell sx={{ borderBottom: `1px solid ${palette.border}`, color: palette.text }}>Date</TableCell>
                                <TableCell sx={{ borderBottom: `1px solid ${palette.border}`, color: palette.text }}>Status</TableCell>
                                <TableCell sx={{ width: 68, borderBottom: `1px solid ${palette.border}` }} />
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {pageItems.map((row) => {
                                const statusMeta = STATUS_MAP[row.status] || { text: palette.text };
                                return (
                                    <TableRow
                                        key={row.id}
                                        hover
                                        sx={{
                                            "&:hover": { background: palette.rowHover },
                                        }}
                                    >
                                        <TableCell sx={{ opacity: 0.4 }}>
                                            <Checkbox
                                                size="small"
                                                checked={!!selected[row.id]}
                                                onChange={() => toggleSelect(row.id)}
                                                sx={{
                                                    color: palette.checkbox,
                                                    "&.Mui-checked": { color: palette.checkbox },
                                                }}
                                            />
                                        </TableCell>


                                        <TableCell sx={{ color: palette.text }}>{row.id}</TableCell>

                                        <TableCell>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Avatar src={row.avatar} alt={row.user} sx={{ width: { xs: 20, md: 34 }, height: { xs: 20, md: 34 } }} />
                                                <Typography sx={{ color: palette.text, fontSize: { xs: "0.5rem", sm: "0.8rem", md: "0.875rem" } }}>{row.user}</Typography>
                                            </Stack>
                                        </TableCell>

                                        <TableCell sx={{ color: palette.text }}>{row.project}</TableCell>

                                        <TableCell sx={{ color: palette.text }}>{row.address}</TableCell>

                                        <TableCell sx={{ color: palette.muted, display: "flex", alignItems: "center", gap: 1, mt: 1.7 }}>
                                            <CalendarIcon sx={{ fontSize: 16, color: palette.muted }} />
                                            <Typography sx={{ color: palette.muted }}>{row.dateText}</Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, opacity: 0.7 }}>
                                                {/* bullet dot */}
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: statusMeta.text,
                                                    }}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: statusMeta.text,
                                                        fontWeight: 600,
                                                        opacity: 0.7,
                                                    }}
                                                >
                                                    {row.status}
                                                </Typography>
                                            </Box>
                                        </TableCell>


                                        <TableCell align="right">
                                            <IconButton size="small" onClick={() => console.log("open row menu", row.id)}>
                                                <MoreHorizIcon sx={{ color: palette.text }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}

                            {pageItems.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={8} align="center" sx={{ py: 6, color: "#1C1C1C" }}>
                                        No orders found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* footer: pagination */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        px: 2,
                        py: 2,
                        borderTop: `1px solid ${palette.border}`,
                        background: "transparent",
                    }}
                >
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        size="small"
                        shape="rounded"
                        siblingCount={0}
                        sx={{
                            "& .MuiPaginationItem-root": {
                                fontSize: { xs: 12, sm: 13, md: 14 },
                                minWidth: { xs: 28, sm: 32, md: 36 },
                                height: { xs: 28, sm: 32, md: 36 },
                                color: palette.text,
                            },
                            "& .Mui-selected": {
                                backgroundColor: palette.rowHover,
                                color: palette.text,
                            },
                        }}
                    />
                </Box>
            </Paper>

            {/* -------- Add Order Dialog -------- */}
            <Dialog open={addOpen} onClose={() => setAddOpen(false)} fullWidth maxWidth="sm" PaperProps={{
                sx: {
                    backgroundColor: palette.bg,
                    color: palette.text,
                },
            }}>
                <DialogTitle>Add Order</DialogTitle>
                <DialogContent dividers sx={{ borderColor: palette.border }}>
                    <Stack spacing={2} sx={{ mt: 1 }}>
                        <TextField
                            label="Order ID"
                            size="small"
                            value={newOrder.id}
                            onChange={(e) => setNewOrder((p) => ({ ...p, id: e.target.value }))}
                            sx={{
                                "& .MuiInputBase-input": { color: palette.text },
                                "& .MuiInputLabel-root": { color: palette.muted },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: palette.border },
                                    "&:hover fieldset": { borderColor: palette.text },
                                },
                            }}
                        />
                        <TextField
                            label="User name"
                            size="small"
                            value={newOrder.user}
                            onChange={(e) => setNewOrder((p) => ({ ...p, user: e.target.value }))}
                            sx={{
                                "& .MuiInputBase-input": { color: palette.text },
                                "& .MuiInputLabel-root": { color: palette.muted },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: palette.border },
                                    "&:hover fieldset": { borderColor: palette.text },
                                },
                            }}
                        />
                        <TextField
                            label="Avatar URL"
                            size="small"
                            value={newOrder.avatar}
                            onChange={(e) => setNewOrder((p) => ({ ...p, avatar: e.target.value }))}
                            sx={{
                                "& .MuiInputBase-input": { color: palette.text },
                                "& .MuiInputLabel-root": { color: palette.muted },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: palette.border },
                                    "&:hover fieldset": { borderColor: palette.text },
                                },
                            }}
                        />
                        <TextField
                            label="Project"
                            size="small"
                            value={newOrder.project}
                            onChange={(e) => setNewOrder((p) => ({ ...p, project: e.target.value }))}
                            sx={{
                                "& .MuiInputBase-input": { color: palette.text },
                                "& .MuiInputLabel-root": { color: palette.muted },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: palette.border },
                                    "&:hover fieldset": { borderColor: palette.text },
                                },
                            }}
                        />
                        <TextField
                            label="Address"
                            size="small"
                            value={newOrder.address}
                            onChange={(e) => setNewOrder((p) => ({ ...p, address: e.target.value }))}
                            sx={{
                                "& .MuiInputBase-input": { color: palette.text },
                                "& .MuiInputLabel-root": { color: palette.muted },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: palette.border },
                                    "&:hover fieldset": { borderColor: palette.text },
                                },
                            }}
                        />
                        <FormControl size="small">
                            <InputLabel id="new-status-label">Status</InputLabel>
                            <Select
                                labelId="new-status-label"
                                value={newOrder.status}
                                label="Status"
                                onChange={(e) => setNewOrder((p) => ({ ...p, status: e.target.value }))}
                                sx={{
                                    color: palette.text,
                                    "& .MuiOutlinedInput-notchedOutline": { borderColor: palette.border },
                                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: palette.text },
                                }}
                            >
                                {Object.keys(STATUS_MAP).map((s) => (
                                    <MenuItem key={s} value={s}>
                                        {s}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ borderTop: `1px solid ${palette.border}` }}>
                    <Button onClick={() => setAddOpen(false)} sx={{ color: palette.text }}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleAddSubmit}
                        sx={{
                            backgroundColor: palette.text,
                            color: theme === "light" ? "#fff" : "#000",
                            "&:hover": { backgroundColor: palette.muted },
                        }}
                    >
                        Add Order
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
