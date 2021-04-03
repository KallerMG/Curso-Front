import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {
  H3,
  H1,
  DivForm,
  StyledTextField,
  DivInput,
  Formu,
  ButtonForm,
  DivButton,
} from "../styles/form";

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
    <DivForm>
      <H1>{titulo}</H1>
      <Formu onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="hidden"
          inputProps={{ ref: register, name: "id", value: id }}
        />
        <DivInput>
          <H3>{primary}</H3>
          <StyledTextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            multiline
            defaultValue={title}
            inputProps={{ ref: register, name: "title" }}
          />
        </DivInput>
        <DivInput>
          <H3>{secondary}</H3>
          <StyledTextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            multiline
            defaultValue={body}
            inputProps={{ ref: register, name: "body" }}
          />
        </DivInput>
        <DivButton>
          <ButtonForm type="submit" variant="contained" color="primary">
            {b}
          </ButtonForm>
          <Link to="/">
            <ButtonForm variant="contained">Cancelar</ButtonForm>
          </Link>
        </DivButton>
      </Formu>
    </DivForm>
  );
};

export default Form;
