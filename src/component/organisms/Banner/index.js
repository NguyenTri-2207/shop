import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { AiOutlineSearch } from 'react-icons/ai'
const SliderImg = ({ src }) => {
  return (
    <div className="SliderImg">
      <img alt="banner" src={src} />
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
    <div className="container">
      <div className="search">
        <div className="search_icon">
          <AiOutlineSearch />
        </div>

        <input
          type="text"
          name="q"
          id="search"
          className="cps-input cta-search"
          placeholder="Bạn cần tìm gì?"
          maxlength="128"
          autocomplete="off"
        />
      </div>
      <Slider {...settings} className="banner_slider">
        <SliderImg src="https://cdn.tgdd.vn/2021/11/banner/830-300-830x300-24.png" />
        <SliderImg src="https://ctmobile.vn/upload/lamhinh-01-2.jpg" />
        <SliderImg src="https://devicer.cmsmasters.net/wp-content/uploads/revslider/home_slider_video/03-1.jpg" />
      </Slider>
    </div>
  );
};
export default Banner;
