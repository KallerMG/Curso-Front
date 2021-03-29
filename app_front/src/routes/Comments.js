import { useEffect, useState } from "react";
import Comment from "../components/Comment";

import { getComments } from "../services/comments";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data: comments } = await getComments();
    setComments(comments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comentarios vão ser aqui</h1>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            email={comment.email}
            name={comment.name}
            body={comment.body}
          />
        );
      })}
    </div>
  );
};

export default Comments;
