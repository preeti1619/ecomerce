import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/Slider1.json";
import "./Residence.css";
import { sliderSettings } from "../utils/Common";

const Residence = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText"> Popular Residences</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons/>
            {data.map((card, i) => (
              <SwiperSlide keys={i}>
                <div className=" flexColStart r-card">
                  <img src={card.image} alt="home" />

                  <span className="secondary r-price">
                    <span>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residence;
const SliderButtons = () => {
  const swiper=useSwiper();
  return (
    <div className=" flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
