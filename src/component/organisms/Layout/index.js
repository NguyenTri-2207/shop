import React, { useState, useContext } from "react";
import "./index.scss";
import logo from "../../../images/logo.png";
import { BiUser, BiMenu } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Cart from "../../molecules/Cart";
import Love from "../../molecules/Love";
import { Context } from "../../../redux/store";
import {
  Navbar,
  Badge,
  Offcanvas,
  Nav,
  Accordion,
  NavDropdown,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import LogIn from "../Login";
const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLove, setShowLove] = useState(false);
  const { email, name, setEmail, setName } = useContext(Context);

  const onClickCloseLove = () => {
    setShowLove(!showLove);
    setShowCart(false);
  };
  const onClickCloseCart = () => {
    setShowLove(false);
    setShowCart(!showCart);
  };
  return (
    <>
      <div>
        <Navbar bg="light" expanded={show} className="position-relative">
          <div className="container">
            <div className="menu row">
              <div className="menuLeft  col-8 col-md-9 ">
                <button
                  className={`burger d-block d-md-none`}
                  onClick={() => setShow(true)}
                >
                  <BiMenu style={{ fontSize: "30px" }} />
                </button>
                <Navbar.Brand href="/">
                  <img width={100} src={logo} alt="logo" />
                </Navbar.Brand>
                <div className=" d-none d-md-block col-8 ">
                  <div className=" d-flex">
                    <a href="#action1" className="menuLeft_title">
                      Home
                    </a>
                    <a className="menuLeft_title" href="#action2">
                      Shop
                    </a>
                    <div className="menuLeft_titleDropdown">
                      <NavDropdown title="Product" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Men's clothes
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Girl's clothes
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Kid's clothes
                        </NavDropdown.Item>
                      </NavDropdown>
                      <FaChevronDown />
                    </div>
                    {/* <a className="menuLeft_title" href="#action2">
                      About Us
                    </a> */}
                    <a className="menuLeft_title" href="#action2">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="menuRight col-4 col-md-3">
                <Button
                  onClick={() => setLogin(true)}
                  className="btnheart"
                  variant="none pb-0 px-1 mt-0"
                >
                  <BiUser style={{ fontSize: "20px" }} />
                </Button>
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
                      0
                    </Badge>
                  </Button>
                  {showCart && <Cart ClickClose={() => setShowCart(false)} />}
                </div>
              </div>
            </div>
          </div>
          {show && (
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
                  className={`burger ${show ? "toggle" : ""}`}
                  onClick={() => setShow(false)}
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
      <LogIn show={login} handleClose={() => setLogin(false)} />
      {showLove && <Love ClickClose={() => setShowLove(false)} />}
    </>
  );
};
export default Layout;
