import React from "react";
import ContainerEditPage from "./Styles";
import Form from "./Form/Form";

const EDIT_CATEGORY_ADMIN = () => {
  return (
    <ContainerEditPage className="container">
      <div>
        <hr />
        <p className="fs-1 fw-bold">Editar Categoria:</p>
        <hr />
      </div>
      <Form />
    </ContainerEditPage>
  );
};

export default EDIT_CATEGORY_ADMIN;
