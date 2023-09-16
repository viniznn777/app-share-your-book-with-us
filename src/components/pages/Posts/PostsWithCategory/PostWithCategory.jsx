import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../PostComponent";

const PostWithCategory = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8081/categories/${slug}`
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
    <div className="container">
      {isLoading ? (
        <p className="fs-2" style={{ color: "#ffffff", textAlign: "center" }}>
          Loading posts...
        </p>
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
        </div>
      )}
    </div>
  );
};

export default PostWithCategory;
