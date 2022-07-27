import axios from "axios";
import React, { useEffect, useState } from "react";
import { users } from "../../dummydata";
import * as timeago from "timeago.js";
import { Link } from "react-router-dom";

import "./Post.css";

export default function Post({ post }) {
  /* const x = users.filter((u) => u.id == post.id);
  console.log(x[0].username);
  يوم كامل 24 ساعه علشان الكود ده يشتغل معايا يخربيت ام الفلتر 

  */
  const [count, setCount] = useState(0);
  const [isliked, setisliked] = useState(false);
  const [posts, setPosts] = useState([]);
  const increase = () => {
    setCount((count) => (isliked ? count - 1 : count + 1));
    setisliked(!isliked);
  };

  return (
    <>
      <div className="post">
        <div className="post_Wrapper">
          <div className="post-top">
            <div className="post-top-left">
              <Link
                to={`/profile/${
                  users.filter((u) => u.id == post.id)[0].username
                }`}
              >
                <img
                  src={
                    users.filter((u) => u.id == post.id)[0].pic ||
                    "/assets/noAvatar.png"
                  }
                  alt="sorry"
                  onClick={(e) => console.log(e.target)}
                />
              </Link>

              <p className="name">
                {users.filter((u) => u.id == post.id)[0].username}
              </p>
              <span className="time">{timeago.format()} </span>
            </div>
            <div className="post-top-right">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="post-center">
            <p className="mind"> {post.desc}</p>
            <img src={post.photo} alt="sorry" />
          </div>
          <div className="post-bottom">
            <div className="post-bottom-left">
              <img src="/img/like.png" alt="" onClick={increase} />
              <img src="/img/heart.jpg" alt="" onClick={increase} />
              <span className="people">{count + post.like} people like it</span>
            </div>
            <div className="post-bottom-right">
              <span className="comments">{post.comment} comment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
