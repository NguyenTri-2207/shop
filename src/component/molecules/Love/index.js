import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import { GrFormClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
const dollarUSLocale = Intl.NumberFormat("en-US");

function useOutsideAlerter(ref, hidden) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        hidden();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
export default function Cart({ ClickClose, data, deleteProduct }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, ClickClose);
  return (
    <div ref={wrapperRef} className="love pb-3">
      <div className="love_header ">
        <h6 className="m-0">Sản phẩm yêu thích</h6>

        <GrFormClose onClick={ClickClose} style={{ fontSize: "20px" }} />
      </div>
      <div className="content">
        {data.length > 0 ? (
          <div>
            <div className="content_list">
              {data &&
                data.slice(0).map((item, index) => {
                  return (
                    <div className="content_product" key={index}>
                      <div className="cart_single d-flex align-items-center">
                        <div className="me-2 content_img">
                          <a href="#">
                            <img
                              src={item.src}
                              width="80"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="content_title">
                          <h6>{item.title}</h6>
                          <div className="content_price">
                            {dollarUSLocale.format(item.price)}đ
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <p>Danh sách trống</p>
        )}
      </div>
      <div className="love_footer">
        <div className="col-11 m-auto pt-2">
          <Button className="btnCheckout">Đến danh sách yêu thích</Button>
        </div>
      </div>
    </div>
  );
}
