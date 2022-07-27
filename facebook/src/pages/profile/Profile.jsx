import React from "react";
import Tobar from "../../components/Tobabr/Tobar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Tobar />
      <div className="profile">
        <Sidebar />
        <div className="profile-Right">
          <div className="profile-Right-top">
            <div className="portfolioImg">
              <img src="/img/portfolio-1.jpg" alt="" className="coverImg" />
              <img src="/img/employee-3.jpg" alt="" className="portfolioPic" />
            </div>
            <div className="portfolioInfo">
              <h4 className="portfolioName">Tawfek Elhadary</h4>
              <span className="bio"> welcome to my portfolio!</span>
            </div>
          </div>
          <div className="profile-Right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
