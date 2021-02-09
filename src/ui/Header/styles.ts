import styled from "styled-components";

export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 200px;
  height: 60px;
  width: calc(100% - 265px);
  margin: 0 25px 0 40px;
  border-bottom: 1px solid #f3f3f4;
  align-items: center;
  display: flex;
  justify-content: space-between;
  z-index: 3;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 12px;
    display: none;

    &.visible {
      display: block;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

// header {
//   position: fixed;
//   top: 0;
//   left: 200px;
//   height: 60px;
//   width: calc(100% - 265px);
//   margin: 0 25px 0 40px;
//   border-bottom: 1px solid #f3f3f4;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: #fff;
//   z-index: 3;

//   .title {
//     display: flex;
//     align-items: center;

//     img {
//       margin-right: 12px;
//       display: none;

//       &.visible {
//         display: block;
//       }
//     }
//   }

//   .profile-container {
//     display: flex;
//     align-items: center;

//     .add-new {
//       margin-right: 20px;
//     }
//   }
// }
