import React from "react";
import "./login.css";

export default function Login() {
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
              <input type="Email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>log in</button>
              <span>forget password?</span>
              <button>create a new account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
