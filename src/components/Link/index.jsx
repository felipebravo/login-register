import { StyledLink } from "./style";

export const Link = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
