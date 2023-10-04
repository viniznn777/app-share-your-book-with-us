import React, { useEffect } from "react";
import ContainerProfile from "./Styles";
import { Context } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAdmin } from "../../contexts/IsAdminContext";

const Profile = () => {
  const { nameUser } = useContext(Context);
  const { isAdmin } = useContext(ContextAdmin);

  useEffect(() => {
    document.title = "AppBooks | Meu Perfil";
  }, []);

  return (
    <ContainerProfile className="container">
      <p className="fs-1 mt-3 fw-semibold">Perfil</p>

      <div className="icon-profile">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${nameUser}&radius=50`}
          alt="perfil icon"
          className="mt-4 img-fluid"
          draggable="false"
        />
        <p className="fs-3 fw-bold">{nameUser}</p>
      </div>
      <div className="container-fluid container-links">
        <Link to="/my-recommendations">
          <div className="alert alert-light">Minhas Recomendações</div>
        </Link>
        <Link to="/redefine-password">
          <div className="alert alert-light">Redefinir Senha</div>
        </Link>
        <Link to="/redefine-email">
          <div className="alert alert-light">Redefinir Email</div>
        </Link>
        <Link to="/delete-account">
          <button className="btn btn-outline-danger">
            Deletar minha conta
          </button>
        </Link>
        {isAdmin ? (
          <>
            <div>
              <hr />
              <p className="fs-6 fw-bold text-success">
                Você é um administrador
              </p>
              <hr />
            </div>
            <div className="container-links-adm">
              <Link to="/admin/categories/edit-delete">
                <button className="btn btn-success">
                  Editar/Deletar Categorias
                </button>
              </Link>
              <Link to="/admin/new/categories">
                <button className="btn btn-success">Criar Categoria</button>
              </Link>
              <Link to="/admin/delete/recommendations">
                <button className="btn btn-success">
                  Deletar Recomendações
                </button>
              </Link>
              <Link to="/admin/users">
                <button className="btn btn-success">Gerenciar Usuários</button>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </ContainerProfile>
  );
};

export default Profile;
