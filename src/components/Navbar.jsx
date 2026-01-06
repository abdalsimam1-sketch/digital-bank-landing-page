import React from "react";

import logo from "../assets/images/logo-dark.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between p-4 align-items-center justify-content-md-around ">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="middle d-flex gap-5 d-none d-md-flex">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
        </div>
        <i className="bi bi-list d-flex d-md-none fs-2 btn"></i>
        <div className="right d-none d-md-inline">
          <button className="btn btn-success  rounded-pill ">
            Request Invite
          </button>
        </div>
      </nav>
    </>
  );
};
