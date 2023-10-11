import styled from "styled-components";
import {
  fontColor,
  inputBackground,
  secondaryBackground,
} from "../../Home/Styles";

const ContainerCreatePost = styled.div`
  height: 100vh;
  padding-top: 99px;
  .container-text {
    background-color: ${secondaryBackground};
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
  }
  .card {
    background-color: ${secondaryBackground};
    input {
      color: #fff;
      border: none;
      background-color: ${inputBackground};
      &::placeholder {
        color: ${fontColor};
      }
    }
    select {
      background-color: ${inputBackground};
      color: #fff;
      border: none;
    }
  }
  hr {
    color: ${fontColor};
  }
`;

export default ContainerCreatePost;
