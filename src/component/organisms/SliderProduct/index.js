import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { dataMenu } from "../MenuBot/data";
import CardProduct from "../../molecules/CardProduct";
import { IoIosFlash } from "react-icons/io";

var settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 9 ? h : `0${h}`;
  var mDisplay = m > 9 ? m : `0${m}`;
  var sDisplay = s > 9 ? s : `0${s}`;
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
    <div>
      <p className="m-0 ms-2">{time ? secondsToHms(time) : "..."}</p>
    </div>
  );
};
const SliderProduct = () => {
  // const [data, setData] = useState([]);
  const results = [];
  dataMenu
    .map((item) => item.data)
    .map((item) =>
      item.filter((i) => i && i.priceDiscount > 14 && results.push(i))
    );
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
          <span>F</span>
          <IoIosFlash />
          <span>ASH SALE ONLINE:</span> <Timer />
        </h4>
        <Slider {...settings} className="saleOnline_slider">
          {results &&
            results.map((item, index) => (
              <CardProduct
                className="saleOnline_card"
                key={index}
                img={item.src}
                title={item.title}
                price={item.price}
                des={item.des}
                discount={item.discount}
                priceDiscount={item.priceDiscount}
                start={item.start}
                cardSale={true}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};
export default SliderProduct;
