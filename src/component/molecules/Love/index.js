import React, { useRef, useEffect } from "react";
import "./index.scss";
import { GrFormClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
function useOutsideAlerter(ref, hidden) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        hidden()
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
export default function Cart({ ClickClose, deleteProduct }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, ClickClose);
  return (
    <div ref={wrapperRef} className="love pb-3">
      <div className="love_header ">
        <h6 className="m-0">Saved Products</h6>

        <GrFormClose onClick={ClickClose} style={{ fontSize: "20px" }} />
      </div>
      <div className="content">
        <div className="content_product">
          <div className="cart_single d-flex align-items-center">
            <div className="me-2 content_img">
              <a href="#">
                <img
                  src="https://picsum.photos/200/300"
                  width="40"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="content_title">
              <h6>Women Striped Shirt Dress</h6>
              <p className="mb-0">
                <span className="content_size">36</span>-
                <span className="content_color">Red</span>
              </p>
              <p className="content_price">$129</p>
            </div>
          </div>
          <div className="content_deleteProduct">
            <GrFormClose onClick={deleteProduct} style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
      <div className="love_footer">
        <div className="d-flex justify-content-between px-3 border-bottom">
          <h6>Subtotal</h6>
          <p className="fw-bolder mb-2">1450$</p>
        </div>
        <div className="col-11 m-auto pt-2">
          <Button className="btnCheckout">Checkout Now</Button>
        </div>
        <div className="col-11 m-auto mt-2">
          <Button className="btnEdit">Edit or View</Button>
        </div>
      </div>
    </div>
  );
}
