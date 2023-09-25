import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const BackButton = ({ to, text }) => {
  return (
    <div className="mt-4">
      <Link
        to={to}
        className="back-button text-danger"
        style={{ fontSize: "1.3rem", textDecoration: "none" }}
      >
        <RiArrowGoBackFill /> {text}
      </Link>
    </div>
  );
};

export default BackButton;
