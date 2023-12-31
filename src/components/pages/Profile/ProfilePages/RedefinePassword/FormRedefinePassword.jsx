import React, { useState } from "react";
import Input from "../../../../utilities/Input";
import SendDataForm from "./SendDataForm";
import BackButton from "../../../../utilities/BackButton/BackButton";

const FormRedefinePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  return (
    <div className="container mt-5">
      <hr />
      <p className="fs-1 fw-semibold">Redefinir Senha:</p>
      <hr />
      <div className="card">
        <div className="card-body">
          <form method="post" onSubmit={handleSubmit}>
            <Input
              label={true}
              labelText={"Senha Antiga:"}
              type={"password"}
              nameInput={"oldpassword"}
              id={"oldpassword"}
              className={"form-control mt-3"}
              classLabel={"oldpassword mt-2 fw-bold text-light"}
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              required={false}
              placeholder={"Senha antiga"}
            />
            <Input
              label={true}
              labelText={"Nova Senha:"}
              type={"password"}
              nameInput={"newpassword"}
              id={"newpassword"}
              className={"form-control mt-3"}
              classLabel={"newpassword mt-2 fw-bold text-light"}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required={false}
              placeholder={"Nova senha"}
            />
            <Input
              label={true}
              labelText={"Repetir Nova Senha:"}
              type={"password"}
              nameInput={"newpassword2"}
              id={"newpassword2"}
              className={"form-control mt-3"}
              classLabel={"newpassword2 mt-2 fw-bold text-light"}
              onChange={(e) => setNewPassword2(e.target.value)}
              value={newPassword2}
              required={false}
              placeholder={"Digite novamente"}
            />
            <button className="btn btn-success mt-4">Criar nova senha</button>
            <BackButton to={"/my-profile"} text={"Voltar"} />
          </form>
        </div>
      </div>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    SendDataForm(
      oldPassword,
      newPassword,
      newPassword2,
      setOldPassword,
      setNewPassword,
      setNewPassword2
    );
  }
};

export default FormRedefinePassword;
