import styled from "styled-components";
import { fontColor, secondaryBackground } from "../../../Home/Styles";

const Container = styled.div`
  padding-top: 99px;
  padding-bottom: 15px;

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
  hr {
    color: greenyellow;
  }
`;

export default Container;
