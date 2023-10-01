import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ContainerMyRecommendations from "./Styles";
import { errorMessage } from "../../../../utilities/toastMessages/ToastMessages";
import Loader from "../../../../utilities/Loader/Loader";
import PostComponent from "../../../Posts/PostComponent";
import BackButton from "../../../../utilities/BackButton/BackButton";
import { Context } from "../../../../contexts/AuthContext";

const MyRecommendations = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useContext(Context);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const id = localStorage.getItem("username");
        const response = await fetch(
          `http://localhost:8081/return/user/my-recommendations/${id}`
        );
        if (response.ok) {
          const dataResponse = await response.json();
          setData(dataResponse);
        }
      } catch (err) {
        console.log(err);
        errorMessage("Não foi possível carregar as postagens!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <ContainerMyRecommendations className="container">
      <hr />
      <p className="fs-1 fw-semibold">Minhas Recomendações:</p>
      <hr />
      <BackButton to={"/my-profile"} text={"Voltar"} />
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
            category={item.category.name}
            slug={item.slug}
            date={item.date}
            username={item.idUser.username}
            key={index}
            Edit={true}
            Delete={true}
            idUser={id}
            idRecommendation={item._id}
          />
        ))
      ) : (
        <div>
          <p className="fs-2 f2-semibold">Não há recomendações recebidas. 🔎</p>
        </div>
      )}
    </ContainerMyRecommendations>
  );
};

export default MyRecommendations;
