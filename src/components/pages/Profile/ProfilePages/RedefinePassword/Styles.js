import styled from "styled-components";
import {
  fontColor,
  inputBackground,
  secondaryBackground,
} from "../../../Home/Styles";

const ContainerRedefinePassword = styled.div`
  padding-top: 90px;
  hr {
    color: ${fontColor};
  }
  .card {
    background-color: ${secondaryBackground};
    input {
      background-color: ${inputBackground};
      color: #fff;
      border: none;
      &::placeholder {
        color: ${fontColor};
      }
    }
  }
`;
export default ContainerRedefinePassword;
