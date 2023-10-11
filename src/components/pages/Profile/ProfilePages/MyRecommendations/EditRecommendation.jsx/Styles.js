import styled from "styled-components";
import {
  fontColor,
  inputBackground,
  secondaryBackground,
} from "../../../../Home/Styles";

const ContainerEdit = styled.div`
  padding-top: 99px;
  hr {
    color: ${fontColor};
  }
  .card {
    background-color: ${secondaryBackground};
    input {
      border: none;
      background-color: ${inputBackground};
      color: #fff;
      &::placeholder {
        color: ${fontColor};
      }
    }
    select {
      border: none;
      background-color: ${inputBackground};
      color: #fff;
    }
  }
`;
export default ContainerEdit;
