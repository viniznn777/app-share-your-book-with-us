import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { authenticated } = useContext(Context);

  return (
    <div className="container">
      <div className="p-5 rounded-lg m-3" style={{ background: "#E9ECEF" }}>
        <h1 className="display-4">
          Explore o Universo das Recomendações de Livros!
        </h1>
        <p className="lead">
          Este é um BLOG simples, criado com Node.js + Express + MongoDB +
          React.JS.
        </p>
        <hr className="my-4" />
        <p>
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
      <h2>Postagens Recentes: </h2>
      <hr />
    </div>
  );
};

export default Header;
