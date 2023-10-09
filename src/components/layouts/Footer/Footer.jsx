import React from "react";
import Container from "./Styles";
import Logo from "../../../images/Logo_e_nome.png";

const Footer = () => {
  return (
    <Container className="container-fluid">
      <div className="container">
        <img src={Logo} alt="Logotipo" className="img-fluid" />

        <small className="text-light">
          developed by{" "}
          <a
            href="https://github.com/viniznn777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            Vinicius Kauã
          </a>
        </small>
      </div>
    </Container>
  );
};

export default Footer;
