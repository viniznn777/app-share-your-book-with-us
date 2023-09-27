import React from "react";
import { PiProhibitBold } from "react-icons/pi";
import imgBlocked from "../../../../../images/restricoes.png";

const AccessDenied = () => {
  return (
    <div
      style={{
        paddingTop: "99px",
        textAlign: "center",
      }}
    >
      <p className="fs-1 text-danger fw-bold">
        {" "}
        <PiProhibitBold />
        <PiProhibitBold />
      </p>
      <p className="fs-1 fw-bold text-danger">
        Você não tem permissão para acessar esta página...
      </p>
      <p className="fs-1 text-danger fw-bold">
        {" "}
        <PiProhibitBold />
        <PiProhibitBold />
      </p>
      <div
        className="container-img"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imgBlocked}
          alt="Access Denied"
          className="img-fluid"
          draggable={false}
        />
      </div>
      <p className="fs-2 text-danger fw-bold">403 Forbidden</p>
    </div>
  );
};

export default AccessDenied;
