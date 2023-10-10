import styled from "styled-components";
import bgBooks from "../../../images/backgrounds/bg-books-min.jpg";

const Container = styled.div`
  padding-top: 90px;
  padding-bottom: 15px;
  background-color: #fff;
  background-image: url(${bgBooks});
  background-position: center;
  background-size: contain;

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
        background: #ffa500;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(241, 157, 0, 0.76);

        border: 3px solid rgba(232, 151, 0, 1);
      }
    }
  }
  .container-text {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
  }
`;

export default Container;
