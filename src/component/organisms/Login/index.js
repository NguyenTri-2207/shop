import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { RiCloseCircleFill } from "react-icons/ri";
import GoogleLogin from "react-google-login";
import { Context } from "../../../redux/store";

function Register({ handleClose, show, handleShow }) {
  const [name, setName] = useState({
    name: "",
    pass: "",
  });
  const handleNameChange = (e) => {
    setName({ ...name, name: e.target.value });
  };
  const handleNameChange1 = (e) => {
    setName({ ...name, pass: e.target.value });
  };
  const handleSubmit = () => {
    console.log("1");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Đăng Ký</Modal.Title>
          <Button variant="tran" onClick={handleClose}>
            <RiCloseCircleFill />
          </Button>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                onChange={handleNameChange}
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                onChange={handleNameChange1}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control type="confirm_password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Đăng Ký
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
export default function LogIn({ handleClose, show, handleShow }) {
  const [loginStatus, setLoginStatus] = useState(false);

  const [url, setUrl] = useState("");
  const { email, name, setEmail, setName } = useContext(Context);
  const handleNameChange = (e) => {
    setName({ ...name, name: e.target.value });
  };
  const handleNameChange1 = (e) => {
    setName({ ...name, pass: e.target.value });
  };
  const handleRegister = () => {
    <Register />;
  };
  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  return (
    <>
      {!loginStatus && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Đăng Nhập</Modal.Title>
            <Button variant="tran" onClick={handleClose}>
              <RiCloseCircleFill />
            </Button>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control
                  onChange={handleNameChange}
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  onChange={handleNameChange1}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Footer>
                <a onClick={handleRegister}>Đăng ký</a>
                <Button
                  variant="primary"
                  type="submit"
                  //  onClick={handleSubmit}
                >
                  Đăng Nhập
                </Button>
              </Modal.Footer>
              {!loginStatus && (
                <GoogleLogin
                  clientId="52992599164-mrchd11p1oprn1ef1cn5e3qu510a4h6t.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              )}
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
}
