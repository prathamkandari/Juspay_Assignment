import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../assets/css/DashboardCards.css";

const DashboardCards = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const cards = [
        {
            title: "Customers",
            value: "3,781",
            change: "+11.01%",
            positive: true,
            highlight: true,
        },
        {
            title: "Orders",
            value: "1,219",
            change: "-0.03%",
            positive: false,
            highlight: false,
            route: "/orders",
        },
        {
            title: "Revenue",
            value: "$695",
            change: "+15.03%",
            positive: true,
            highlight: false,
        },
        {
            title: "Growth",
            value: "30.1%",
            change: "+6.08%",
            positive: true,
            highlight: true,
        },
    ];

    return (
        <div className={`dashboard-cards ${theme}`}>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`card ${theme} ${card.highlight ? "highlight" : ""}`}
                    onClick={() => {
                        if (card.route) navigate(card.route);
                    }}
                    style={{ cursor: card.route ? "pointer" : "default" }}
                >
                    <div className="card-title">{card.title}</div>
                    <div className="card-main">
                        <div className="card-value">{card.value}</div>
                        <div
                            className={`card-change ${card.positive ? "positive" : "negative"}`}
                        >
                            {card.change}{" "}
                            {card.positive ? (
                                <TrendingUp fontSize="small" />
                            ) : (
                                <TrendingDown fontSize="small" />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCards;
