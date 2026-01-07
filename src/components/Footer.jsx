import React from "react";
import lightLogo from "../assets/images/logo-light.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer d-flex flex-column flex-md-row justify-content-around p-5 text-center gap-2">
        <div className="section1 d-flex flex-column align-items-center gap-2 gap-md-5  ">
          <img src={lightLogo} alt="" />
          <div className="social-links d-flex gap-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-pinterest"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
        <div className="section2 d-flex flex-column gap-2">
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
        <div className="section3 d-flex flex-column gap-2">
          {" "}
          <a href="">Careers</a>
          <a href="">Support</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="section4 d-flex flex-column gap-3">
          <button className="btn btn-success  rounded-pill ">
            Request Invite
          </button>
          <p className="text-muted text-capitalize">
            {" "}
            &copy;Digitalbank.All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
