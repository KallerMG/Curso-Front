import { useForm } from "react-hook-form";

import { createPos } from "../services/post";
import { toast } from "react-toastify";

const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const { status: statusPosts } = await createPos(data);
      if (statusPosts === 201) {
        toast.success("O Post foi Criado com sucesso");
      } else {
        toast.error("Erro na criação");
      }
    } catch (error) {
      console.log(error);
      toast.error("Opaa, Algo dou errado! ");
    }
  };

  return (
    <div>
      <h2>Fomulario para o desafio</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Usuário</label>
        <br />
        <input type="number" name="userId" ref={register} />
        <br />
        <label>Titulo</label>
        <br />
        <input type="text" name="title" ref={register} />
        <br />
        <label>Descrição</label>
        <br />
        <input type="text" name="body" ref={register} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
