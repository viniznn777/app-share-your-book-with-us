import styled from "styled-components";
import {
  backgroundColor,
  fontColor,
  secondaryBackground,
} from "../Home/Styles";

const Container = styled.div`
  padding-top: 99px;
  padding-bottom: 15px;
  background-color: ${backgroundColor};

  a {
    text-decoration: none;
    color: green;
    &:hover {
      text-decoration: underline;
    }
  }
  .container-cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .container-img {
      overflow: hidden;
    }

    .card {
      height: 526px;
      background-color: ${secondaryBackground};
      backdrop-filter: blur(5px);
    }
    img {
      width: 286px;
      height: 214px;
      transition: all 0.5s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .card-text {
      overflow-y: scroll;
      height: 160px;
      &::-webkit-scrollbar {
        width: 15px;
      }
      &::-webkit-scrollbar-track {
        background: #31373d;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${secondaryBackground};
        border: 1px solid ${fontColor};
      }
    }
  }
  .container-text {
    padding-left: 3px;
    border-radius: 3px;
    background-color: ${secondaryBackground};
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    p {
      color: ${fontColor};
    }
  }
`;

export default Container;
