import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/AuthContext";
import NavBarContainer from "./Styles";

const NavBar = () => {
  const { authenticated, handleLogout } = useContext(Context);

  return (
    <NavBarContainer className="navbar navbar-expand-lg  navbar-dark bg-dark nv">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          AppBooks
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
              <li className="nav-item">
                <button className="btn btn-info" onClick={handleLogout}>
                  Sair
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
