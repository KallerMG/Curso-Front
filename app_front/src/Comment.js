const Comment = ({ dados }) => {
  return (
    <div>
      <h3>{dados.email}</h3>
      <p>{dados.name}</p>
      <p>{dados.body}</p>
    </div>
  );
};

export default Comment;
