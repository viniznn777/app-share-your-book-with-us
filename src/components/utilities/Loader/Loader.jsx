import React from "react";
import ContainerLoader from "./Styles";

const Loader = () => {
  return (
    <ContainerLoader>
      <div className="lds-dual-ring"></div>
    </ContainerLoader>
  );
};

export default Loader;
