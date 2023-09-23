import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "./Styles";
import { errorMessage } from "../../utilities/toastMessages/ToastMessages";
import { ToastContainer } from "react-toastify";
import Loader from "../../utilities/Loader/Loader";

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
    document.title = "AppBooks | Categorias";
  }, []);

  return (
    <Container className="container">
      <ToastContainer />
      <p className="fs-1 mt-4 fw-bold">Categorias: </p>
      <hr />
      {loading ? (
        <Loader />
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <div className="containerLinks" key={index}>
            <Link to={`/categories/${item.slug}`} className="link">
              <p className="fs-4">{item.name}</p>
            </Link>
          </div>
        ))
      ) : null}
    </Container>
  );
};

export default Categories;
