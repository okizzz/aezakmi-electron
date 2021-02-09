import { ITheme } from "./../../theme";
import styled from "styled-components";

export const NavigationComponent = styled.div`
  margin-left: 40px;
  display: flex;
  padding-top: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  border-bottom: 1px solid #f3f3f4;
  width: min-content;

  a {
    text-decoration: none;
  }
`;

interface IProps {
  link: string;
  currentLink: string;
  theme: ITheme;
}

export const Page = styled.div<IProps>`
  padding: 0 15px;
  border-radius: 4px 4px 0px 0px;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: ${({ link, currentLink }) =>
    currentLink.toLowerCase().includes(link.toLowerCase()) ? "#f3f3f4" : ""};
  color: ${({ theme }) => theme.colors.default};
`;

// .navigation {
//   margin-left: 40px;
//   display: flex;
//   padding-top: 20px;

//   nav {
//     display: flex;
//     border-bottom: 1px solid #f3f3f4;
//     width: min-content;

//     .page {
//       padding: 0 15px;
//       border-radius: 4px 4px 0px 0px;
//       height: 32px;
//       display: flex;
//       align-items: center;
//       color: #31353d;

//       &.selected {
//         background: #f3f3f4;
//       }
//     }
//   }

//   .buttons {
//     margin-left: 24px;
//     align-items: flex-end;

//     .button {
//       width: auto;
//     }

//     &.mass-start {
//       display: none;

//       .button.icon {
//         margin-left: 12px;
//       }
//     }

//     &.create,
//     &.check-proxy,
//     &.copy-token {
//       display: none;
//     }

//     &.mass-start.visible,
//     &.create.visible,
//     &.check-proxy.visible,
//     &.copy-token.visible {
//       display: flex;
//     }
//   }
// }
