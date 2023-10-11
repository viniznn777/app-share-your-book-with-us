import styled from "styled-components";
import {
  fontColor,
  inputBackground,
  secondaryBackground,
} from "../../../../Home/Styles";

const ContainerEditPage = styled.div`
  padding-top: 99px;
  .card {
    background-color: ${secondaryBackground};
    input {
      color: #fff;
      background-color: ${inputBackground};
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

export default ContainerEditPage;
