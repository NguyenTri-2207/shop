import React from "react";
import "./index.scss";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="container-md ">
      <div className="footer">
        <h4>TrisApple.com</h4>
        <div className="footer_iconsGroup">
          <a className="footer_icons footer_icons-fb" href="facebook.com">
            <FaFacebookF />
          </a>
          <a
            className="footer_icons footer_icons-instagram "
            href="facebook.com"
          >
            <FaInstagram />
          </a>
          <a className="footer_icons footer_icons-youtube" href="facebook.com">
            <FaYoutube />
          </a>
        </div>
        <ul>
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li>Bảo hành</li>
          <li>Liên hệ</li>
        </ul>
        <p>
          Copyright ©2022 All rights reserved | This template is made with by
          TrisApple.com
        </p>
      </div>
    </footer>
  );
};
export default Footer;
