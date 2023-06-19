import React from "react";
import {
  decrement,
  increament,
  deletecart,
  deleteAll,
} from "../../../redux/action/cart";
import "./index.scss";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
const dollarUSLocale = Intl.NumberFormat("en-US");

export default function ListCartPayMent({ data, totalPrice }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <h3 className="mb-3 flex">Danh sách đơn hàng</h3>{" "}
      </div>
      <div className="contents">
        {data.length > 0 ? (
          <div>
            <Button onClick={() => dispatch(deleteAll())}>Xóa tất cả</Button>
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
                          <div style={{ fontSize: "16px" }}>
                            <Button
                              className="btn btn-light btn-sm "
                              disabled={item.quantity === 1}
                              onClick={() => dispatch(decrement(item))}
                            >
                              -
                            </Button>
                            số lượng :{item.quantity}
                            <Button
                              className="btn btn-light btn-sm"
                              onClick={() => dispatch(increament(item))}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <Button onClick={() => dispatch(deletecart(item))}>
                          Xóa
                        </Button>
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
                <Button className="btnCheckout">Thanh Toán</Button>
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
