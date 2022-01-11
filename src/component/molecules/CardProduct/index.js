import * as React from "react";
import { FaCertificate } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineEye,
} from "react-icons/ai";
import "./index.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const dataStart = [
  1,
  1,
  1,
  1,
  1,
]
const dollarUSLocale = Intl.NumberFormat("en-US");
const CardProduct = ({
  title,
  img,
  price,
  des,
  discount,
  onClick,
  priceDiscount,
  className,
  onClickaddCard,
  onClicSee,
  start
}) => (
  <div className={`cardpro ${className ? className : ""}`}>
    <div className="cardpro_installment">Trả góp 0%</div>
    <img className="cardpro_photo" src={img} alt={title} />
    {/* {priceDiscount && (
      <div className="cardpro_discount">
        <FaCertificate className="cardpro_discount_icon">%</FaCertificate>
        {" Sale "}
        {priceDiscount}
        <i className="cardpro_price_currency">USD</i>
      </div>
    )} */}
    <div className="cardpro_content">
      <Link to="/iphone/iphone-13" className="cardpro_title">{title}</Link>
      <div className="cardpro_price">
        <div className="cardpro_price_New">
          {dollarUSLocale.format(price)}
          <i className="cardpro_price_currency">đ</i>
        </div>
        <div className="cardpro_price_discount">
          {dollarUSLocale.format(discount)}
          <i className="cardpro_price_currency">đ</i>
        </div>
      </div>
      <div className="cardpro_evaluate">
        {dataStart.slice(0, start).map((index, item) => {
          return (
            <AiFillStar className="cardpro_evaluate_star" />
          )
        }
        )}
        {dataStart.slice(0, 5 - start).map((index, item) => {
          return (
            <AiFillStar style={{ color: "#8e9195" }} />
          )
        }
        )}
      </div>
      <div className="cardpro_footer">
        <Button
          className="btnheart"
          variant="none d-flex position-relative  pb-0"
          onClick={onClicSee}
        >
          <AiOutlineEye style={{ fontSize: "20px" }} className="" />{" "}
        </Button>
        <Button
          className="btnheart"
          variant="none d-flex position-relative  pb-0"
          onClick={onClickaddCard}
        >
          <AiOutlineHeart style={{ fontSize: "20px" }} className="" />{" "}
        </Button>
        <Button
          className="btnheart"
          variant="none d-flex position-relative  pb-0"
          onClick={onClickaddCard}
        >
          <AiOutlineShoppingCart style={{ fontSize: "20px" }} className="" />{" "}
        </Button>
      </div>
    </div>
  </div>
);
export default CardProduct;
