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
  hr {
    color: green;
  }
  .container-links-adm {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 9px;
  }
  @media screen and (max-width: 991px) {
    .container-links-adm {
      flex-direction: column;
    }
  }
`;

export default ContainerProfile;
