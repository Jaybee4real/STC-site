import React, { useState } from "react";
import testimony1 from "../img/quote-1.jpeg";
import testimony2 from "../img/quote-2.jpeg";
import testimony3 from "../img/quote-3.jpeg";

////Import Images
import product1 from "../img/superlife-colon.jpeg";
import product2 from "../img/superlife-immune.png";
import product3 from "../img/superlife-neuron.png";
import product4 from "../img/superlife-stc.jpeg";

/////Components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SliderSection from "../components/SliderSection";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from "swiper";

////Use Above Modules
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function Home() {
    ///Sidebar State
    const [sidebarActive, setSidebarActive] = useState(false);
    const [mobileNavbarActive, setMobileNavbarActive] = useState(false);
    /////Slider for other products SliderSection
    const images = [
        { name: "Superlife Total Care 30", image: product1 },
        { name: "Superlife Colon Care Plus", image: product2 },
        { name: "Superlife Immune Care", image: product3 },
        { name: "Superlife Neuron Care", image: product4 },
    ];
    const OtherProductsSlides = [];
    for (let i = 0; i < 4; i += 1) {
        OtherProductsSlides.push(
            <SwiperSlide key={`slide slide-${i}`}>
                <img
                    className="top-img"
                    src={images[i].image}
                    style={{
                        height: "20rem",
                        objectFit: "cover",
                        maxWidth: "100%",
                        border: "1px solid #b1c943",
                    }}
                    alt={`Slide ${i}`}
                />
                <div className="price">
                    $100 /
                    <span>₦200</span>
                </div>
                <div
                    className="section-subheading"
                    style={{ textAlign: "left", marginTop: "1rem" }}
                >
                    {images[i].name}
                </div>
                {/* <div className="buy-btn">Buy Now</div> */}
            </SwiperSlide>
        );
    }
    return (
        <>
            <Sidebar setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
            <div
                className={`page-container ${sidebarActive && "sidebar-open"} ${
                    mobileNavbarActive && "mobile-navbar-open"
                }`}
            >
                <Navbar
                    setSidebarActive={setSidebarActive}
                    sidebarActive={sidebarActive}
                    mobileNavbarActive={mobileNavbarActive}
                    setMobileNavbarActive={setMobileNavbarActive}
                    cartItems={[" ", " "]}
                />
                <div className="header-container">
                    <div className="left-side">
                        <h1 className="header-text">
                            The Secret To Good Health And Longevity
                        </h1>
                        <h5 className="header-subtitle">
                            Order Now And Get Yours Shipped To You!
                        </h5>
                        <a href="#featured-product">
                            <div className="btn">Order Now !</div>
                        </a>
                    </div>
                    <div className="right-side"></div>
                </div>

                <div className="section">
                    <Swiper
                        spaceBetween={50}
                        effect={"fade"}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        className="quote-container"
                        navigation
                        pagination
                    >
                        <SwiperSlide>
                            <div className="slide">
                                <img src={testimony1} alt="testimony-1" />
                                <div className="quote-text">
                                    I introduced STC30 to a lady with breast cancer. The
                                    lady who could not sleep due to severe pains got a
                                    miracle of her life after taking STC30. After 25
                                    sachets she now sleeps like a baby and the cancer sore
                                    is drying up.
                                </div>
                                <div className="author">-Mathew Braveheart</div>
                            </div>
                        </SwiperSlide>
                        {/*  */}
                        <SwiperSlide>
                            <div className="slide">
                                <img src={testimony2} alt="testimony-1" />
                                <div className="quote-text">
                                    My father was diagnosed CA Prostate. I lost hope and
                                    talked to someone who knew where she could get at
                                    least one supply. My father was now in a coma stage
                                    and could not eat or talk. He could not swallow even
                                    fluids. So l gave him a first satchet on the first day
                                    . We had to force open the mouth using a spoon. I was
                                    shocked that after three days there was tremendous
                                    changes! STC30 is very good.
                                </div>
                                <div className="author">-Anita Beltran</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <img src={testimony3} alt="testimony-1" />
                                <div className="quote-text">
                                    My next door neighbour was diagnosed with Statis
                                    Dermatitis. I introduced the product to her. She Have
                                    been taking STC30 from 21 April to date. Healing is
                                    taking place swiftly! Thanks to Superlife for
                                    producing STC30
                                </div>
                                <div className="author">-Tayo Bisola</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="section">
                    <SliderSection />
                </div>

                <div className="section products-slider">
                    <div className="section-heading">Other Products</div>
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        id="main"
                        navigation
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                    >
                        {OtherProductsSlides}
                    </Swiper>
                </div>

                <iframe
                    width="100%"
                    style={{ padding: "0 5vw" }}
                    height="400"
                    src="https://www.youtube.com/embed/BmWgcZIZsdA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    alllowfullscreen="true"
                ></iframe>

                <div className="section other-info-section">
                    <div className="section-heading">Other Information</div>
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "-1rem",
                            marginBottom: "1rem",
                            color: "#f06b00",
                            fontWeight: "600",
                        }}
                    >
                        SUPERLIFE COACHING & MENTOR-SHIP AVAILABLE! || GROW YOUR SUPERLIFE
                        BUSINESS WITH US!
                    </div>
                    <div className="section-subheading">Other Questions About STC 30</div>

                    <div className="faq-section">
                        <div className="left-side">
                            <div className="section-sub-subheading">
                                AT WHAT AGE CAN THE PRODUCT BE USED?
                            </div>
                            <div className="text">
                                As PhytoCellTec™ active ingredients have a very good,
                                protective effect that prevents aging of the skin, they
                                are recommended for younger and mature skin.
                            </div>
                            {/*  */}
                            <div className="section-sub-subheading">
                                CAN I PURCHASE STC30 AT A PHARMACY IN MY AREA?
                            </div>
                            <div className="text">
                                Our products can only be purchased online on our website
                                (like the one you're currently on or
                                www.superlifeworld.com) or through our independent
                                distributors only.
                            </div>
                            {/*  */}
                            <div className="section-sub-subheading">
                                CAN STC30 BE USED ON CHILDREN?
                            </div>
                            <div className="text">
                                Yes, can be used on children, under adult supervision.
                                This product is safe and Non-Toxic.
                            </div>
                            {/*  */}
                            <div className="section-sub-subheading">
                                IS IT SAFE TO CONSUME STC30?
                            </div>
                            <div className="text">
                                Double Stemcell™ has registered with Health Ministry
                                Malaysia(KKM) and it has went through Standards and
                                Industrial Research Institute of Malaysia (SIRIM) and SGS
                                Singapore General Laboratory Testing Standard. This
                                product is confirmed safe and 100% plant base.
                            </div>
                            {/*  */}
                            <div className="section-sub-subheading">
                                DOES STC30 HAVE ANY SIDE EFFECTS?
                            </div>
                            <div className="text">
                                STC30 have no side effects! Infact the company has placed
                                a $1 million compensation for anyone who uses the product
                                and develops any major side effects.
                            </div>
                        </div>

                        <div className="right-side">
                            {/*  */}
                            <div className="section-sub-subheading">
                                WHAT DISEASES CAN STC30 HELP CORRECT?
                            </div>
                            <div className="text">
                                <ul>
                                    <li>Cardiovascular disorders</li>
                                    <li>Improve blood flow</li>
                                    <li>Skin infections</li>
                                    <li>Liver problems</li>
                                    <li>Anti stress</li>
                                    <li>Eye problems</li>
                                    <li>Joint problems</li>
                                    <li>Hemorrhoids</li>
                                    <li>Hypertension</li>
                                    <li>Osteoarthritis</li>
                                    <li>Liver problems</li>
                                    <li>Gastrointestinal disorders</li>
                                    <li>Kidney disease</li>
                                    <li>Anti aging</li>
                                    <li>Burns</li>
                                    <li>Diabetes</li>
                                    <li>Heart disease</li>
                                    <li>Stroke</li>
                                    <li>Spinal cord injuries</li>
                                    <li>Muscular degeneration</li>
                                    <li>Prostate disorders</li>
                                    <li>All kind of cancers (even at stage 4)</li>
                                    <li>Memory problem</li>
                                    <li>Sleeping problem</li>
                                    <li>Infertility problem</li>
                                    <li>Impotence or poor sexual performance</li>
                                    <li>etc</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <span>JOCE Stores &copy; 2021</span>
                    <div className="watermark">Designed By Jaybee</div>
                </div>
            </div>
        </>
    );
}
