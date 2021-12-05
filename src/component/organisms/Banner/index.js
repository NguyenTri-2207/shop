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
    dots: false,
    infinite: true,
    speed: 800,
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
        <SliderImg src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/3/637741411837311205_F-H1_800x300%20(1).png" />
        <SliderImg src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/30/637739082837263999_pk%20my.png" />
        {/* <SliderImg src="" /> */}
      </Slider>
    </div>
  );
};
export default Banner;
