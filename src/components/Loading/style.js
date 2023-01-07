import styled from "styled-components";

export const Loading = styled.h1`
  width: 30px;
  height: 30px;

  margin: 0;

  border: 2px solid #acacac;
  border-radius: 50%;
  border-top-color: var(--color-white);

  animation: is-rotating 1s linear infinite;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
