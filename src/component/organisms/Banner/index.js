import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgSlider1 from "../../../../src/images/surily_home2_slider-01.jpg";
import imgSlider2 from "../../../../src/images/surily_home2_slider-02.jpg";
import imgSlider3 from "../../../../src/images/surily_home2_slider-03.jpg";
const Banner = () => {
  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner">
      <Slider {...settings} className="banner_slider">
        <img src={imgSlider1} alt="Slider1" />
        {/* <img src={imgSlider2} alt="Slider2" />
        <img src={imgSlider3} alt="Slider3" /> */}
      </Slider>
    </div>
  );
};
export default Banner;
