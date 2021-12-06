import React, { useState, useEffect } from "react";
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
import Cart from "../../molecules/Cart";
import User from "../../molecules/User";
import Love from "../../molecules/Love";
import LogIn from "../Login";
import logo from "../../../images/icons/logo.png";
import firebase from "../../../service/firebase";


const Layout = ({ children }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [login, setLogin] = useState(false);

  // state xử lý popup menu
  const [showCart, setShowCart] = useState(false);
  const [showLove, setShowLove] = useState(false);
  const [showUser, setShowUser] = useState(false);

  // gọi data redux cart
  const dataCart = useSelector((state) => state.cart);

  // gọi data login
  const [userSucsecss, setUserSucsecss] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserSucsecss(user);
    });
  }, []);

  // xử lý click
  const onClickCloseLove = () => {
    setShowLove(!showLove);
    setShowCart(false);
  };
  const onClickCloseCart = () => {
    setShowLove(false);
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
          className={`${sticky ? "sticky" : ""} myHeader`}
        >
          <div className="container">
            <div className="menu row">
              <div className="menuLeft  col-8 col-md-10  col-xl-9  ">
                <button
                  className={`burger d-block d-md-none`}
                  onClick={() => showMenuMobile(true)}
                >
                  <BiMenu style={{ fontSize: "30px" }} />
                </button>
                <a href="/" className="menuLeft_logo">
                  <img src={logo} alt="logo" /> <h1>TrisApple</h1>
                </a>
                <div className=" d-none d-md-block col-8 ">
                  <div className=" d-flex">
                    <a href="#action1" className="menuLeft_title">
                      Trang Chủ
                    </a>

                    <div className="menuLeft_titleDropdown">
                      <NavDropdown title="Sản Phẩm" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Iphone
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Apple Watch
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          MacBook
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Linh Kiện
                        </NavDropdown.Item>
                      </NavDropdown>
                      <FaChevronDown />
                    </div>
                    {/* <a className="menuLeft_title" href="#action2">
                      About Us
                    </a> */}
                    <a className="menuLeft_title" href="#action2">
                      Bảo Hành
                    </a>
                    <a className="menuLeft_title" href="#action2">
                      Liên Hệ
                    </a>
                  </div>
                </div>
              </div>

              <div className="menuRight col-4 col-md-2  col-xl-3">
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
                  onClick={() => showMenuMobile(false)}
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
                      <a href="#">
                        <i style={{ background: "#3b5998" }}>
                          <FaFacebookF />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i style={{ background: "rgb(228 14 14)" }}>
                          <FaYoutube />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
      </div>
      {!userSucsecss && (
        <LogIn show={login} handleClose={() => setLogin(false)} />
      )}
    </>
  );
};
export default Layout;
