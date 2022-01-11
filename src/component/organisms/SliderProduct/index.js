import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { dataMenu } from "../MenuBot/data";
import CardProduct from "../../molecules/CardProduct";
import { IoIosFlash } from "react-icons/io";
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 10 ? h : `0${h}`;
  var mDisplay = m > 10 ? m : `0${m}`;
  var sDisplay = s > 10 ? s : `0${s}`;
  return hDisplay + ":" + mDisplay + ":" + sDisplay;
}
const Timer = (props) => {
  const [time, setTime] = useState();
  useEffect(() => {
    let myInterval = setInterval(() => {
      const d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      setTime(86400 - (h * 3600 + m * 60 + s));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    < div >
      <p className="m-0 ms-2">{time ? secondsToHms(time) : "..."}</p>
    </ div >
  );
};
const SliderProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container">
      <div className="saleOnline">
        <div className="saleOnline_header">
          <img
            src="https://cdn.tgdd.vn/2021/12/banner/1200-60-1200x60-5.png"
            alt="banner"
          />
        </div>
        <h4 className="saleOnline_time">
          {" "}
          <span>F</span><IoIosFlash /><span>ASH SALE ONLINE:</span> <Timer />
        </h4>
        <Slider {...settings} className="saleOnline_slider">
          {dataMenu &&
            dataMenu[0]?.data.map((item) => (

              <CardProduct
                className="saleOnline_card"
                key={item.id}
                img={item.src}
                title={item.title}
                price={item.price}
                des={item.des}
                discount={item.discount}
                priceDiscount={item.priceDiscount}
                // onClicSee={() => HandleClickSee(item)}
                start={item.start}
              // onClickaddCard={() => handleaddCard(item)}
              />

            ))}
        </Slider>
      </div >
    </div >
  );
};
export default SliderProduct;
