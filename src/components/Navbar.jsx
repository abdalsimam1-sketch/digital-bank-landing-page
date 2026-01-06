import React from "react";

import logo from "/assests/images/logo-dark.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-around p-3 align-items-center">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="middle d-flex gap-5 ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
        </div>
        <i className="bi bi-list d-flex d-md-none"></i>
        <div className="right">
          <button className="btn btn-success btn-lg rounded-pill">
            Request Invite
          </button>
        </div>
      </nav>
    </>
  );
};
