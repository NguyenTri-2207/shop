import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import banner1 from "../../../images/banner/banner1.png";
import banner2 from "../../../images/banner/banner2.png";
import banner11 from "../../../images/banner/banner11.png";
import banner12 from "../../../images/banner/banner12.png";
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
      <div className="banner">
        <div className="row">
          <div className="col-xl-9 col-12" style={{ borderRadius: "24px" }}>
            <Slider {...settings} className="banner_slider  ">
              <img alt="banner" src={banner1} />

              <img alt="banner" src={banner2} />
            </Slider>
          </div>
          <div className="col-xl-3 d-xl-block d-none">
            <div className="banner_left">
              <img className="ImgBanner" alt="banner" src={banner11} />
              <p className="m-0 banner_left-title">NHIỀU KHUYẾN MÃI HOT</p>
              <img className="ImgBanner" alt="banner" src={banner12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
