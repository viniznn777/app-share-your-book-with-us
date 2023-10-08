import styled from "styled-components";
import bgBooks from "../../../../images/backgrounds/bg-books-min.jpg";

const ContainerCreatePost = styled.div`
  height: 100vh;
  padding-top: 90px;
  background-image: url(${bgBooks});
  background-position: center;
  background-size: contain;
  .container-text {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
  }
`;

export default ContainerCreatePost;
