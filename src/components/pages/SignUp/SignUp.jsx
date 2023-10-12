import React, { useEffect } from "react";
import Container from "./Styles";
import FormSignUp from "./FormSignUp/FormSignUp";
import Footer from "../../layouts/Footer/Footer";

const SignUp = () => {
  useEffect(() => {
    document.title = "ShareBooks | Criar conta";
  }, []);

  return (
    <Container className="container-fluid">
      <div className="container">
        <div className="container-text">
          <p className="fs-1 mt-5">Crie sua conta hoje: </p>
        </div>
        <hr className="text-light" />
        <FormSignUp />
      </div>
      <Footer />
    </Container>
  );
};

export default SignUp;
