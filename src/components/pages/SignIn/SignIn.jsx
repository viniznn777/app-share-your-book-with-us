import React from "react";
import "react-toastify/dist/ReactToastify.css";
import FormSignIn from "./FormSignIn/FormSignIn";

const SignIn = () => {
  return (
    <div className="container">
      <p className="fs-1 mt-5">Fazer login: </p>
      <hr />
      <FormSignIn />
    </div>
  );
};

export default SignIn;
