import React from "react";
import ContainerCreateCategory from "./Styles";
import FormCreateCategory from "./Form/FormCreateCategory";

const CREATE_CATEGORY = () => {
  return (
    <ContainerCreateCategory className="container">
      <div>
        <hr />
        <p className="fs-1 fw-bold">Criar Categoria: </p>
        <hr />
      </div>
      <FormCreateCategory />
    </ContainerCreateCategory>
  );
};

export default CREATE_CATEGORY;
