import React from "react";
import Share from "../Share/Share";
import Post from "../posts/Post";
import "./Feed.css";
import { posts } from "../../dummydata";
import { users } from "../../dummydata";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.map((k) => (
          <Post key={k.id} post={k} />
        ))}
      </div>
    </div>
  );
}
