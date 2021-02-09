import styled from "styled-components";

export const Dropdown = styled.div`
  border: 1px solid #f3f3f4;
  box-shadow: 0px 4px 8px rgba(37, 51, 75, 0.08);
  border-radius: 6px;
  position: absolute;
  background: #fff;
`;

export const DropdownOption = styled.div`
  font-size: 12px;
  padding: 6px 12px;
  color: #000;
  cursor: pointer;
  text-align: left;
  font-weight: 400;

  &:hover {
    background: #f3f3f4;
  }
`;

// .dropdown {
//   border: 1px solid #f3f3f4;
//   box-shadow: 0px 4px 8px rgba(37, 51, 75, 0.08);
//   border-radius: 6px;
//   position: absolute;
//   background: #fff;

//   .dropdown-option {
//     font-size: 12px;
//     padding: 6px 12px;
//     color: #000;
//     cursor: pointer;
//     text-align: left;
//     font-weight: 400;

//     &:hover {
//       background: #f3f3f4;
//     }
//   }
// }
