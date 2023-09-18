import styled from "styled-components";

const NavBarContainer = styled.nav`
  img {
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
    .btn-success {
      font-size: 1.2rem;
      svg {
        margin-bottom: 6px;
      }
    }
    display: flex;
    align-items: center;
    .container-profile {
      .username {
        display: flex;
        gap: 12px;
        align-items: center;
        order: 1;
        color: #fff;
        font-size: 1.25rem;
        text-decoration: none;
        svg {
          order: 2;
        }
      }
    }
    gap: 33px;
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
