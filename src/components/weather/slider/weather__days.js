import React from "react";
import "../weather.scss";
import cloud from "../../../assets/icons/Union.svg";
import "./slider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function WeatherDays() {
  return (
    <div className="weather__days">
      <Swiper
        className="swiper"
        spaceBetween={50}
        slidesPerView={4}
        slidesPerGroup={2}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="weather__day">
                <p className="weather__text weather__text_fw-m">24°C</p>
                <img src={cloud} alt="cloud" />
                <p className="weather__text weather__text_fw-m">Fri</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="custom-next"></div>
      <div className="custom-prev"></div>
    </div>
  );
}

export default WeatherDays;
