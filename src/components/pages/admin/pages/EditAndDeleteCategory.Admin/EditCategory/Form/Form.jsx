import React, { useEffect, useState } from "react";
import Input from "../../../../../../utilities/Input";
import BackButton from "../../../../../../utilities/BackButton/BackButton";
import { useParams } from "react-router-dom";
import { errorMessage } from "../../../../../../utilities/toastMessages/ToastMessages";
import Loader from "../../../../../../utilities/Loader/Loader";
import sendDataForm from "./SendDataForm";

const Form = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const { id } = useParams();
  const restrictModel = true;

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8081/categories/${id}`);

        if (response.ok) {
          const dataPulled = await response.json();
          setName(dataPulled.name);
          setSlug(dataPulled.slug);
          setDescription(dataPulled.description);
          setImg(dataPulled.img);
          setLoading(false);
        } else if (response.status === 404) {
          setLoading(true);
          errorMessage("Não foi possível localizar esta Categoria!");
        }
      } catch (err) {
        console.log(err);
        errorMessage("Não foi possível carregar as informações da categoria!");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
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
                  classLabel={"mt-3 fw-bold text-light"}
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

              <button className="btn btn-success mt-4">Editar Categoria</button>
            </form>
            <BackButton to={"/admin/categories/edit-delete"} text={"Voltar"} />
          </div>
        </div>
      )}
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    sendDataForm(name, slug, description, img, restrictModel, id);
  }
};
export default Form;
