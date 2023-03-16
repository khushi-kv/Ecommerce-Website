import React from "react";
import "./Slider.scss";
import Slider from "react-slick";
import { sliderImgs } from "../../utils/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="slider-content ">
        <Slider {...settings}>
          <div className="slider-img">
            <img src={sliderImgs[0]} alt="sliderimg1" />
          </div>
          <div className="slider-img">
            <img src={sliderImgs[1]} alt="sliderimg2" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
