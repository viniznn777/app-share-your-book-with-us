import styled from "styled-components";
import {
  backgroundColor,
  fontColor,
  secondaryBackground,
} from "../Home/Styles";

const Container = styled.div`
  padding: 0;
  height: 100vh;
  padding-top: 99px;
  background-color: ${backgroundColor};

  .card {
    background-color: ${secondaryBackground};
    backdrop-filter: blur(5px);
    border: 1px solid ${secondaryBackground};
  }

  input {
    background-color: #31373d;
    border: none;
    color: #ffffff;
    &::placeholder {
      color: ${fontColor};
    }
    &:focus {
      background-color: #31373d;
      color: #ffffff;
    }
  }

  .container {
    padding: 0 55px;
  }

  .container-text {
    padding-left: 3px;
    border-radius: 3px;
    background-color: ${secondaryBackground};
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    p {
      color: ${fontColor};
    }
  }
`;

export default Container;
