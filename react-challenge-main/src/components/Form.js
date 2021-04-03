import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { H3 } from "../styles/form";

import "../styles/style.css";

const Form = ({
  onSubmit,
  titulo,
  primary,
  secondary,
  title = "",
  body = "",
  id = undefined,
  b = "Criar",
}) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <h1>{titulo}</h1>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <H3>{primary}</H3>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          size="small"
          multiline
          defaultValue={title}
          inputProps={{ ref: register, name: "title" }}
        />
        <H3>{secondary}</H3>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          size="small"
          multiline
          defaultValue={body}
          inputProps={{ ref: register, name: "body" }}
        />
        <TextField
          type="hidden"
          inputProps={{ ref: register, name: "id", value: id }}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            {b}
          </Button>
          <Link to="/">
            <Button variant="contained">Cancelar</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
