import React, { useState, useEffect } from "react";
import BackButton from "../../../../../../utilities/BackButton/BackButton";
import Input from "../../../../../../utilities/Input";
import { useParams } from "react-router-dom";
import ValidateURLData from "../ValidationEdit";
import sendDataForm from "./SendData";

const FormEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState("");
  const [data, setData] = useState([]);
  const { id, user } = useParams();

  useEffect(() => {
    async function pullData() {
      try {
        // Reutilizando a função ValidateURLData, pois podemos extrair um json da publição que foi passado na URL
        const response = await ValidateURLData(id, user);

        if (response.ok) {
          // Preenchando os input com os valores retirados do json para que o usuário não se perca em qual publicação deseja editar
          const dataPulled = await response.json();
          setTitle(dataPulled.title);
          setDescription(dataPulled.description);
          setImg(dataPulled.img);
          setSynopsis(dataPulled.synopsis);
          setCategory(dataPulled.category._id);
          setAuthor(dataPulled.author);
          setSlug(dataPulled.slug);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8081/categories");

        if (response.ok) {
          const dataResponse = await response.json();
          setData(dataResponse);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    pullData();
  }, [id, user]);

  return (
    <div>
      <hr />
      <p className="fs-1">Editar Recomendação:</p>
      <hr />
      <div className="card mt-4">
        <div className="card-body">
          <form method="post" onSubmit={handleSubmit} id="form">
            <div className="containerTitle mt-2">
              <Input
                type="text"
                label={true}
                labelText="Título: "
                required={true}
                id="title"
                nameInput="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                classLabel="fw-bold text-light mt-2"
              />

              <div className="containerSlug mt-2">
                <Input
                  type="text"
                  label={true}
                  labelText="Slug: "
                  required={true}
                  id="slug"
                  nameInput="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                  placeholder="ex. viagem-ao-centro-da-terra"
                  classLabel="fw-bold text-light mt-2"
                />
              </div>

              <div className="containerDescription mt-2">
                <Input
                  type="text"
                  label={true}
                  labelText="Descrição: "
                  required={true}
                  id="description"
                  nameInput="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  classLabel="fw-bold text-light mt-2"
                />
              </div>

              <div className="containerImage mt-2">
                <Input
                  type="text"
                  label={true}
                  labelText="URL IMG: (optional)"
                  required={true}
                  id="img"
                  nameInput="img"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="form-control"
                  classLabel="fw-bold text-light mt-2"
                />
              </div>

              <div className="containerAuthor mt-2">
                <Input
                  type="text"
                  label={true}
                  labelText="Autor: "
                  required={true}
                  id="author"
                  nameInput="author"
                  onChange={(e) => setAuthor(e.target.value)}
                  className="form-control"
                  value={author}
                  classLabel="fw-bold text-light mt-2"
                />
              </div>

              <div className="containerContent mt-2">
                <Input
                  type="text"
                  label={true}
                  labelText="Sinopse: "
                  required={true}
                  id="synopsis"
                  nameInput="synopsis"
                  onChange={(e) => setSynopsis(e.target.value)}
                  className="form-control"
                  value={synopsis}
                  classLabel="fw-bold text-light mt-2"
                />
              </div>

              <div className="containerCategory mt-2">
                <label htmlFor="category" className="text-light">
                  Categoria:{" "}
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  required={true}
                >
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <option value={item._id} key={index}>
                        {item.name}
                      </option>
                    ))
                  ) : (
                    <option value="0">
                      There are no registered categories
                    </option>
                  )}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-4">
              Enviar edição
            </button>

            <BackButton to={"/my-recommendations"} text={"Voltar"} />
          </form>
        </div>
      </div>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    sendDataForm(
      id,
      user,
      title,
      description,
      img,
      synopsis,
      category,
      author,
      slug,
      setTitle,
      setDescription,
      setImg,
      setSynopsis,
      setCategory,
      setAuthor,
      setSlug
    );
  }
};

export default FormEdit;
