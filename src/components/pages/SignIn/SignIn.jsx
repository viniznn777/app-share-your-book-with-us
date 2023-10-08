import React from "react";
import "react-toastify/dist/ReactToastify.css";
import FormSignIn from "./FormSignIn/FormSignIn";
import Container from "./Styles";
import Footer from "../../layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";

const SignIn = () => {
  return (
    <Container className="container-fluid">
      <ToastContainer />
      <div className="container">
        <div className="container-text">
          <p className="fs-1 mt-5">Fazer login: </p>
        </div>
        <hr />
        <FormSignIn />
      </div>
      <Footer />
    </Container>
  );
};

export default SignIn;
