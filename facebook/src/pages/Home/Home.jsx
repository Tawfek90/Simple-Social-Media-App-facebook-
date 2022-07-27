import React from "react";
import Tobar from "../../components/Tobabr/Tobar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <Tobar />
      <div className="Home_container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
