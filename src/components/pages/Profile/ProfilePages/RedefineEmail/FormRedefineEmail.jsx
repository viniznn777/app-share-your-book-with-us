import React, { useEffect, useState } from "react";
import Input from "../../../../utilities/Input";
import { ToastContainer } from "react-toastify";
import SendFormDataEmail from "./SendFormDataEmail";

const FormRedefineEmail = () => {
  const [newEmail, setNewEmail] = useState("");
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
  }, [newEmail]);

  return (
    <div className="container mt-5">
      <hr />
      <p className="fs-1 fw-semibold">Redefinir Email</p>
      <hr />
      <div className="card">
        <div className="card-body">
          <form method="post" onSubmit={handleSubmit}>
            <div>
              {" "}
              <label htmlFor="emailinuse" className="mt-2">
                Email em uso:{" "}
              </label>
              <input
                type="email"
                name="emailinuse"
                id="emailinuse"
                disabled
                value={emailInUse}
                onChange={(e) => setEmailInUse(e.target.value)}
                className="form-control mt-2"
              />
            </div>
            <Input
              label={true}
              labelText={"Novo Email:"}
              type={"email"}
              nameInput={"newemail"}
              id={"newemail"}
              className={"form-control mt-3"}
              classLabel={"newemail mt-2"}
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
              required={false}
            />
            <button className="btn btn-success mt-4">Redefinir Email</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    SendFormDataEmail(newEmail, setNewEmail);
  }
};

export default FormRedefineEmail;
