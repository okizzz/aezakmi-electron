import styled from "styled-components";

export const CheckboxComponent = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #e7e9f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:checked {
      border-color: #f9de53;

      &:after {
        content: "✓";
        color: #31353d;
        font-weight: 700;
        font-size: 12px;
      }

      & + label {
        font-weight: 700;
      }
    }
    label {
      margin-left: 11px;
      cursor: pointer;
    }
  }
`;
