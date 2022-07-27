import React from "react";
import "./register.css";

export default function Register() {
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h4>TawfekSocial</h4>
            <p>connect with friends and the world around you on tawfekSocial</p>
          </div>
          <div className="loginRight">
            <div className="loginRightBox">
              <input type="text" placeholder="Username" />
              <input type="Email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Confirm Password" />
              <button>sign up</button>

              <button>Log into account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
