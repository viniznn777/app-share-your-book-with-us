import styled from "styled-components";
import {
  fontColor,
  inputBackground,
  secondaryBackground,
} from "../../../Home/Styles";

const ContainerCreateCategory = styled.div`
  padding-top: 99px;
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
  hr {
    color: greenyellow;
  }
`;

export default ContainerCreateCategory;
