import React from "react";
import ContainerPost from "./Styles";
import { Link } from "react-router-dom";
import DeletePost from "./DeletePost";
import { ToastContainer } from "react-toastify";

const PostComponent = ({
  title,
  description,
  img,
  synopsis,
  author,
  category,
  slug,
  date,
  username,
  EditAndDelete = false,
  idRecommendation,
  idUser,
}) => {
  const dataReturned = date;
  const dataFormated = new Date(dataReturned);

  const day = dataFormated.getDate();
  const month = dataFormated.getMonth();
  const year = dataFormated.getFullYear();

  return (
    <ContainerPost className="container ">
      <div className="card mt-4">
        <div className="card-body">
          <div className="title">
            <p className="fs-1 fw-bold">{title}</p>
            {EditAndDelete ? (
              <div className="container-buttons">
                <Link
                  to={`http://localhost:3000/posts/edit/${idRecommendation}/${idUser}`}
                >
                  <button className="btn btn-secondary">
                    Editar Recomendação
                  </button>
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => DeletePost(idRecommendation)}
                >
                  Deletar
                </button>
              </div>
            ) : null}
          </div>
          <hr />
          <div className="container-avatar">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${username}&size=45&radius=50`}
              alt="avatar"
            />
            <p className="fs-6 fw-bold">{username ? `${username} - ` : null}</p>
            <p className="fs-5">{description}</p>
          </div>
          <div className="containerImg">
            <figure className="containerImg mt-4">
              <img src={img} alt="" className="img-fluid" draggable="false" />
              <figcaption
                className="synopsis mt-5"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <small>
                  <span className="fw-bold">Sinopse: </span>
                </small>
                <p className="fs-5">{synopsis}</p>
              </figcaption>
            </figure>
          </div>
          <small>
            <span className="fw-bold">Autor: </span>
            {author}
          </small>
          <br />
          <small>
            <span className="fw-bold">Categoria: </span>
            {category}
          </small>
          <br />
          <small>
            <span className="fw-bold">Slug: </span>
            {slug}
          </small>
          <br />
          <small>
            <span className="fw-bold">Data: </span>
            {`${day}/${month + 1 <= 9 ? "0" + (month + 1) : month + 1}/${year}`}
          </small>
        </div>
        <ToastContainer />
      </div>
      <hr />
      <hr />
      <hr />
    </ContainerPost>
  );
};

export default PostComponent;
