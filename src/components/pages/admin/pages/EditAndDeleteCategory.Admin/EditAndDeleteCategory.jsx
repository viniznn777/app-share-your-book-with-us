import React, { useState, useEffect } from "react";
import Container from "./Styles";
import { errorMessage } from "../../../../utilities/toastMessages/ToastMessages";
import { ToastContainer } from "react-toastify";
import Loader from "../../../../utilities/Loader/Loader";
import CategoryCard from "../../../Categories/CategoryCard";

const EDIT_AND_DELETE_CATEGORY = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8081/categories");

        if (response.ok) {
          const dataResponse = await response.json();
          setData(dataResponse);
        }
      } catch (err) {
        errorMessage("Não foi possível carregar as categorias!");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    document.title = "ShareBooks | Editar/Deletar Categorias";
  }, []);

  return (
    <Container className="container">
      <ToastContainer />
      <div>
        <hr />
        <p className="fs-1 mt-4 fw-bold">Editar/Deletar Categorias: </p>
        <hr />
      </div>
      <div className="container-cards">
        {loading ? (
          <Loader />
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <CategoryCard
              img={item.img}
              name={item.name}
              description={item.description}
              slug={item.slug}
              id={item._id}
              key={index}
              deleteButton={true}
              editButton={true}
            />
          ))
        ) : null}
      </div>
    </Container>
  );
};

export default EDIT_AND_DELETE_CATEGORY;
