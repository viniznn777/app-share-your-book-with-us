import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { authenticated } = useContext(Context);

  return (
    <div className="container">
      <div
        className="p-5 rounded-lg m-3 mt-5"
        style={{ background: "#1B1F23" }}
      >
        <h1 className="display-4 text-light">
          Explore o Universo das Recomendações de Livros!
        </h1>
        <p className="lead text-light">
          Este é um BLOG simples, criado com Node.js + Express + MongoDB +
          React.JS.
        </p>
        <hr className="my-4 text-light" />
        <p className="text-light">
          Aqui você poderá encontrar as últimas recomendações de livros feitas
          por entusiastas como você. Navegue pelas resenhas detalhadas, descubra
          novas obras literárias e compartilhe suas próprias recomendações com a
          comunidade de amantes de livros. Seja parte desta jornada literária e
          inspire-se para sua próxima leitura!
        </p>
        {authenticated ? (
          <Link
            className="btn btn-primary btn-lg"
            to="/posts/new"
            role="button"
          >
            Recomendar AGORA!
          </Link>
        ) : (
          <Link className="btn btn-primary btn-lg" to="/signup" role="button">
            Crie sua conta e recomende também
          </Link>
        )}
      </div>
      <hr />
      <div className="container-text text-light">
        <h2>Postagens Recentes: </h2>
      </div>
      <hr />
    </div>
  );
};

export default Header;
