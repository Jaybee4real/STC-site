import React from "react";
import "../index.scss";
import MiniCard from "./MiniCard";

export default function Sidebar(props) {
    return (
        <div className={`sidebar-container ${props.sidebarActive ? "active" : " "}`}>
            <div className="logo" />
            <div className="sidebar-title">Cart</div>
            <i className="fa fa-times sidebar-toggle" onClick={() => props.setSidebarActive(!props.sidebarActive)} />
            <MiniCard />
        </div>
    );
}
