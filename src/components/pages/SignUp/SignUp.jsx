import React, { useEffect, useState } from "react";
import { Context } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { handleSignUp } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "AppBooks | Criar conta";
  }, []);

  return (
    <div className="container" style={{ paddingTop: "90px" }}>
      <p className="fs-1 mt-5">Crie sua conta hoje: </p>
      <hr />
      <div className="card mt-5">
        <div className="card-body">
          <form
            onSubmit={(event) => handleSignUp(event, username, email, password)}
          >
            <label htmlFor="username">Nome de Usuário: </label>
            <input
              type="text"
              placeholder="Nome de usuário"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              className="form-control mt-3"
            />
            <label htmlFor="email" className="mt-2">
              Email:{" "}
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="form-control mt-3"
            />
            <label htmlFor="password" className="mt-2">
              Senha:{" "}
            </label>
            <input
              type="password"
              placeholder="Senha"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="form-control mt-3"
            />
            <button type="submit" className="btn btn-success  mt-3">
              Registrar
            </button>
            <ToastContainer />
          </form>
          <div className="mt-4">
            <Link to="/signin">Já tenho uma conta.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
