import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  Badge,
  Offcanvas,
  Nav,
  Accordion,
  NavDropdown,
  Button,
} from "react-bootstrap";

// icons
import { BiUser, BiMenu } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillGithub,
} from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaChevronDown,
} from "react-icons/fa";

//styles
import "./index.scss";
//components
import Footer from "../Footer";
import Cart from "../../molecules/Cart";
import User from "../../molecules/User";
import Love from "../../molecules/Love";
import LogIn from "../Login";
import logo from "../../../images/icons/logo.png";
import firebase from "../../../service/firebase";
import { LoginContex } from "../../context";
import { addDocument } from "../../../service/api";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  // const [] = useState(false);
  const { login, setLogin, userSucsecss, setUserSucsecss } =
    useContext(LoginContex);
  // state xử lý popup menu
  const [showCart, setShowCart] = useState(false);
  const [showLove, setShowLove] = useState(false);
  const [showUser, setShowUser] = useState(false);

  // gọi data redux cart
  const dataCart = useSelector((state) => state.cart);

  console.log(dataCart);
  // gọi data login

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserSucsecss(user);
    });
  }, []);

  // xử lý click
  const onClickCloseLove = () => {
    setShowLove(!showLove);
  };
  const onClickCloseCart = () => {
    setShowCart(!showCart);
  };

  const handleUserClick = () => {
    if (userSucsecss) {
      setShowUser(!showUser);
    } else {
      setLogin(true);
    }
  };

  ///sticky
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 160) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <>
      <div>
        <div className={`${sticky ? "d-block" : "d-none"} menuboi`}></div>
        <Navbar
          bg="light"
          expanded={showMenuMobile}
          id="myHeader"
          className={`${sticky ? "sticky" : ""} myHeader p-0`}
        >
          <div className="container">
            <div className="menu row">
              <div className="menuLeft  col-6 col-lg-10  col-xl-9  ">
                <button
                  className={`burger d-block d-lg-none`}
                  onClick={() => setShowMenuMobile(true)}
                >
                  <BiMenu style={{ fontSize: "30px" }} />
                </button>
                <Link to="/" className="menuLeft_logo">
                  <img src={logo} alt="logo" /> <h1>TrisApple</h1>
                </Link>
                <div className=" d-none d-lg-block col-8 ">
                  <div className=" d-flex">
                    <Link to="/" className="menuLeft_title">
                      Trang Chủ
                    </Link>
                    <div className="menuLeft_product">
                      <div className="menuLeft_product-title">Sản Phẩm</div>
                      <div className="menuLeft_product-item">
                        <div>
                          <Link to="/iphone">Iphone</Link>
                        </div>
                        <div>
                          <Link to="/iphone">MacBook</Link>
                        </div>
                        <div>
                          <Link to="/iphone">Ipad</Link>
                        </div>
                        <div>
                          <Link to="/iphone">Apple Watch</Link>
                        </div>
                        <div>
                          <Link to="/iphone">Linh Kiện</Link>
                        </div>
                      </div>
                      <FaChevronDown />
                    </div>
                    <a className="menuLeft_title" href="#action2">
                      Bảo Hành
                    </a>
                    <a className="menuLeft_title" href="#action2">
                      Liên Hệ
                    </a>
                  </div>
                </div>
              </div>

              <div className="menuRight col-6 col-lg-2  col-xl-3">
                <Button
                  onClick={handleUserClick}
                  className="btnheart"
                  variant="none pb-0 px-1 mt-0"
                >
                  <BiUser style={{ fontSize: "20px" }} />
                </Button>
                {showUser && userSucsecss && (
                  <User
                    data={userSucsecss}
                    ClickClose={() => setShowUser(false)}
                  />
                )}
                <div className="positon-relative">
                  <Button
                    className="btnheart"
                    variant="none d-flex position-relative  pb-0"
                    onClick={onClickCloseLove}
                  >
                    <AiOutlineHeart style={{ fontSize: "20px" }} className="" />{" "}
                    <Badge
                      className="position-absolute"
                      style={{ fontSize: "10px", right: 1, top: -1 }}
                      bg="secondary"
                    >
                      0
                    </Badge>
                  </Button>
                </div>
                {showLove && <Love ClickClose={() => setShowLove(false)} />}
                <div className="positon-relative">
                  <Button
                    className="btnheart"
                    variant="none d-flex position-relative pb-0"
                    onClick={onClickCloseCart}
                  >
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                    <Badge
                      className="position-absolute"
                      style={{ fontSize: "10px", right: 1, top: -1 }}
                      bg="secondary"
                    >
                      {dataCart.length - 1}
                    </Badge>
                  </Button>
                  {showCart && (
                    <Cart
                      ClickClose={() => setShowCart(false)}
                      data={dataCart}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {showMenuMobile && (
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              className="menuMoblie"
            >
              <Offcanvas.Header>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <img width={100} src={logo} alt="logo" />
                </Offcanvas.Title>
                <button
                  className={`burger ${showMenuMobile ? "toggle" : ""}`}
                  onClick={() => setShowMenuMobile(false)}
                >
                  <GrFormClose style={{ fontSize: "30px" }} />
                </button>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    style={{ fontSize: "20px" }}
                    href="#action1"
                    className="ps-3 text-dark "
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontSize: "20px" }}
                    className="ps-3 text-dark "
                    href="#action2"
                  >
                    Shop
                  </Nav.Link>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item className="accordion p-0" eventKey="0">
                      <Accordion.Header>Product</Accordion.Header>
                      <Accordion.Body>Men</Accordion.Body>
                      <Accordion.Body>Girl</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Nav.Link
                    style={{ fontSize: "20px" }}
                    href="#action1"
                    className="ps-3 text-dark "
                  >
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
              <div className="info">
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="/">
                        <i style={{ background: "#3b5998" }}>
                          <FaFacebookF />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i style={{ background: "rgb(228 14 14)" }}>
                          <FaYoutube />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i style={{ background: "rgb(58 57 105)" }}>
                          <AiFillGithub />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i style={{ background: "rgb(22 132 210)" }}>
                          <FaTwitter />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i style={{ background: "rgb(255 73 73 / 71%)" }}>
                          <FaInstagram />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Navbar.Offcanvas>
          )}
        </Navbar>
        {children}
        <Footer />
      </div>
      {!userSucsecss && (
        <LogIn show={login} handleClose={() => setLogin(false)} />
      )}
    </>
  );
};
export default Layout;
