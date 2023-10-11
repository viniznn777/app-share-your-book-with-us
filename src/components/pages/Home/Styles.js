import styled from "styled-components";

export const backgroundColor = "#000";
export const secondaryBackground = "#1b1f23";
export const fontColor = "#aad6ff";
export const inputBackground = "#31373d";

const Container = styled.div`
  padding-top: 99px;
  background-color: ${backgroundColor};

  .card {
    background-color: #1b1f23;
    backdrop-filter: blur(2px);
  }
  .container-text {
    background-color: #1b1f23;
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    border-radius: 10px;
  }
  hr {
    color: #fff;
  }
`;
export default Container;
