import React from "react";
import { useEffect, useState } from "react";
import Input from "../../../../utilities/Input";
import BackButton from "../../../../utilities/BackButton/BackButton";

const Form = () => {
  const [idUser, setIdUser] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
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

    const id = localStorage.getItem("username");
    setIdUser(id);

    fetchData();
    document.title = "AppBooks | Recomendar";
  }, []);
  return (
    <div className="card mt-4 bg-white">
      <div className="card-body">
        <form method="post" action="http://localhost:8081/posts/new" id="form">
          <div className="containerTitle mt-2">
            <input
              type="hidden"
              name="id"
              onChange={(e) => setIdUser(e.target.value)}
              value={idUser}
            />
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
              />
            </div>

            <div className="containerImage mt-2">
              <Input
                type="text"
                label={true}
                labelText="URL IMG: (optional)"
                required={false}
                id="img"
                nameInput="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="form-control"
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
              />
            </div>

            <div className="containerCategory mt-2">
              <label htmlFor="category">Categoria: </label>
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
                  <option value="0">There are no registered categories</option>
                )}
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-4">
            Criar Postagem
          </button>
          <BackButton to={"/"} text={"Voltar"} />
        </form>
      </div>
    </div>
  );
};

export default Form;
