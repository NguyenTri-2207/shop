import React from 'react'
import './index.scss'
const Footer = () => {
  return (

    <footer className=" text-center text-white" style={{ backgroundColor: '#535050' }}>
      {/* Grid container */}
      <div className="container p-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
          {/* Twitter */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
          {/* Google */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google" /></a>
          {/* Instagram */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram" /></a>
          {/* Linkedin */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
          {/* Github */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github" /></a>
        </section>
        {/* Section: Social media */}
        {/* Section: Text */}
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta,
            aliquam sequi voluptate quas.
          </p>
        </section>
        {/* Section: Text */}
        {/* Section: Links */}
        <section className>
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </section>
        {/* Section: Links */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
export default Footer;