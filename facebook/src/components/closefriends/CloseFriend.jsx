import React from "react";
import "./closefriend.css";

export default function CloseFriend({ user }) {
  return (
    <>
      <li className="friendsListItem">
        <img src={user.pic} alt="error" />
        <span className="name">{user.username}</span>
      </li>
    </>
  );
}
