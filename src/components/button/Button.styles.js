import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10.4rem;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => (width === "short" ? "28rem" : "72rem")};
    height: 5.6rem;

    border-radius: 1.2rem;
    background: var(--color-purple-600);

    color: var(--color-white);
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2.4rem;
    .btn {
      ${({ width }) => (width === "short" ? "width: 100%" : "max-width: 100%")};
    }
  }

  /* display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width === "short" ? "28rem" : "72rem")};
  height: 5.6rem;
  margin: 0 auto;

  border-radius: 1.2rem;
  background: var(--color-purple-600);

  color: var(--color-white);

  @media screen and (max-width: 1024px) {
    width: auto;
    margin: 0 2.4rem;
  } */
`;

export default ButtonStyle;
