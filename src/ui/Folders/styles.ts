import styled from "styled-components";

export const FoldersComponent = styled.div`
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
  grid-template-columns: 2fr 1fr 4fr 2fr;

  h2 {
    display: flex;
    align-items: flex-end;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 5px;
  }
`;

export const AddContainer = styled.div`
  margin-top: 16px;
  margin-left: 40px;
`;

export const Users = styled.p`
  display: flex;
  align-items: center;
  margin-left: 20%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: #8b99b2;
`;

export const FingerprintNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: #8b99b2;
`;

// .folders {
//   margin-top: 20px;

//   .title-container {
//     display: flex;
//     align-items: flex-end;
//     margin-bottom: 16px;

//     .title {
//       width: 100%;
//       margin-left: 14px;
//       display: grid;
//       grid-template-columns: 2fr 1fr 4fr 2fr;

//       h2 {
//         display: flex;
//         align-items: flex-end;
//       }

//       p {
//         display: flex;
//         align-items: flex-end;

//         &.fingerprints-number {
//           justify-content: center;
//         }

//         &.users {
//           margin-left: 20%;
//         }
//       }

//       .buttons {
//         display: flex;
//         justify-content: flex-end;

//         .button {
//           margin-left: 16px;
//         }
//       }
//     }
//   }

//   .checkbox {
//     width: 40px;
//     height: 40px;
//     display: flex;
//     align-items: flex-end;
//     justify-content: center;
//   }

//   .add {
//     margin-top: 16px;
//     margin-left: 40px;
//   }
// }
