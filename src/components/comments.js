const Comments = ({ comments }) => {
  console.log(comments);
  const listItems = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  console.log(comments);
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
};

export default Comments;
