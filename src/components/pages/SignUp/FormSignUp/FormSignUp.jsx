import React, { useState } from "react";
import Input from "../../../utilities/Input";
import { Context } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const FormSignUp = () => {
  const { handleSignUp } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card mt-5">
      <div className="card-body">
        <form
          onSubmit={(event) => handleSignUp(event, username, email, password)}
        >
          <Input
            type="text"
            nameInput="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            label={true}
            labelText="Nome de Usuário: "
            placeholder="Nome de usuário"
            classLabel="mt-2 fw-bold"
            className="form-control mt-3"
            required={false}
          />
          <Input
            type="email"
            nameInput="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label={true}
            labelText="Email: "
            placeholder="Email"
            classLabel="mt-2 fw-bold"
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
            classLabel="mt-2 fw-bold"
            className="form-control mt-3"
            required={false}
          />
          <button type="submit" className="btn btn-success  mt-3">
            Registrar
          </button>
        </form>
        <div className="mt-4">
          <Link to="/signin">Já tenho uma conta.</Link>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
