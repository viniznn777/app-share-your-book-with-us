import React from "react";
import { Link } from "react-router-dom";
import sendDataForm from "./deleteCategory";

const CategoryCard = ({
  img,
  name,
  description,
  slug,
  id,
  deleteButton = false,
  editButton = false,
}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="container-img">
          <img
            src={img}
            className="card-img-top img-fluid"
            alt={img}
            title={name}
            draggable={false}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/categories/${slug}`} className="link">
            <button className="btn btn-primary">Ver Recomendações</button>
          </Link>
          &nbsp;
          {deleteButton ? (
            <button className="btn btn-danger" onClick={() => sendDataForm(id)}>
              Deletar
            </button>
          ) : null}
          &nbsp;
          {editButton ? (
            <Link to={`/admin/categories/edit/${id}`} className="link">
              <button className="btn btn-success mt-3">Editar</button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
