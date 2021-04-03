import styled from "styled-components";

import { TextField, Button } from "@material-ui/core/";

export const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 32px;

  color: #333333;
`;

export const H3 = styled.h3`
  align-self: flex-start;
  margin: 0;
  margin-bottom: 11px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #212121;
`;

export const Formu = styled.form`
  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
  margin: 0;
`;

export const StyledTextField = styled(TextField)`
  border: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
  width: 335px;
`;

export const DivForm = styled.div`
  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
  width: 335px;
  margin-top: 10vh;
`;

export const DivInput = styled.div`
  margin-bottom: 25px;
`;

export const ButtonForm = styled(Button)`
  width: 95px;
  height: 36px;
`;

export const DivButton = styled.div`
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-around;
`;
