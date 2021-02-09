import styled from "styled-components";

export const ProfileComponent = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1px;
`;

export const CheckboxContainer = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Controls = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;

  & button {
    margin-right: 5px;
    &:last-child {
      margin-right: 15px;
    }
  }

  @media (max-width: 1100px) {
    align-self: center;
    height: 64px;
    flex-wrap: wrap;

    button {
      margin-right: 5px;
      &:last-child {
        margin-right: 5px;
      }
  }
`;

export const ProfileContent = styled.div`
  padding-left: 14px;
  height: 52px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 2fr 3fr 54px 3fr;

  &:hover {
    ${Controls} {
      display: flex;
    }
    border: 2px solid ${({ theme }) => theme.border.hover};
    z-index: 2;
  }

  p {
    margin-left: 22px;
  }

  @media (max-width: 1100px) {
    height: 100px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 22px;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  align-items: center;

  & button:last-child {
    margin-left: 10px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ProfileTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.default};
`;

export const Note = styled.p`
  display: flex;
  align-items: center;
  align-self: center;
  border: 1px solid #7b8aa8;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 4px 8px;
  margin-right: 15%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: #8b99b2;
`;

export const Proxy = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 16px;
  }
`;

export const ProxyStatus = styled.div`
  display: none;
  padding-left: 6px;
  padding-right: 8px;
  align-items: center;
  height: 28px;
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(49, 53, 61, 0.08);
`;

export const StatusIcon = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #59bd50;
  box-shadow: 0px 4px 8px rgba(49, 53, 61, 0.08);
  margin-left: 7px;
`;

//     .controls {
//       display: none;
//       align-items: center;
//       justify-content: flex-end;
//       padding-right: 12px;
//       padding-left: 30px;

//       .button {
//         margin-left: 16px;

//         &:first-of-type {
//           margin-left: 0;
//         }
//       }
//     }

//     &.selected {
//       border: 2px solid #7b8aa8;
//       z-index: 2;

//       .title p {
//         font-weight: 700;
//       }

//       .note {
//         display: flex;
//         align-items: center;
//         align-self: center;
//         border: 1px solid #7b8aa8;
//         box-sizing: border-box;
//         border-radius: 6px;
//         padding: 4px 8px;
//         margin-right: 15%;
//       }

//       .proxy {
//         .button {
//           display: none;
//         }

//         .status {
//           display: flex;
//         }
//       }

//       .controls {
//         display: flex;
//       }
//     }
//   }
// }

// @media (max-width: 1100px) {
//   .profile .profile-content {
//     height: 100px;

//     .title .buttons {
//       flex-direction: column;

//       .button {
//         margin-right: 0;
//         margin-bottom: 8px;

//         &:last-of-type {
//           margin-bottom: 0;
//         }
//       }
//     }

//     .controls {
//       align-self: center;
//       height: 64px;
//       flex-wrap: wrap;

//       .button {
//         margin-left: 8px;
//       }
//     }

//     .button.text-icon {
//       width: 28px;

//       span.text {
//         display: none;
//       }

//       img {
//         margin: 0;
//         padding-left: 2px;
//       }
//     }
//   }
// }
