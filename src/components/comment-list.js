// import { useSelector } from "react-redux";

// const CommentList = ({ comments }) => {
//   //console.log(comments);
//   const post = useSelector((state) => state);
//   const { currentUser } = post;

//   const listItems = comments.map((comment) => (
//     <>
//       <div>
//         <b>{currentUser.name}</b>
//       </div>
//       <li key={comment.id}>{comment.content}</li>
//     </>
//   ));

//   //console.log(comments);
//   console.log("STATE: ", post);
//   return (
//     <div>
//       <ol>{listItems}</ol>
//     </div>
//   );
// };

// export default CommentList;

import React from "react";
export const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return <div key={comment.id}>{comment.content}</div>;
  });
  return <div className="comment-list">{renderedComments}</div>;
};
