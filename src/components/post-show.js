import "./post-show.css";
import React from "react";
import Comments from "./comments";

export const PostShow = (post) => {
  const { content, imageUrl, comments } = post;
  // console.log("COMMENTS: ", comments);

  return (
    <div className="card post">
      <div className="card-image">
        <img alt="img" src={imageUrl} />
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-action"></div>
      <Comments comments={comments} />
    </div>
  );
};
