import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

////
import image1 from "../img/stc-image-1.jpeg";
import image2 from "../img/stc-image-2.jpg";
import image3 from "../img/stc-image-3.jpeg";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function SliderSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // eslint-disable-next-line
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const images = [image1, image2, image3];
  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="top-img" src={images[i]} style={{ listStyle: "none" }} alt={`Slide ${i}`} />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 3; i += 1) {
    thumbs.push(
      <SwiperSlide className="slide-2" key={`thumb-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img src={images[i]} alt={`Thumbnail ${i}`}></img>
      </SwiperSlide>
    );
  }

  return (
    <>
      <div  className="section-heading">Featured Product</div>
      <div className="showcase-section">
        <div className="showcase">
          <Swiper id="main" thumbs={{ swiper: thumbsSwiper }} controller={{ control: controlledSwiper }} tag="section" wrapperTag="ul" navigation spaceBetween={0} slidesPerView={1}>
            {slides}
          </Swiper>
          {/*  */}
          <Swiper className="swiper-thumbs" id="thumbs" spaceBetween={5} slidesPerView={3} onSwiper={setThumbsSwiper}>
            {thumbs}
          </Swiper>
        </div>

        <div className="right-container">
          <div className="subheading">Product Name</div>
          <div className="text big">Superlife STC-30</div>
          {/*  */}
          <div className="subheading">Description</div>
          <div className="text">
            You are about to discover a Miracle Supplement used for treatment and cure of any medical conditions mentioned above and lots more. This supplement is known to be 300% effective than
            normal conventional medications because of its therapeutic uses for any kind of diseases on earth. Various researches have proved its therapeutic properties in various ailments. People
            administer it to treat a variety of Diseases
          </div>
          <div className="subheading" id="featured-product">Other Information</div>
          <div className="sub-subheading">How to Administer</div>
          <div className="text">
            <ul>
              <li>(Best Taken Before Breakfast)</li>
              <li>Tear open the sachet gently.</li>
              <li>Raise tongue to hit the roof of the mouth</li>
              <li>Pour content of the sachet under tongue and allow to dissolve. Do not swallow</li>
              <li>Drink lots of water</li>
            </ul>
          </div>

          <div className="buttons-container">
            <div className="btn">
              <i className="fa fa-globe-africa"></i>Order Online
            </div>
            <span>Or</span>
            <a href="tel:08023046401" className="btn green">
              <i className="fa fa-phone-alt"></i>Call To Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderSection;
