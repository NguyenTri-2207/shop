import React, { useRef, useEffect } from "react";
import "./index.scss";
import { GrFormClose } from "react-icons/gr";
import { auth } from "../../../service/firebase";
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

export default function Cart({ ClickClose, data }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, ClickClose);
  const user = data.multiFactor.user
  return (
    <div ref={wrapperRef} className="user p-3 ">


      <div className="user_header d-flex align-items-center pb-3">
        <img src={user.photoURL} alt="img" />
        <div>
          <h6 className="m-0">{user.displayName}

          </h6>
          <p>{user.email}</p>
        </div>


      </div>
      <div className="user_content">
        <ul>
          <li><a href="#">Đơn hàng của bạn</a></li>
          <li><a href="#">Sản phẩm yêu thích</a></li>
          <li><a href="#">Liên hệ</a></li>
          <li><a onClick={() => auth.signOut()} href="#">Đăng xuất</a></li>
        </ul>

      </div>

    </div>
  );
}
