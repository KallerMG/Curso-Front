import client from "axios";

const api = "https://jsonplaceholder.typicode.com";

export const getPostsList = () => client.get(api + "/posts");

export const createPost = (data) => client.post(api + "/posts", data);

export const getPost = (id) => client.get(api + "/posts/" + id);

export const putPost = (data) =>
  client.put(api + "/posts/" + data.id, data.body);

export const deletePost = (id) => client.delete(api + "/posts/" + id);
