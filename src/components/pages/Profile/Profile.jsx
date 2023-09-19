import React, { useEffect } from "react";
import ContainerProfile from "./Styles";
import { Context } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { nameUser } = useContext(Context);

  useEffect(() => {
    document.title = "AppBooks | Meu Perfil";
  });

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
      </div>
    </ContainerProfile>
  );
};

export default Profile;
