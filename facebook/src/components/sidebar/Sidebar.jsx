import React from "react";
import "./sidebar.css";
import { users } from "../../dummydata";
import CloseFriend from "../closefriends/CloseFriend";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_wrapper">
          <ul className="sidebar_list">
            <li className="sidebarlist_item">
              <i className="fa-solid fa-rss"></i>
              <span>Feed</span>
            </li>

            <li className="sidebarlist_item">
              <i className="fa-solid fa-message"></i>
              <span>Chats</span>
            </li>
            <li className="sidebarlist_item">
              <i className="fa-solid fa-circle-play"></i>
              <span>Videos</span>
            </li>
            <li className="sidebarlist_item">
              <i className="fa-solid fa-user-group"></i>
              <span>Groups</span>
            </li>
            <li className="sidebarlist_item">
              <i className="fa-solid fa-bookmark"></i>
              <span>Bookmarks</span>
            </li>
            <li className="sidebarlist_item">
              <i className="fa-regular fa-circle-question"></i>
              <span>Questions</span>
            </li>
            <li className="sidebarlist_item">
              <i className="fa-regular fa-calendar"></i>
              <span>Jobs</span>
            </li>
            <li className="sidebarlist_item">
              <i className="fa-solid fa-calendar-day"></i>
              <span>Events</span>
            </li>

            <li className="sidebarlist_item">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>Groups</span>
            </li>
          </ul>

          <button className="showmore">Show More</button>
          <hr className="line" />
          <div className="friends_Wrapper">
            <ul className="friendsWrapperList">
              {users.map((u) => (
                <CloseFriend key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
