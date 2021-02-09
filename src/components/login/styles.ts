import styled from "styled-components";
import { ITheme } from "../../theme";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 300px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  margin-top: 50px;

  input {
    width: 100%;
    margin-bottom: 23px !important;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  button {
    margin-bottom: 15px;
  }
`;

export const RegisterButton = styled.button`
  color: ${({ theme }) => theme.colors.navyBlue};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
