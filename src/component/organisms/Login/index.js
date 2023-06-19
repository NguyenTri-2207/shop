import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
//icons
import { GrFormClose } from "react-icons/gr";
//styles
import "./index.scss";
//components
import { signInWithGoogle } from "../../../service/firebase";
import logo from "../../../images/icons/logo.png";
import { AiOutlinePhone, AiFillGoogleCircle, AiFillMail } from "react-icons/ai";
export default function LogIn({ handleClose, show, handleShow }) {
  const [showPhone, setShowPhone] = useState(false);
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
            {showPhone ? (
              <Modal.Body className="text-center justify-content-center px-5">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone " />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            ) : (
              <Modal.Body className="text-center justify-content-center py-4">
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control
                      onChange={handleNameChange}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group> */}

                <div
                  onClick={signInWithGoogle}
                  className="SigninButton flex justify-content-center align-items-center mb-3"
                >
                  <AiFillGoogleCircle />
                  <span className="SigninButton_title__30L9p ms-2">
                    Tiếp tục với Google
                  </span>
                </div>
                <div
                  onClick={() => console.log(1)}
                  className=" SigninButton flex justify-content-center align-items-center "
                >
                  <AiFillMail />
                  <span className="SigninButton_title__30L9p ms-2">
                    Tiếp tục với Facebook
                  </span>
                </div>
                <div
                  onClick={() => setShowPhone(true)}
                  className="SigninButton flex justify-content-center align-items-center mb-3"
                >
                  <AiOutlinePhone className="block" />

                  <span className="SigninButton_title__30L9p ms-2">
                    Sử dụng email / số điện thoại
                  </span>
                </div>
              </Modal.Body>
            )}
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
