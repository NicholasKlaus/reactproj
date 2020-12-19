import React from "react";
import Slider from "react-slick";

export const WeatherSlider = ({ children, config}) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...config
  };

  return (
      <Slider {...settings}>
        { children }
      </Slider>
  )
}