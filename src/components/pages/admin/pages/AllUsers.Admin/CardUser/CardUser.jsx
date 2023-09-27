import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { dataFormated } from "../../../../../utilities/dataFormated";

const CardUser = ({ username, email, password, id, date, adm }) => {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p className="fs-5">
            Nome de usuário: <span className="fw-bold">{username}</span>
          </p>
          <p className="fs-5">
            Email: <span className="fw-bold">{email}</span>
          </p>
          <p className="fs-5">
            Senha (HASH): <span className="fw-bold">{password}</span>
          </p>
          <p className="fs-5">
            ID: <span className="fw-bold">{id}</span>
          </p>
          <p className="fs-5">
            Data de registro:{" "}
            <span className="fw-bold">{dataFormated(date)}</span>
          </p>
          <p className="fs-5">
            Administrador:{" "}
            {JSON.stringify(adm) === "true" ? (
              <span className="fw-bold text-success">
                {JSON.stringify(adm)}
              </span>
            ) : (
              <span className="fw-bold text-danger">{JSON.stringify(adm)}</span>
            )}
          </p>
          <div className="container-buttons">
            <button className="btn btn-success">
              Tornar Admin <MdOutlineAdminPanelSettings />
            </button>
            <button className="btn btn-danger">
              Deletar <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
