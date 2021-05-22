import React from "react";
import testimony1 from "../img/quote-1.jpeg";
import testimony2 from "../img/quote-2.jpeg";
import testimony3 from "../img/quote-3.jpeg";

/////Components
import Navbar from "../components/Navbar";
import SliderSection from "../components/SliderSection";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="header-container">
        <div className="left-side">
          <h1 className="header-text">The Secret To Youth | Health | Longevity</h1>
          <h5 className="header-subtitle">Order Now And Get Yours Shipped To You!</h5>
        </div>
        <div className="right-side"></div>
      </div>

      <div className="section">
        <Swiper
          spaceBetween={50}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          pagination={true}
          className="quote-container"
        >
          <SwiperSlide>
            <div className="slide">
              <img src={testimony1} alt="testimony-1" />
              <div className="quote-text">I introduced STC30 to a lady with breast cancer. The lady who could not sleep due to severe pains got a miracle of her life after taking STC30. After 25 sachets she now sleeps like a baby and the cancer sore is drying up.</div>
              <div className="author">-Mathew Braveheart</div>
            </div>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide>
            <div className="slide">
              <img src={testimony2} alt="testimony-1" />
              <div className="quote-text">My father was diagnosed CA Prostate. I lost hope and talked to someone who knew where she could get at least one supply. My father was now in a coma stage and could not eat or talk. He could not swallow even fluids. So l gave him a first satchet on the first day . We had to force open the mouth using a spoon. I was shocked that after three days there was tremendous changes! STC30 is very good.</div>
              <div className="author">-Anita Beltran</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={testimony3} alt="testimony-1" />
              <div className="quote-text">My father was diagnosed CA Prostate. I lost hope and talked to someone who knew where she could get at least one supply. My father was now in a coma stage and could not eat or talk. He could not swallow even fluids. So l gave him a first satchet on the first day . We had to force open the mouth using a spoon. I was shocked that after three days there was tremendous changes! STC30 is very good.</div>
              <div className="author">-Anita Beltran</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="section">
        <SliderSection />
      </div>
    </div>
  );
}
