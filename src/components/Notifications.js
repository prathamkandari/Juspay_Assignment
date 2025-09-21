import React, { useContext } from "react";
import {
    Box,
    Typography,
    Avatar,
    Divider,
    Slide,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import {
    BugReport,
    PersonAdd,
    Wifi,
} from "@mui/icons-material";
import ActiveOne from '../assets/imgs/Activities/Activites1.png';
import ActiveTwo from '../assets/imgs/Activities/Activities2.png';
import ActiveThree from '../assets/imgs/Activities/Activities3.png';
import ActiveFour from '../assets/imgs/Activities/Activities4.png';
import ActiveFive from '../assets/imgs/Activities/Activities5.png';

import Andi from '../assets/imgs/Contacts/Andi.png';
import Drew from '../assets/imgs/Contacts/Drew.png';
import Kate from '../assets/imgs/Contacts/Kate.png';
import Koray from '../assets/imgs/Contacts/Koray.png';
import Natali from '../assets/imgs/Contacts/Natali.png';
import Orlando from '../assets/imgs/Contacts/Orlando.png';

import { ThemeContext } from "../context/ThemeContext";

export default function Notifications({ open }) {
    const { theme } = useContext(ThemeContext);

    const palette =
        theme === "light"
            ? {
                bg: "#ffffff",
                text: "#111827",
                muted: "#6b7280",
                border: "#e5e7eb",
            }
            : {
                bg: "#1f1f1f",
                text: "#f3f4f6",
                muted: "#9ca3af",
                border: "#2f3740",
            };

    return (
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
            <Box
                sx={{
                    position: "fixed",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 280,
                    backgroundColor: palette.bg,
                    borderLeft: `1px solid ${palette.border}`,
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    zIndex: 1200,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": { width: "6px" },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: palette.muted,
                        borderRadius: "4px",
                    },
                }}
            >
                {/* Notifications */}
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1, color: palette.text }}
                >
                    Notifications
                </Typography>
                <List sx={{ mb: 2 }}>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "rgba(59,130,246,0.2)" }}>
                                <BugReport fontSize="small" sx={{ color: "#3b82f6" }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="You have a bug that needs..."
                            secondary="Just now"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>

                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "#E5ECF6" }}>
                                <PersonAdd fontSize="small" sx={{ color: "#000" }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="New user registered"
                            secondary="59 minutes ago"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>

                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "rgba(59,130,246,0.2)" }}>
                                <BugReport fontSize="small" sx={{ color: "#3b82f6" }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="You have a bug that needs..."
                            secondary="Just now"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>

                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "#E5ECF6" }}>
                                <Wifi fontSize="small" sx={{ color: "#000" }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Andi Lane subscribed to you"
                            secondary="Just now"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>
                </List>

                <Divider sx={{ my: 1, borderColor: palette.border }} />

                {/* Activities */}
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1, color: palette.text }}
                >
                    Activities
                </Typography>
                <List sx={{ mb: 2 }}>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar
                                src={ActiveOne}
                                alt="Logo"
                                sx={{ bgcolor: "rgba(59,130,246,0.2)" }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="You have a bug that needs..."
                            secondary="Just now"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>


                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "rgba(59,130,246,0.2)" }}>
                                <img
                                    src={ActiveTwo}
                                    alt="User"
                                    style={{ width: "60%", height: "60%" }}
                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Released a new version"
                            secondary="59 minutes ago"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>


                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "rgba(59,130,246,0.2)" }}>
                                <img
                                    src={ActiveThree}
                                    alt="Update"
                                    style={{ width: "60%", height: "60%" }} 
                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Submitted a bug"
                            secondary="12 hours ago"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>


                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar src={ActiveFour} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Modified A data in Page X"
                            secondary="Today, 11:59 AM"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>

                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar src={ActiveFive} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Deleted a page in Project X"
                            secondary="Feb 2, 2023"
                            primaryTypographyProps={{ sx: { color: palette.text, fontSize: 13 } }}
                            secondaryTypographyProps={{ sx: { color: palette.muted, fontSize: 12 } }}
                        />
                    </ListItem>
                </List>

                <Divider sx={{ my: 1, borderColor: palette.border }} />

                {/* Contacts */}
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1, color: palette.text }}
                >
                    Contacts
                </Typography>
                <List>
                    {[
                        { name: "Natali Craig", img: Natali },
                        { name: "Drew Cano", img: Drew },
                        { name: "Orlando Diggs", img: Orlando },
                        { name: "Andi Lane", img: Andi },
                        { name: "Kate Morrison", img: Kate },
                        { name: "Koray Okumus", img: Koray },
                    ].map((person, idx) => (
                        <ListItem disablePadding key={idx} sx={{ mb: 1 }}>
                            <ListItemAvatar>
                                <Avatar src={person.img} alt={person.name} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={person.name}
                                primaryTypographyProps={{
                                    sx: { color: palette.text, fontSize: 13 },
                                }}
                            />
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Slide>
    );
}
