import React from "react";
import "./index.scss";
import { GrFormClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
export default function Cart({ ClickClose, ClickClose1, name, src }) {
  return (
    <div className="loginS pb-3">
      <div className="loginS_header ">
        <h6 className="m-0">{name}</h6>

        <GrFormClose onClick={ClickClose} style={{ fontSize: "20px" }} />
      </div>
      <div className="content">
        <div className="content_product">
          <div className="cart_single d-flex align-items-center">
            <div className="me-2 content_img">
              <a href="#">
                <img src={src} width="40" className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="loginS_footer">
        <div className="col-11 m-auto pt-2">
          <Button onClick={ClickClose1} className="btnCheckout">
            Đăng Xuất
          </Button>
        </div>
      </div>
    </div>
  );
}
