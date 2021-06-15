import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

export default function Navbar(props) {
    return (
        <>
            <div className="mobile-navbar-container">
                <img
                    src={require("../img/logo.png").default}
                    className="mobile-navbar-logo"
                    alt="logo"
                />
                <div className="store-name">Joce Stores</div>

                <div className="mobile-navbar-item">
                    Home <i className="fa fa-chevron-right"></i>
                </div>
                <div className="mobile-navbar-item">
                    Cart <i className="fa fa-chevron-right"></i>
                </div>
            </div>

            <div className="advertisement-bar">
                <div className="left">
                    <span className="advert-text">Get 30% Discounts!</span>
                    <div className="left-inner">
                        <span className="end-text">Offer Ends In</span>
                        <span className="time-remaining">30</span>
                        <span className="end-text">Days</span>
                    </div>
                </div>

                <div className="right">
                    <i className="fa fa-search"></i>
                    {/* <i className="fa fa-shopping-cart" badge={3}></i> */}
                    <a href="tel:08023046401" className="top-cta">
                        <i className="fa fa-phone-alt"></i>
                        <span>Call +2348023046401</span>
                    </a>
                </div>
            </div>

            <div className="navbar-container">
                <div className="logo">JOCE STORES</div>
                <div className="right-side">
                    {/* <Link to="" className="nav-item">
            Store
          </Link> */}
                    <Link to="" className="nav-item">
                        Home
                    </Link>
                    <Link to="" className="nav-item">
                        Cart
                    </Link>
                    <i
                        className={`fa fa-shopping-cart mobile-navbar-toggle`}
                        onClick={() => props.setSidebarActive(!props.sidebarActive)}
                        data-badge={props.cartItems.length.toString()}
                    ></i>
                    <i
                        className={`fa fa-bars mobile-navbar-toggle ${
                            props.mobileNavbarActive && "fa-times"
                        }`}
                        onClick={() =>
                            props.setMobileNavbarActive(!props.mobileNavbarActive)
                        }
                    ></i>
                </div>
            </div>
        </>
    );
}

document.addEventListener("scroll", function (e) {
    let navbar = document.querySelector(".navbar-container");
    var offset = window.pageYOffset;
    if (offset > 1) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});
