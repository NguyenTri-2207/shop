import React, { useState, useEffect } from "react";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./index.scss";
import SocialShare from "../SocialShare";
import {
  AiFillGift,
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineEye,
} from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
const dollarUSLocale = Intl.NumberFormat("en-US");
const dataColor = ["#edddc6", "#033357", "#1d1d1d", "#ebece6"];
const dataStart = [1, 2, 3, 4, 5];
export default function CartModal(props) {
  const [img, setImg] = useState();
  const [active, setActive] = useState(0);
  const [activeRam, setActiveRam] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [price, setPrice] = useState(0);
  const priceData = parseInt(props.price);
  const Ram128GB = priceData;
  const Ram256GB = priceData + (45 / 100) * priceData;
  const Ram512GB = priceData + (90 / 100) * priceData;
  const Ram1TB = priceData + (100 / 100) * priceData;
  const [ram, setRam] = useState(Ram128GB);
  useEffect(() => {
    setPrice(priceData);
  }, [priceData]);
  const handleImg = (item, i) => {
    setImg(item.src);
    setActive(i);
  };
  const handleRam = (i) => {
    setActiveRam(i);
    if (i === 0) {
      setPrice(Ram128GB);
      setRam(Ram128GB);
    } else if (i === 1) {
      setRam(Ram256GB);
      setPrice(Ram256GB);
    } else if (i === 2) {
      setPrice(Ram512GB);
      setRam(Ram512GB);
    } else if (i === 3) {
      setPrice(Ram1TB);
      setRam(Ram1TB);
    }
  };

  const handleColor = (i) => {
    setActiveColor(i);
    if (i === 0) {
      setPrice(ram);
    } else if (i === 1) {
      setPrice(ram + (2 / 100) * priceData);
    } else if (i === 2) {
      setPrice(ram - (1 / 100) * priceData);
    } else if (i === 3) {
      setPrice(ram - (2 / 100) * priceData);
    }
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="CartModal "
      >
        <Modal.Header
          className="CartModal_header container"
          closeButton
        ></Modal.Header>
        <Modal.Body className="row pt-0">
          <div className="col-12 col-md-5 img">
            <div className="img_top mb-2">
              <img
                className=" mb-3"
                height={200}
                src={img || (props.dataImg && props.dataImg[0].src)}
                alt="s"
              />
            </div>
            <div className="img_thumnail">
              {props.dataImg &&
                props.dataImg.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleImg(item, index)}
                      className={`${index === active ? "active" : ""}`}
                    >
                      {" "}
                      <img
                        className="py-1"
                        width={45}
                        height={45}
                        src={item.src}
                        alt="s"
                      />
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="col-12 col-md-7">
            <h3> {props.title}</h3>
            <h3> {dollarUSLocale.format(price)}đ</h3>
            <div className="evaluate">
              {dataStart.slice(0, props.start).map((index, item) => {
                return (
                  <AiFillStar key={index} className="cardpro_evaluate_star" />
                );
              })}
            </div>
            <div>
              {props.dataRam &&
                props.dataRam.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleRam(index)}
                      className={`CartModal_Ram ${
                        index === activeRam ? "activeRam" : ""
                      }`}
                    >
                      <span>{item}</span>
                      <img
                        alt="img"
                        className={`CartModal_RamImg ${
                          index === activeRam ? "d-block" : "d-none"
                        }`}
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                      />
                    </button>
                  );
                })}
            </div>
            <div className="d-flex">
              {dataColor.map((item, index) => {
                return (
                  <button
                    key={index}
                    style={{ background: item }}
                    onClick={() => handleColor(index)}
                    className={`CartModal_color ${
                      index === activeColor ? "activeColor" : ""
                    }`}
                  ></button>
                );
              })}
            </div>
            <div className="sale">
              <div className="sale_title">
                <h5>
                  <AiFillGift className="mb-1 me-2 text-danger" />
                  Khuyến Mãi
                </h5>
              </div>
              <div className="sale_content">
                <ul>
                  <li>
                    <BsFillCheckCircleFill />
                    <p className="m-0">
                      Giảm tới 1.500.000đ khi Thu cũ - Lên đời {props.title}{" "}
                    </p>
                  </li>
                  <li>
                    <BsFillCheckCircleFill />
                    <p className="m-0">Giảm đến 50% phụ kiện mua kèm.</p>
                  </li>
                  <li>
                    <BsFillCheckCircleFill />
                    <p className="m-0">Trả Góp 0%, Lấy Máy Ngay</p>
                  </li>{" "}
                  <li>
                    <BsFillCheckCircleFill />
                    <p className="m-0">
                      Bảo Hành Super Vip Lỗi Đổi Ngay Máy Mới 100%
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pay">
              <a href="/giohang">Mua Ngay</a>
              <Button
                className="btnheart"
                variant="none d-flex position-relative  pb-0"
                onClick={props.onClickaddCard}
              >
                <AiOutlineShoppingCart
                  style={{ fontSize: "28px", color: "#bf1e2d" }}
                  className=""
                />{" "}
              </Button>
            </div>
            <SocialShare
              iconWidth={30}
              iconHeight={30}
              title="Share this article"
              titleClass=" d-lg-none"
              iconCLass=" flex-lg-column"
            />
            Cấu hình Điện thoại {props.title}
            <OverlayTrigger
              placement="top"
              // show={true}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <ul>
                    <li className="d-flex">
                      <p className="mb-1">Màn hình:</p>
                      <span class="liright">OLED 6.7 Super Retina XDR</span>
                    </li>
                    <li className="d-flex">
                      <p className="mb-1">Hệ điều hành:</p>
                      <span>
                        <span className="">iOS 15</span>
                      </span>
                    </li>

                    <li className="d-flex">
                      <p className="mb-1">Chip:</p>
                      <span>
                        <span className="">Apple A15 Bionic</span>
                      </span>
                    </li>

                    <li className="d-flex">
                      <p className="mb-1">Pin, Sạc:</p>
                      <span>4352 mAh 20 W</span>
                    </li>
                  </ul>
                </Tooltip>
              }
            >
              <button className="tooltip-btn ">
                <FaInfoCircle />
              </button>
            </OverlayTrigger>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
