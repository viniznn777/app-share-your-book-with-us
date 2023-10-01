import React, { useEffect, useState } from "react";
import ContainerDeleteRecommendations from "./Styles";
import PostComponent from "../../../Posts/PostComponent";
import Loader from "../../../../utilities/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { errorMessage } from "../../../../utilities/toastMessages/ToastMessages";

const DELETE_RECOMMENDATIONS_ADMIN = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8081/posts");

        if (response.ok) {
          const dataResponse = await response.json();
          setData(dataResponse);
        }
      } catch (err) {
        errorMessage("Não foi possível carregar os posts!");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
    document.title = "AppBooks | Deletar Recomendações";
  }, []);

  return (
    <ContainerDeleteRecommendations className="container">
      <ToastContainer />
      <div>
        <hr />
        <p className="fs-1">Deletar Recomendações: </p>
        <hr />
      </div>

      {isLoading ? (
        <Loader />
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <PostComponent
            title={item.title}
            description={item.description}
            img={item.img}
            synopsis={item.synopsis}
            author={item.author}
            username={item.idUser.username}
            slug={item.slug}
            category={item.category.name}
            date={item.date}
            key={index}
            Delete={true}
            idRecommendation={item._id}
          />
        ))
      ) : (
        <p className="fs-2" style={{ textAlign: "center" }}>
          Ainda não há posts 🔎
        </p>
      )}
    </ContainerDeleteRecommendations>
  );
};

export default DELETE_RECOMMENDATIONS_ADMIN;
