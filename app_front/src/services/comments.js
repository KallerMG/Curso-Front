import axios from "axios";

export const getComments = () =>
  axios.get("https://jsonplaceholder.typicode.com/comments");
