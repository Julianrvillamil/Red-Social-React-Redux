import "./post-show.css";
import React from "react";
import { CommentList } from "./comment-list";

export const PostShow = (post) => {
  const { content, imageUrl, comments } = post;
  // console.log("POST: ", post);
  //console.log("STATE: ", counter);

  return (
    <div className="card post">
      <div className="card-image">
        <img alt="img" src={imageUrl} />
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-action">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};
