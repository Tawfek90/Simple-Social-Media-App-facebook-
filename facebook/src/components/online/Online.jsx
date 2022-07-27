import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <>
      <li className="friends-list-item" key={user.id}>
        <img className="portfile-image" src={user.pic} alt="" />
        <span className="online"></span>
        <span className="item-name">{user.username}</span>
      </li>
    </>
  );
}
