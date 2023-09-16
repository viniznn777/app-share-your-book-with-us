import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "./Styles";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "AppBooks | Categorias";
  }, []);

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
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="container">
      <p className="fs-1 mt-4 fw-bold">Categorias: </p>
      <hr />
      {loading ? (
        <p className="fs-2">Carregando Categorias...</p>
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
