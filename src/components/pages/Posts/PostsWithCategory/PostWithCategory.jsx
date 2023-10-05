import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../PostComponent";
import Loader from "../../../utilities/Loader/Loader";

import BackButton from "../../../utilities/BackButton/BackButton";

const PostWithCategory = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8081/categories/posts/${slug}`
        );

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
  }, [slug]);

  return (
    <div className="container" style={{ paddingTop: "99px" }}>
      {data.length > 0 ? (
        <div>
          <hr />
          <p className="fs-1 mt-4 fw-bold" style={{ textAlign: "center" }}>
            {data[0].category.name}
          </p>
          <hr />
          <BackButton to={"/categories"} text={"Voltar"} />
        </div>
      ) : null}
      {isLoading ? (
        <Loader />
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <div className="container" key={index}>
            <hr style={{ color: "#fff" }} />
            <PostComponent
              title={item.title}
              description={item.description}
              img={item.img}
              synopsis={item.synopsis}
              author={item.author}
              slug={item.slug}
              category={item.category.name}
              date={item.date}
              username={item.idUser.username}
            />
          </div>
        ))
      ) : (
        <div>
          <hr />
          <p className="fs-1" style={{ textAlign: "center" }}>
            Ainda não há posts 🔎
          </p>
          <hr />
          <BackButton to={"/categories"} text={"Voltar"} />
        </div>
      )}
    </div>
  );
};

export default PostWithCategory;
