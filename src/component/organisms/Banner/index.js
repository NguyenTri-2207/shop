import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
const SliderImg = ({ src }) => {
  return (
    <div className="SliderImg">
      <h2>Apple Watch Series 7</h2>
      <img src={src} />
    </div>
  );
};
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
        <SliderImg src="https://devicer.cmsmasters.net/wp-content/uploads/revslider/home_slider_video/01-1-1.jpg" />
        <SliderImg src="https://devicer.cmsmasters.net/wp-content/uploads/revslider/home_slider_video/02-1.jpg" />
        <SliderImg src="https://devicer.cmsmasters.net/wp-content/uploads/revslider/home_slider_video/03-1.jpg" />
      </Slider>
    </div>
  );
};
export default Banner;
