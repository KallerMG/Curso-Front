import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { getPostsList, deletePost } from "../services/posts";

import "../styles/style.css";

const ListPosts = () => {
  const history = useHistory();
  const [post, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      toast.success("Post deletado com sucesso!!");
    } catch {
      toast.error("Ooops!! Houve um problema ao deletar o post.");
    } finally {
      setOpen(false);
    }
  };

  const handleOpenModalDelete = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  useEffect(() => {
    const handleGetPosts = async () => {
      let response = await getPostsList();
      setPosts(response.data);
      toast.success("Listagem de posts foi carregada com sucesso!!");
    };

    handleGetPosts();
  }, []);

  const handleEditPost = (props) => {
    /* history.push({ pathname: "/edit", postData: props }); */
    history.push({
      pathname: "/edit",
      postData: { props },
    });
  };

  return (
    <>
      <div className="card">
        {post.map((item, idx) => (
          <div className="card-item" key={item.id}>
            <div>
              <p className="title">{item.title}</p>
              <p className="text">{item.body}</p>
            </div>
            <div>
              <button
                className="info"
                onClick={() => {
                  handleEditPost(item);
                }}
              >
                Editar Post
              </button>
              <button
                className="error"
                onClick={() => handleOpenModalDelete(item)}
              >
                Excluir Post
              </button>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className="modal">
          <p>Realmente deseja excluir essa postagem?</p>
          <div>
            <p>{selectedItem.title}</p>
            <p>{selectedItem.body}</p>
            {/* retirada para teste */}
          </div>
          <div className="m-top-25">
            <button
              className="error"
              onClick={() => handleDelete(selectedItem.id)}
            >
              Excluir
            </button>
            <button className="cancel" onClick={() => setOpen(false)}>
              cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListPosts;
