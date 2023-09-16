import React, { useEffect, useState } from "react";
import PostComponent from "../Posts/PostComponent";
import Header from "./Header/Header";

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
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    document.title = "AppBooks | Feed";
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <p className="fs-2" style={{ textAlign: "center" }}>
          Loading posts...
        </p>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <PostComponent
            title={item.title}
            description={item.description}
            img={item.img}
            synopsis={item.synopsis}
            author={item.author}
            slug={item.slug}
            category={item.category.name}
            date={item.date}
            key={index}
          />
        ))
      ) : (
        <p className="fs-2" style={{ textAlign: "center" }}>
          Ainda não há posts 🔎
        </p>
      )}
    </div>
  );
};

export default Home;