import React from "react";
import ContainerCreatePost from "./Styles";
import Form from "./Form/Form";

const CreatePost = () => {
  return (
    <ContainerCreatePost className="container">
      <p className="fs-1 mt-4 fw-bold">Adicionar postagem: </p>
      <hr />
      <Form />
    </ContainerCreatePost>
  );
};

export default CreatePost;
