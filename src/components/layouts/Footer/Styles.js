import styled from "styled-components";

const Container = styled.footer`
  height: max-content;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img {
    width: 70px;
    height: 70px;
  }
  p {
    font-family: "Croissant One", cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Container;
