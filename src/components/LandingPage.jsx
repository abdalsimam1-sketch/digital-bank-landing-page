import React from "react";
import { Navbar } from "./Navbar";
import phonePic from "../assets/images/image-mockups.png";
import api from "../assets/images/icon-api.svg";

import budget from "../assets/images/icon-budgeting.svg";
import online from "../assets/images/icon-online.svg";
import boarding from "../assets/images/icon-onboarding.svg";
import currency from "../assets/images/image-currency.jpg";
import planes from "../assets/images/image-plane.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import confetti from "../assets/images/image-confetti.jpg";

export const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section className="top-section">
        <div
          style={{ border: "1px solid black" }}
          className="d-flex  flex-column flex-md-row gap-2 p-5"
        >
          {" "}
          <div
            style={{ border: "1px solid black" }}
            className="top-left p-5 order-2 order-md-1 shadow d-flex flex-column  text-center "
          >
            <h2>Next generation </h2>
            <h2>digital banking</h2>
            <p className="text-muted">
              {" "}
              take your financial life online. Your Digitalbank account with be
              a one-stop-shop for spending,saving,budgeting,investing and much
              more
            </p>
            <button className="btn btn-success  rounded-pill d-md-none">
              Request Invite
            </button>
          </div>
          <div
            style={{ border: "1px solid black" }}
            className="top-right p-5 order-1 order-md-2 shadow"
          >
            <img src={phonePic} alt="" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="middle-section p-5">
        <div className="d-flex flex-column gap-4 ">
          <div style={{ border: "1px solid black" }} className="p-5 col-md-8">
            {" "}
            <h2>Why choose Digitalbank?</h2>
            <p className="text-muted">
              We leverage Open Banking to turn your bank account into your
              financial hub.Control your finance like never before{" "}
            </p>
          </div>

          <div className=" d-flex flex-column flex-md-row justify-content-around gap-md-4">
            <div className="card text-center p-4">
              <img
                src={online}
                alt=""
                className="mx-md-auto"
                style={{ width: "4rem" }}
              />
              <h2 className="card-title">Online Banking</h2>
              <p className="card-text text-muted">
                Our modern web and mobile applications allow you to keep track
                of your finances whereever you are in the world.
              </p>
            </div>
            <div className="card p-4  text-center">
              <img
                src={budget}
                alt=""
                style={{ width: "4rem" }}
                className="mx-md-auto"
              />
              <h2 className="card-title">Simple Budgeting</h2>
              <p className="card-text text-muted">
                See exactly where your money goes each month.Recieve
                notifications when youre close to hitting your limts
              </p>
            </div>
            <div className="card p-4 text-center">
              <img
                src={boarding}
                alt=""
                style={{ width: "4rem" }}
                className="mx-md-auto"
              />
              <h2 className="card-title">Fast Onboarding</h2>
              <p className="card-text text-muted">
                We don't do branches.Open your account in minutes and start
                taking control of your finances rigth away
              </p>
            </div>
            <div className="card p-4 text-center">
              <img
                src={api}
                alt=""
                className="mx-md-auto"
                style={{ width: "4rem" }}
              />
              <h2 className="card-title">Open API</h2>
              <p className="card-text text-muted">
                Manage your savings,investments,oensions and much more from one
                account. Tracking you money has never been easier
              </p>
            </div>
          </div>
        </div>
      </section>
      <article className="bottom-section">
        <h2>Latest Articles</h2>
        <div className="card">
          <img src={currency} alt="" />
          <footer className="card-footer"></footer>
        </div>
        <div className="card">
          <img src={restaurant} alt="" />
          <footer className="card-footer"></footer>
        </div>
        <div className="card">
          <img src={planes} alt="" />
          <footer className="card-footer"></footer>
        </div>
        <div className="card">
          <img src={confetti} alt="" />
          <footer className="card-footer"></footer>
        </div>
      </article>
      <footer></footer>
    </>
  );
};
