import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const { data: comments } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(comments);
    };
    getComments();
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
