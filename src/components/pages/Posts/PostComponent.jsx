import React from "react";
import ContainerPost from "./Styles";
import { Link } from "react-router-dom";
import DeletePost from "./DeletePost";
import { dataFormated } from "../../utilities/dataFormated";
import { FaRegEdit } from "react-icons/fa";

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
  Edit = false,
  Delete = false,
  idRecommendation,
  idUser,
}) => {
  return (
    <ContainerPost className="container ">
      <div className="card mt-4">
        <div className="card-body">
          <div className="title">
            <p className="fs-1 fw-bold text-light">{title}</p>
            <div className="container-buttons">
              {Edit ? (
                <div className="container-buttons">
                  <Link
                    to={`http://localhost:3000/posts/edit/${idRecommendation}/${idUser}`}
                  >
                    <button className="btn btn-secondary">
                      <FaRegEdit />
                    </button>
                  </Link>
                </div>
              ) : null}
              {Delete ? (
                <div className="container-buttons">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => DeletePost(idRecommendation)}
                  >
                    Deletar
                  </button>
                </div>
              ) : null}
            </div>
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
            {dataFormated(date)}
          </small>
        </div>
      </div>
      <hr />
      <hr />
      <hr />
    </ContainerPost>
  );
};

export default PostComponent;
