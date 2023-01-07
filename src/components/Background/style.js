import styled, { css } from "styled-components";

const BackgroundVariations = {
  login: css`
    background: linear-gradient(
      -45deg,
      var(--primary-orange),
      var(--primary-pink),
      var(--primary-blue),
      var(--primary-green)
    );
  `,
  sign: css`
    background: linear-gradient(
      45deg,
      var(--primary-orange),
      var(--primary-pink),
      var(--primary-blue),
      var(--primary-green)
    );
  `,
  dashboard: css`
    background: linear-gradient(
      135deg,
      var(--primary-orange),
      var(--primary-pink),
      var(--primary-blue),
      var(--primary-green)
    );
  `,
};

export const StyledBackground = styled.main`
  ${({ variant }) => BackgroundVariations[variant]}

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-size: 400% 400%;
  animation: bg-gradient 15s ease infinite;

  @keyframes bg-gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
