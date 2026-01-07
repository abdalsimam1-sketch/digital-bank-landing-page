import React, { useState } from "react";

import logo from "../assets/images/logo-dark.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
  }
  return (
    <>
      <nav className="d-flex justify-content-between p-4 align-items-center justify-content-md-around  ">
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

        <i
          onClick={() => setIsOpen(!isOpen)}
          className={`bi bi-${isOpen ? "x" : "list"} d-flex d-md-none fs-2 btn`}
        ></i>
        <div className="right d-none d-md-inline">
          <button className="btn btn-success  rounded-pill ">
            Request Invite
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="middle d-flex gap-4 flex-column align-items-center d-md-none bg-dark m-3 mt-0">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
        </div>
      )}
    </>
  );
};
