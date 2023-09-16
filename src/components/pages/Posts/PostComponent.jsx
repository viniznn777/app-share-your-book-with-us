import React from "react";
import ContainerPost from "./Styles";

const PostComponent = ({
  title,
  description,
  img,
  synopsis,
  author,
  category,
  slug,
  date,
}) => {
  return (
    <ContainerPost className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p className="fs-1 fw-bold">{title}</p>
          <hr />
          <p className="fs-5">{description}</p>
          <div className="containerImg">
            <figure className="containerImg mt-4">
              <img src={img} alt="" className="img-fluid" draggable="false" />
              <figcaption className="synopsis mt-5">
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
            {date}
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
