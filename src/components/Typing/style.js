import styled from "styled-components";

export const Typing = styled.div`
  display: inline-block;
  width: fit-content;

  margin-bottom: 20px;

  h1 {
    overflow: hidden;
    border-right: 0.08em solid white;
    white-space: nowrap;
    width: 0;
    animation: typing 3s steps(20, end) forwards, blink 1s infinite;
    color: var(--color-white);
    font-family: monospace, sans-serif;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: white;
    }
  }
`;
