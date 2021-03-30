import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../styles/style.css";

const Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} name="title" placeholder="Título" />
      <input ref={register} name="body" placeholder="Descrição" />
      <div className="m-top-25">
        <button type="submit" className="info">
          Criar
        </button>
        <Link to="/">
          <button type="button" className="cancel">
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
