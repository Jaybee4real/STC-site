import React from "react";
import { Link } from "react-router-dom";
import testimony1 from "../img/quote-1.jpeg";
import testimony2 from "../img/quote-2.jpeg";
import testimony3 from "../img/quote-3.jpeg";

export default function Home() {
  return (
    <div className="page-container">
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
          <i className="fa fa-shopping-cart" badge={3}></i>
          <a href="tel:08023046401" className="top-cta">
            <i className="fa fa-phone-alt"></i>
            <span>Call +2348023046401</span>
          </a>
        </div>
      </div>

      <div className="navbar-container">
        <div className="logo">JOCE STORES</div>
        <div className="right-side">
          <Link to="" className="nav-item">
            Store
          </Link>
          <Link to="" className="nav-item">
            Home
          </Link>
          <Link to="" className="nav-item">
            Cart
          </Link>
          <i className="fa fa-bars mobile-navbar-toggle"></i>
        </div>
      </div>
      <div className="header-container">
        <div className="left-side">
          <h1 className="header-text">The Secret To Youth | Health | Longevity</h1>
          <h5 className="header-subtitle">Order Now And Get Yours Shipped To You!</h5>
        </div>
        <div className="right-side"></div>
      </div>

      <div className="section">
        <div className="quote-container">
          <div className="slide">
            <img src={testimony1} alt="testimony-1" />
            <div className="quote-text">I introduced STC30 to a lady with breast cancer. The lady who could not sleep due to severe pains got a miracle of her life after taking STC30. After 25 sachets she now sleeps like a baby and the cancer sore is drying up.</div>
          </div>
        </div>
      </div>
    </div>
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
