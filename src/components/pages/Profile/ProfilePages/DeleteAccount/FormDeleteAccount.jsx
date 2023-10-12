import React, { useState, useEffect, useContext } from "react";
import Input from "../../../../utilities/Input";
import sendDataForm from "./deleteAccountFunction";
import { Context } from "../../../../contexts/AuthContext";
import BackButton from "../../../../utilities/BackButton/BackButton";

const FormDeleteAccount = () => {
  const [password, setPassword] = useState("");
  const { handleLogout } = useContext(Context);
  const [emailInUse, setEmailInUse] = useState("");

  //  Effect para carregar o email registrado do usuário no banco de dados
  useEffect(() => {
    (async () => {
      try {
        const id = localStorage.getItem("username");
        const response = await fetch(
          `http://localhost:8081/return/user/${id}/em`
        );

        if (response.ok) {
          const dataResponse = await response.json();
          setEmailInUse(dataResponse.email);
        }
      } catch (err) {
        setEmailInUse("Não foi possível carregar o email cadastrado!");
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      <p className="fs-1 fw-semibold mt-4">Deletar conta:</p>
      <hr />
      <div className="card">
        <div className="card-body">
          <form method="post" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="emailinuse" className="mt-2 fw-bold text-light">
                Email cadastrado:{" "}
              </label>
              <input
                type="email"
                name="emailinuse"
                id="emailinuse"
                disabled
                className="form-control mt-4"
                value={emailInUse}
              />
            </div>
            <Input
              type={"password"}
              label={true}
              labelText={"Confirme sua senha:"}
              placeholder={"Confirme sua senha"}
              classLabel="mt-2 fw-bold text-light"
              className="form-control mt-4"
              nameInput="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={false}
            />
            <button className="btn btn-outline-danger mt-4">
              Deletar conta
            </button>
            <br />
            <BackButton to={"/my-profile"} text={"Voltar"} />
          </form>
        </div>
      </div>
    </div>
  );

  // Função que será executada no submit do form
  function handleSubmit(event) {
    event.preventDefault();
    sendDataForm(password, setPassword, handleLogout); // handleLogout é a função que vem do Context
  }
};

export default FormDeleteAccount;
