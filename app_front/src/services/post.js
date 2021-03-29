import axios from "axios";

export const createPos = (objeto) =>
  axios.post(`https://jsonplaceholder.typicode.com/posts`, objeto);
