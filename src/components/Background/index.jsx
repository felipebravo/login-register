import { StyledBackground } from "./style";

export const Background = ({ variant, children }) => {
  return <StyledBackground variant={variant}>{children}</StyledBackground>;
};
