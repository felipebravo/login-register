import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  border: 0;
  border-bottom: 2px solid var(--color-white);
  outline: none;
  width: 100%;
  font-size: 16px;
  font-family: monospace, sans-serif;
  color: var(--color-white);
  transition: all 0.3s ease-out;
  background-color: transparent;
  padding: 5px 0;

  ::placeholder {
    color: transparent;
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 0;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border-bottom: 2px solid var(--color-white);
    -webkit-text-fill-color: #fff !important;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const StyledInputLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 20px;
  transition: all 0.3s ease-out;
  color: var(--color-white);
`;

export const StyledInputDiv = styled.div`
  position: relative;

  width: 100%;
  padding-top: 13px;

  svg {
    position: absolute;
    right: 5px;
    top: 20px;

    color: var(--color-white);
    font-size: 20px;

    cursor: pointer;
  }
`;
