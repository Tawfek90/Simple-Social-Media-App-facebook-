import React from "react";
import "./Rightbar.css";
import { users } from "../../dummydata";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomerightBar = () => {
    return (
      <>
        <div className="top">
          <img src="/img/gift.jpg" alt="" />
          <span>
            <b>Mohamed Emad </b>and <b>3 other friends </b> have a birthday
            today
          </span>
        </div>

        <div className="center">
          <img src="/img/blue-sea-sunset.jpg" alt="" />
        </div>

        <div className="bottom">
          <div className="friends">
            <p>online friends</p>
            <ul className="friends-list">
              {users.map((u) => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const ProtfolioRightBar = () => {
    const x = users.filter((u) => u.id <= 6);

    return (
      <>
        <div className="information">
          <h4>user information</h4>
          <ul className="userInformationList">
            <li className="userInformationListItem">
              <div className="title">city:</div>
              <span>new york</span>
            </li>
            <li className="userInformationListItem">
              <div className="title">from:</div>
              <span>Madrid</span>
            </li>
            <li className="userInformationListItem">
              <div className="title">Relationship:</div>
              <span>Single</span>
            </li>
          </ul>
        </div>
        <div className="userFriends">
          <h4>user friends</h4>
          <ul className="followersList">
            {x.map((u) => (
              <li key={u.id} className="followersListItem">
                <img src={u.pic} alt="" />
                <p>{u.username}</p>
              </li>
            ))}
            {}
          </ul>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="Rightbar">
        <div className="rightbar-wrapper">
          {profile ? <ProtfolioRightBar /> : <HomerightBar />}
        </div>
      </div>
    </>
  );
}
