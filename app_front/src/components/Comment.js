const Comment = ({ email, body, name }) => {
  return (
    <div>
      <h3>{email}</h3>
      <p>{name}</p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
