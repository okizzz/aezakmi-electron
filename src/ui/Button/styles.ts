import styled from "styled-components";

interface IProps {
  variant: "outlined" | "default";
  text: null | string;
  icon: null | string;
}

// TODO: Посмотреть что еще можно запихнуть в нужные мне компоненты
const Button = styled.button<IProps>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  margin: 0;
  height: 28px;
  padding: 0 10px;
  width: ${({ icon, text }) => (icon && !text ? "28px" : "min-content")};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px 0px rgba(49, 53, 61, 0.08);
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid #f3f3f4" : "none"};
  background: ${({ variant, theme }) =>
    variant === "outlined" ? " #FFF" : theme.colors.yellow};

  img {
    margin-left: ${({ text }) => (!text ? "0px" : "5px")};
  }

  &:hover {
    background: ${({ variant, theme }) =>
      variant === "outlined" ? theme.colors.yellow : ""};
  }
`;

export default Button;
// .button {
//   font-size: 12px;
//   font-weight: 700;
//   border-radius: 6px;
//   cursor: pointer;
//   margin: 0;
//   height: 28px;
//   padding: 0 10px;
//   border: none;
//   width: min-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &.main {
//     background: #f9de53;
//     box-shadow: 0px 4px 8px 0px rgba(49, 53, 61, 0.08);
//   }

//   &.icon {
//     background: #fff;
//     box-shadow: 0px 4px 8px rgba(37, 51, 75, 0.08);
//     width: 28px;
//     border: 1px solid #f3f3f4;
//   }

//   &.text-icon {
//     img {
//       margin-left: 7px;
//     }
//   }

//   &.outlined {
//     background: #ffffff;
//     border: 1px solid #f3f3f4;
//     box-shadow: 0px 4px 8px rgba(49, 53, 61, 0.08);
//   }

//   &.outlined-yellow {
//     background: #fff;
//     border: 2px solid #f9de53;
//     width: auto;
//   }

//   &.selected {
//     background: #f9de53;
//     border: none;
//   }

//   &.hidden {
//     display: none;
//   }
// }
