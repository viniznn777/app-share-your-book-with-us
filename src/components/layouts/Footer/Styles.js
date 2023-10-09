import styled from "styled-components";

const Container = styled.footer`
  padding-top: 5px;
  padding-bottom: 5px;
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
    width: 100px;
    height: 100px;
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
