import React from "react";
import Input from "../../../utilities/Input";
import { Context } from "../../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const FormSignIn = () => {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "ShareBooks | Entrar";
  }, []);

  return (
    <div className="card mt-5">
      <div className="card-body">
        <form onSubmit={(event) => handleLogin(event, email, password)}>
          <Input
            type="email"
            nameInput="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label={true}
            labelText="Email: "
            placeholder="Email"
            classLabel="mt-2 fw-bold text-light"
            className="form-control mt-3"
            required={false}
          />
          <Input
            type="password"
            nameInput="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label={true}
            labelText="Senha: "
            placeholder="Senha"
            classLabel="mt-2 fw-bold text-light"
            className="form-control mt-3"
            required={false}
          />

          <button type="submit" className="btn btn-primary  mt-3">
            Login
          </button>
        </form>
        <div className="mt-4">
          <Link to="/signup" className="text-light">
            Não tenho uma conta.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
