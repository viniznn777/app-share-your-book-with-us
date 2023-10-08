import React from "react";
import ContainerCreatePost from "./Styles";
import Form from "./Form/Form";

const CreatePost = () => {
  return (
    <ContainerCreatePost className="container-fluid">
      <div className="container">
        <div className="container-text">
          <p className="fs-1 mt-4 fw-bold">Adicionar postagem: </p>
        </div>
        <hr />
        <Form />
      </div>
    </ContainerCreatePost>
  );
};

export default CreatePost;
