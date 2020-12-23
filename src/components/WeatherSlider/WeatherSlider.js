import React from "react";
import Slider from "react-slick";
import "./WeatherSlider.css";

export const WeatherSlider = ({ children, config}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    ...config
  };

  return (
      <Slider {...settings}>
        { children }
      </Slider>
  )
}