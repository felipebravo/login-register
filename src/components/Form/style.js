import styled, { css } from "styled-components";

const FormBackgroundVariations = {
  login: css`
    height: 400px;
  `,
  sign: css`
    height: 600px;
  `,
};

export const Form = styled.form`
  ${({ variant }) => FormBackgroundVariations[variant]}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 500px;

  padding: 20px;

  border-radius: 8px;
  box-shadow: 0px 0px 5px 5px rgba(248, 248, 255, 1);

  @media (max-width: 510px) {
    width: 90vw;
    text-align: center;
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 70%;

  @media (max-width: 370px) {
    width: 100%;
  }
`;
