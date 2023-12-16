import styled from "styled-components";

// interface IContainerProps {
//   isFocused: boolean;
//   isFilled: boolean;
// }

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  /* input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }
  } */

  svg {
    margin-right: 16px;
  }
`;

export const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  color: #202020;

  &::placeholder {
    color: #b7b7cc;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8em;
  margin-top: 4px;
`;
