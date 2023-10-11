import React, { useEffect, useState } from "react";
import Input from "../../../../../utilities/Input";
import { ToastContainer } from "react-toastify";
import { SendData } from "./SendDataForm";
import BackButton from "../../../../../utilities/BackButton/BackButton";

const FormCreateCategory = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const restrictModel = true;

  useEffect(() => {
    document.title = "ShareBooks | Criar Categoria";
  });

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="container-input">
              <Input
                label={true}
                labelText={"Nome: "}
                nameInput={"name"}
                id={"name"}
                placeholder={"Nome da categoria"}
                className={"form-control"}
                classLabel={"mt-3 fw-bold text-light"}
                type={"text"}
                onChange={(e) => setName(e.target.value)}
                value={name}
                required={false}
              />
            </div>
            <div className="container-input">
              <Input
                label={true}
                labelText={"Slug: "}
                nameInput={"slug"}
                id={"slug"}
                placeholder={"Slug da categoria"}
                className={"form-control"}
                classLabel={"mt-3 fw-bold text-light"}
                type={"text"}
                onChange={(e) => setSlug(e.target.value)}
                value={slug}
                required={false}
              />
            </div>
            <div className="container-input">
              <Input
                nameInput={"restrictModel"}
                id={"restrictModel"}
                className={"form-control"}
                classLabel={"mt-3"}
                type={"hidden"}
                value={restrictModel}
              />
            </div>
            <div className="container-input">
              <Input
                label={true}
                labelText={"Descrição: "}
                nameInput={"description"}
                id={"description"}
                placeholder={"Descrição da categoria"}
                className={"form-control"}
                classLabel={"mt-3 fw-bold text-light"}
                type={"text"}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required={false}
              />
            </div>
            <div className="container-input">
              <Input
                label={true}
                labelText={"URL img*: "}
                nameInput={"img"}
                id={"img"}
                placeholder={"Imagem da categoria"}
                className={"form-control"}
                classLabel={"mt-3 fw-bold text-light"}
                type={"text"}
                onChange={(e) => setImg(e.target.value)}
                value={img}
                required={false}
              />
            </div>
            <ToastContainer />
            <button className="btn btn-success mt-4">Criar Categoria</button>
          </form>
          <BackButton to={"/my-profile"} text={"Voltar"} />
        </div>
      </div>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    SendData(name, slug, restrictModel, description, img);
  }
};

export default FormCreateCategory;
