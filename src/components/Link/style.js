import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-family: monospace, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;

  color: var(--color-white);

  :hover {
    color: var(--color-black);
    transition: 1s;
  }
`;
