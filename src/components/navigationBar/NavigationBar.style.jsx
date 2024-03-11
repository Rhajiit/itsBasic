import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 0.1rem solid #ededed;


  .logo-img {
    width: 2.7818rem;
    height: 2.7658rem;
  }


  background: ${(props) => props.theme.backgroundColor};

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120.7rem;
    height: 6.2rem;
    margin: 0 2.4rem;
  }

  .logo-container > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${(props) => props.theme.textColor};
  }

  .button,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.7rem;
    height: 4rem;
    cursor: pointer;
  }

  .button {
    display: ${({ show }) => (show === "none" ? "none" : "flex")};
  }

  button {
    color: var(--color-grayscale-900);
    border-radius: 0.6rem;
    border: 0.1rem solid var(--color-grayscale-300);
    background: var(--color-white);
  }

  @media screen and (max-width: 768px) {
    .button,
    button {
      width: 14.2rem;
    }

    button {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;
export const NavButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export default NavContainer;
