import styled from "styled-components";

export const Controls = styled.div`
  display: none;
`;

export const Title = styled.p``;

export const FolderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1px;
  cursor-pointer;

  p {
    display: flex;
    align-items: center;
    height: 50px;
  }
`;

export const Checkbox = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FolderContent = styled.div`
  padding-left: 14px;
  height: 50px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 2fr 1fr 4fr 2fr;

  &:hover {
    border: 2px solid ${({ theme }) => theme.border.hover};
    z-index: 2;

    ${Controls} {
      display: flex;
    }

    ${Title} {
      font-weight: 700;
    }
  }
`;

export const Users = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 20%;

  img {
    width: 36px;
    height: 36px;
    border: 1px solid #e7e9f0;
    border-radius: 50%;
    margin-left: -18px;

    &:first-of-type {
      margin-left: 0;
    }

    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

export const Amount = styled.p`
  width: 32px;
  justify-content: center;
  margin-right: 15px;
`;

export const Names = styled.div`
  margin-left: 10px;
`;

export const FingerprintNumber = styled.p`
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
  color: #8b99b2;
`;

// .folder {
//   display: flex;
//   align-items: center;
//   margin-top: -1px;

//   .checkbox {
//     width: 40px;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .folder-content {
//     padding-left: 14px;
//     height: 50px;
//     width: 100%;
//     border: 1px solid #e7e9f0;
//     border-radius: 4px;
//     display: grid;
//     grid-template-columns: 2fr 1fr 4fr 2fr;

//     p,
//     .users {
//       display: flex;
//       align-items: center;
//       height: 50px;

//       &.fingerprints-number {
//         justify-content: center;
//       }
//     }

//     .users {
//       margin-left: 20%;

//       .amount {
//         width: 32px;
//         justify-content: center;
//         margin-right: 15px;
//       }

//       img {
//         width: 36px;
//         height: 36px;
//         border: 1px solid #e7e9f0;
//         border-radius: 50%;
//         margin-left: -18px;

//         &:first-of-type {
//           margin-left: 0;
//         }

//         &:nth-child(n + 4) {
//           display: none;
//         }
//       }

//       .names {
//         margin-left: 10px;
//       }
//     }

//     .controls {
//       display: none;
//     }

//     &.selected {
//       border: 2px solid #7b8aa8;
//       z-index: 2;

//       .title {
//         font-weight: 700;
//       }

//       .controls {
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;
//         padding-right: 12px;

//         .button {
//           margin-left: 16px;

//           &:first-of-type {
//             margin-left: 0;
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 1280px) {
//   .folder .folder-content .users .names {
//     display: none;
//   }
// }

// @media (max-width: 1100px) {
//   .folder .folder-content {
//     height: 100px;
//     align-items: center;

//     .users .names {
//       display: none;
//     }

//     .controls {
//       align-self: center;
//       height: 64px;
//       flex-wrap: wrap;

//       .button {
//         margin-left: 8px;
//       }
//     }
//   }
// }
