import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default SignUp;
