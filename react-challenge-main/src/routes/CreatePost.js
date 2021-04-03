import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";

import { createPost } from "../services/posts";

const CreatePost = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await createPost(data); //data tinha (data)
      toast.success("Post criado com sucesso!!");
      history.push("/");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        titulo="Criar uma nova publicação"
        primary="Título"
        secondary="Cancelar"
      />
    </div>
  );
};

export default CreatePost;
