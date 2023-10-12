import React, { useEffect, useState } from "react";
import PostComponent from "../Posts/PostComponent";
import Header from "./Header/Header";
import { errorMessage } from "../../utilities/toastMessages/ToastMessages";
import Loader from "../../utilities/Loader/Loader";
import Container from "./Styles";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
    document.title = "ShareBooks | Feed";
  }, []);

  return (
    <Container>
      <Header />
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
          />
        ))
      ) : (
        <div className="container-text">
          <p className="fs-2" style={{ textAlign: "center" }}>
            Ainda não há posts 🔎
          </p>
        </div>
      )}
    </Container>
  );
};

export default Home;
