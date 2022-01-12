import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

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
              <img
                alt="banner"
                src="https://cdn.tgdd.vn/2021/12/banner/tet-samsung-830-300-830x300.png"
              />

              <img
                alt="banner"
                src="https://cdn.tgdd.vn/2022/01/banner/830-300-830x300-4.png"
              />
            </Slider>
          </div>
          <div className="col-xl-3 d-xl-block d-none">
            <div className="banner_left">
              <img
                className="ImgBanner"
                alt="banner"
                src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/01/05/san-pham-hot-ip-13.png"
              />
              <p className="m-0 banner_left-title">NHIỀU KHUYẾN MÃI HOT</p>
              <img
                className="ImgBanner"
                alt="banner"
                src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/01/07/san-pham-hot-reno6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
