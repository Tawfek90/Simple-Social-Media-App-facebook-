import React from "react";
import { users } from "../../dummydata";

export default function Tagreeb() {
  return (
    <>
      <div className="image">
        <img src={users[0].pic} alt="" />
      </div>
    </>
  );
}

{
  posts.map((p) => <Post key={p.id} item={p} />);
}
