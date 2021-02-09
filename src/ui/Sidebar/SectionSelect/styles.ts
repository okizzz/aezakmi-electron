import styled from "styled-components";

export const SectionSelectComponent = styled.div`
  width: 100px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

interface IProps {
  active: boolean;
}

export const SelectOption = styled.div<IProps>`
  height: 36px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding-left: 13px;
  padding-right: 16px;
  font-size: 16px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ active }) => (active ? "#f3f3f4" : "")};
  font-weight: ${({ active }) => (active ? "700" : "normal")};
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
