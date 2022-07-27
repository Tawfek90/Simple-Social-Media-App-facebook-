import React from "react";
import "./Share.css";

export default function Share() {
  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="top">
            <img src="/img/employee-3.jpg" alt="" />
            <input type="text" placeholder="What's in your mind Tawfek?" />
          </div>

          <hr className="shareline" />
          <div className="bottom">
            <div className="bottom_obtion">
              <i className="fa-solid fa-images imageIcon"></i>
              <span>photo or video</span>
            </div>
            <div className="bottom_obtion">
              <i className="fa-solid fa-tag tagIcon"></i>
              <span>Tag</span>
            </div>

            <div className="bottom_obtion">
              <i className="fa-solid fa-location-dot locationIcon"></i>
              <span>Location</span>
            </div>

            <div className="bottom_obtion">
              <i className="fa-solid fa-face-grin emojeIcon"></i>
              <span>Feelings</span>
            </div>
            <button>Share</button>
          </div>
        </div>
      </div>
    </>
  );
}
