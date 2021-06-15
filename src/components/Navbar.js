import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";


export default function Navbar(props) {
  return (
    <>
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
          <i className={`fa fa-bars mobile-navbar-toggle ${props.sidebarActive && "fa-times"}`} onClick={() => props.setSidebarState(!props.sidebarActive)}></i>
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
