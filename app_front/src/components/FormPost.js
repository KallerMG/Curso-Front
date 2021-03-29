import { useForm } from "react-hook-form";
import { createPos } from "../services/post";
import { toast } from "react-toastify";

const FormPost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createPos(data);
      toast.success("O Post foi Criado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Opaa, Algo dou errado! ");
    }
  };

  return (
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
  );
};

export default FormPost;
