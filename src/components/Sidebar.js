import React, { useState } from "react";
import "../index.scss";
import MiniCard from "./MiniCard";

export default function Sidebar(props) {
    return (
        <div className={`sidebar-container ${props.sidebarActive ? "active" : " "}`}>
            <div className="logo" />
            <div className="sidebar-title">Cart</div>
            <MiniCard />
        </div>
    );
}
