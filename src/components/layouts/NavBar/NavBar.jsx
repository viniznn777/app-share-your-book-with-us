import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/AuthContext";
import NavBarContainer from "./Styles";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import Logo from "../../../images/pilha-de-livros.png";

const NavBar = () => {
  const { authenticated, handleLogout, nameUser } = useContext(Context);

  return (
    <NavBarContainer className="navbar navbar-expand-lg  navbar-dark bg-dark nv">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" draggable="false">
          <img src={Logo} alt="Logo AppBooks" draggable="false" />
          &nbsp; AppBooks
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/categories"} className="nav-link">
                Categorias
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/posts/new"} className="nav-link">
                Recomendar
              </Link>
            </li>
            {authenticated ? (
              <div className="container-info-username-button-logout">
                <li className="nav-item">
                  <button className="btn btn-success" onClick={handleLogout}>
                    <MdLogout />
                  </button>
                </li>
                <div className="container-profile">
                  <Link to={"/my-profile"} className="icon username">
                    <p className="username">{nameUser}</p>
                    <p>
                      <CgProfile />
                    </p>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="container-info-username-button-logout">
                <Link to="/signin">
                  <button className="btn btn btn-outline-light">Entrar</button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-primary">Registrar</button>
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
