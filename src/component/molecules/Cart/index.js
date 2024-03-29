import React, { useRef, useEffect } from "react";

import "./index.scss";
import { Button } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
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
export default function Cart({ ClickClose, data, totalPrice }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, ClickClose);
  return (
    <div ref={wrapperRef} className="cart pb-3">
      <div className="cart_header ">
        <h6 className="m-0">Products List</h6>

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
                          <div style={{ fontSize: "13px" }}>
                            số lượng :{item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="cart_footer">
              <div className="d-flex justify-content-between px-2 border-bottom py-2">
                <h6 className="m-0">Tổng cộng</h6>
                <div className="fw-bolder ">
                  {dollarUSLocale.format(totalPrice)} đ
                </div>
              </div>
              <div className="col-11 m-auto pt-2">
                <Link to="thanh-toan">
                  <Button className="btnCheckout">Thanh Toán</Button>
                </Link>
              </div>
              <div className="col-11 m-auto mt-2">
                <Button className="btnEdit">Chỉnh sửa</Button>
              </div>
            </div>
          </div>
        ) : (
          <p>Giỏ hàng trống</p>
        )}
      </div>
    </div>
  );
}
