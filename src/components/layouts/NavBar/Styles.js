import styled from "styled-components";

const NavBarContainer = styled.nav`
  img.logo {
    width: 80px;
    height: 80px;
  }
  .nav-item {
    font-size: 1.25rem;
    margin-bottom: 7px;
  }
  position: absolute;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  .container-info-username-button-logout {
    position: absolute;
    right: 0;
    margin-right: 33px;
    display: flex;
    align-items: center;
    gap: 33px;
    img {
      margin-bottom: 5px;
    }
    .btn-success {
      font-size: 1.2rem;
      svg {
        margin-bottom: 6px;
      }
    }
    .container-profile {
      .username {
        display: flex;
        gap: 12px;
        align-items: center;
        order: 1;
        color: #fff;
        font-size: 1.25rem;
        text-decoration: none;
        margin-top: 4px;
      }
    }
  }
  .navbar-brand {
    font-family: "Croissant One", cursive;
  }

  @media screen and (max-width: 991px) {
    .container-info-username-button-logout {
      gap: 11px;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      .nav-item {
        order: 1;
      }
    }
  }
`;

export default NavBarContainer;
