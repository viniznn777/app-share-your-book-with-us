import React from "react";
import { PiProhibitBold } from "react-icons/pi";

const AccessDenied = () => {
  return (
    <div
      style={{
        paddingTop: "70px",
        textAlign: "center",
      }}
    >
      <div
        className="container-img"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <dotlottie-player
          src="https://lottie.host/4b53e3ef-d202-4d4d-a32b-ad9b981af785/OHT9km6P69.json"
          background="transparent"
          speed="1"
          style={{ width: "500px", height: "500px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
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
      <p className="fs-2 text-danger fw-bold">403 Forbidden</p>
    </div>
  );
};

export default AccessDenied;
