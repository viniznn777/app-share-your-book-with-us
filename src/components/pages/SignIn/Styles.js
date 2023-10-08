import styled from "styled-components";
import bgBooks from "../../../images/backgrounds/bg-books-min.jpg";

const Container = styled.div`
  padding: 0;
  height: 100vh;
  padding-top: 99px;
  background-image: url(${bgBooks});
  background-position: center;
  background-size: contain;

  .card {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
  }
  .container-text {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
  }
`;

export default Container;
