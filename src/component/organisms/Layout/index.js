import React, { useState } from "react";
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
import {
  Navbar,
  Badge,
  Offcanvas,
  Nav,
  Accordion,
  Button,
} from "react-bootstrap";
import LogIn from "../Login";
const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  console.log(show);
  return (
    <>
      <div>
        <Navbar bg="light" expanded={show} className="d-block d-md-none">
          <div className="menu">
            <div className="menuLeft">
              <button className={`burger`} onClick={() => setShow(true)}>
                <BiMenu style={{ fontSize: "30px" }} />
              </button>
              <Navbar.Brand href="/">
                <img width={100} src={logo} alt="logo" />
              </Navbar.Brand>
            </div>

            <div className="menuRight">
              <Button
                onClick={() => setLogin(true)}
                className="btnheart"
                variant="none pb-0 px-1 mt-0"
              >
                <BiUser style={{ fontSize: "20px" }} />
              </Button>
              <Button
                className="btnheart"
                variant="none d-flex position-relative  pb-0"
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
              <Button
                className="btnheart"
                variant="none d-flex position-relative pb-0"
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
                    className="ps-3 text-dark fw-bold"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontSize: "20px" }}
                    className="ps-3 text-dark fw-bold"
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
                    className="ps-3 text-dark fw-bold"
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontSize: "20px" }}
                    href="#action1"
                    className="ps-3 text-dark fw-bold"
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
    </>
  );
};
export default Layout;
