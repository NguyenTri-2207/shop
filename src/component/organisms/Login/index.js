import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { RiCloseCircleFill } from "react-icons/ri";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/action/user";
import "./index.scss";
function Register({ handleClose }) {
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
    // console.log("1");
  };
  return (
    <>
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
      </Form>
    </>
  );
}
export default function LogIn({ handleClose, show, handleShow }) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [register, setRegister] = useState(false);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (e) => {
    setName({ ...name, name: e.target.value });
  };
  const handleNameChange1 = (e) => {
    setName({ ...name, pass: e.target.value });
  };
  const handleRegister = () => {
    setRegister(true);
  };
  const handleLogIn = () => {
    setRegister(false);
  };
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
    const action = addUser(response.profileObj);
    dispatch(action);
  };
  // const logout = () => {
  //   setLoginStatus(false);
  // };
  return (
    <>
      {!loginStatus && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          {register ? (
            <Register />
          ) : (
            <div>
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
              </Form>
            </div>
          )}
          <Modal.Footer>
            <Modal.Footer>
              <Button onClick={handleRegister}>Đăng ký</Button>
              <Button variant="primary" type="submit" onClick={handleLogIn}>
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
        </Modal>
      )}
    </>
  );
}
