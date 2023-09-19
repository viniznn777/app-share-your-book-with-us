import styled from "styled-components";

const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 105px;
  .icon-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
      height: 250px;
    }
    p {
      text-decoration: underline;
    }
  }
  .container-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
      width: 100%;
    }
  }
  .btn {
    width: 100%;
    padding: 15px;
  }
  .alert {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default ContainerProfile;
