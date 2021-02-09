import styled from "styled-components";

export const ProfielsComponents = styled.div`
  margin-top: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  width: 100%;
  margin-left: 14px;
  display: grid;
  grid-template-columns: 4fr 4fr 60px 5fr;

  h2 {
    display: flex;
    align-items: flex-end;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 5px;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Note = styled.p`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: #8b99b2;
`;

export const Proxy = styled.p`
  display: flex;
  align-items: center;
`;

export const AddContainer = styled.div`
  margin-top: 16px;
  margin-left: 40px;
`;
