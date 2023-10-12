import React, { useContext } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { dataFormated } from "../../../../../utilities/dataFormated";
import { deleteUserAdmin } from "./deleteUserAdmin";
import { becomeAdmin, removeAdmin } from "./becomeAdminOrRemoveAdmin";
import { Context } from "../../../../../contexts/AuthContext";
import { Link } from "react-router-dom";

const CardUser = ({ username, email, password, idUser, date, adm }) => {
  const { id } = useContext(Context);

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p className="fs-5">
            Nome de usuário: <span className="fw-bold">{username}</span>
            &nbsp;
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${username}&size=40&radius=50`}
              alt={username}
              draggable={false}
            />
          </p>
          <p className="fs-5">
            Email: <span className="fw-bold">{email}</span>
          </p>
          <p className="fs-5">
            Senha (HASH): <span className="fw-bold">{password}</span>
          </p>
          <p className="fs-5">
            ID: <span className="fw-bold">{idUser}</span>
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
          {idUser === id ? (
            <div>
              <Link to="/my-profile">
                <button className="btn btn-primary">Meu perfil</button>
              </Link>
            </div>
          ) : (
            <>
              <div className="container-buttons">
                {JSON.stringify(adm) === "false" ? (
                  <button
                    className="btn btn-success"
                    onClick={() => becomeAdmin(idUser)}
                  >
                    Tornar Admin <MdOutlineAdminPanelSettings />
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => removeAdmin(idUser)}
                  >
                    Tornar Usuário Padrão <BiUserCircle />
                  </button>
                )}

                <button
                  className="btn btn-danger"
                  onClick={() => deleteUserAdmin(idUser)}
                >
                  Deletar <MdDeleteForever />
                </button>
              </div>
              <small>
                <span className="fw-bold">Nota: </span>
                <p className="text-danger">
                  Ao deletar um usuário, também deletará todas as recomendações
                  feitas por ele.
                </p>
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardUser;
