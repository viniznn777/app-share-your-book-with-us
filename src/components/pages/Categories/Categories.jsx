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
      <div className="container-cards">
        {loading ? (
          <Loader />
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="container-img">
                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.img}
                    title={item.name}
                    draggable={false}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <Link to={`/categories/${item.slug}`} className="link">
                    <button className="btn btn-primary">
                      Ver Recomendações
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </Container>
  );
};

export default Categories;
