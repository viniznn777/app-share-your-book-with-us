import styled from "styled-components";

const ContainerPost = styled.div`
  .containerImg {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .container-avatar {
    display: flex;
    gap: 16px;
    align-items: center;
    word-wrap: break-word;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container-buttons {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
`;

export default ContainerPost;
