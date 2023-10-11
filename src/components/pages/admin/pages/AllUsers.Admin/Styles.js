import styled from "styled-components";
import { fontColor, secondaryBackground } from "../../../Home/Styles";

const ContainerAllUsers = styled.div`
  padding-top: 99px;
  .container-buttons {
    display: flex;
    gap: 12px;
  }
  p.fs-5 {
    color: ${fontColor};
    span {
      color: #fff;
    }
  }
  .card {
    background-color: ${secondaryBackground};
  }
  hr {
    color: greenyellow;
  }
`;
export default ContainerAllUsers;
