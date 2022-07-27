import React from "react";
import "./Tobar.css";
import { Link } from "react-router-dom";

export default function Tobar() {
  return (
    <>
      <div className="tobar_container">
        <div className="left">
          <div className="logo">
            <Link to={"/"} style={{ textDecoration: "none", color: "#FFF" }}>
              <span>Myfacebook</span>
            </Link>
          </div>
        </div>

        <div className="center">
          <span className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="search" placeholder="search for friend,post or video" />
        </div>

        <div className="right">
          <div className="first">
            <span className="homepage">homepage</span>
            <span className="timeline">timeline</span>
          </div>

          <div className="second">
            <div className="p1">
              <i className="fa-solid fa-user">
                <div className="number-container">
                  <span>1</span>
                </div>
              </i>
            </div>

            <div className="p2">
              <i className="fa-solid fa-message">
                <div className="number-container">
                  <span>2</span>
                </div>
              </i>
            </div>

            <div className="p3">
              <i className="fa-solid fa-bell">
                <div className="number-container">
                  <span>1</span>
                </div>
              </i>
            </div>
          </div>

          <div className="third">
            <Link to={"/profile/TawfekElhadary"}>
              <img src="/img/employee-3.jpg" alt="ff" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
