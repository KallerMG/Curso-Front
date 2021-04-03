import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../components/Form";

import { putPost } from "../services/posts";

const CreatePost = () => {
  const location = useLocation();
  const history = useHistory();

  const importPost = () => {
    try {
      const post = location.postData;
      if (post.props.id !== undefined) {
        return post;
      } else {
        Error("Sem post para editar");
      }
    } catch (error) {
      console.log("erro");
    }
  };

  const onSubmit = async (data) => {
    try {
      await putPost(data);
      toast.success("Post editado com sucesso!!");
      history.push("/");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };
  const postData = importPost();
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        titulo="Editar uma nova publicação"
        primary="Título"
        secondary="Descrição"
        b="Salvar"
        title={postData.props.title}
        body={postData.props.body}
        id={postData.props.id}
      />
    </div>
  );
};

export default CreatePost;
