import React from "react";
import Container from "../Styles";
import Form from "./Form/Form";

const EDIT_CATEGORY_ADMIN = () => {
  return (
    <Container className="container">
      <div>
        <hr />
        <p className="fs-1 fw-bold">Editar Categoria:</p>
        <hr />
      </div>
      <Form />
    </Container>
  );
};

export default EDIT_CATEGORY_ADMIN;
