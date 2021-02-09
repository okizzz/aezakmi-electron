import styled from "styled-components";

export const ButtonsList = styled.div`
  display: none;
  transition: 0.2s ease;

  & button {
    margin: 0 8px;
  }
`;

export const AddNewComponent = styled.div`
  display: flex;
  position: relative;

  &:hover {
    ${ButtonsList} {
      transition: 0.2s ease;
      display: flex;
    }
  }
`;
