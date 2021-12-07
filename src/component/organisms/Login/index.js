import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
//icons
import { GrFormClose } from "react-icons/gr";
//styles
import "./index.scss";
//components
import { signInWithGoogle } from "../../../service/firebase";
import logo from "../../../images/icons/logo.png";

export default function LogIn({ handleClose, show, handleShow }) {
  const handleRegister = () => {
    // conso?
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div>
          <Button variant="tran" className="btn_close" onClick={handleClose}>
            <GrFormClose />
          </Button>
          <Modal.Header className="text-center justify-content-center header">
            <Modal.Title>
              {" "}
              <img width={50} height={50} src={logo} alt="logo" />
              <h3 className="mt-2"> Đăng Nhập</h3>
            </Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body className="text-center justify-content-center py-4">
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Enter email"
                  />
                </Form.Group> */}

              <div onClick={() => console.log(1)} className="SigninButton mb-3">
                <img
                  className="SigninButton_icon__23NnF"
                  src="https://fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                  alt="Đăng nhập với personal"
                />
                <span className="SigninButton_title__30L9p">
                  Sử dụng email / số điện thoại
                </span>
              </div>
              <div onClick={signInWithGoogle} className="SigninButton mb-3">
                <img
                  className="SigninButton_icon__23NnF"
                  src="https://fullstack.edu.vn/assets/images/signin/google-18px.svg"
                  alt="Đăng nhập với personal"
                />
                <span className="SigninButton_title__30L9p">
                  Tiếp tục với Google
                </span>
              </div>
              <div onClick={() => console.log(1)} className="SigninButton">
                <img
                  className="SigninButton_icon__23NnF"
                  src="https://fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
                  alt="Đăng nhập với personal"
                />
                <span className="SigninButton_title__30L9p">
                  Tiếp tục với Facebook
                </span>
              </div>
            </Modal.Body>
          </Form>
        </div>

        <Modal.Footer className="text-center justify-content-center Footer">
          <p>
            Bạn chưa có tài khoản?{" "}
            <button className="btn_none" onClick={handleRegister}>
              Đăng ký
            </button>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}
