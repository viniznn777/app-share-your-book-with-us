import React, { useState, useEffect } from "react";
import Container from "./Styles";
import { errorMessage } from "../../utilities/toastMessages/ToastMessages";
import { ToastContainer } from "react-toastify";
import Loader from "../../utilities/Loader/Loader";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
    document.title = "ShareBooks | Categorias";
  }, []);

  return (
    <Container className="container-fluid">
      <div className="container">
        <ToastContainer />
        <div className="container-text">
          <p className="fs-1 mt-4 fw-bold">Categorias: </p>
        </div>
        <hr />
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
                deleteButton={false}
                editButton={false}
              />
            ))
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
