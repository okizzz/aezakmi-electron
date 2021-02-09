import styled from "styled-components";

export const SidebarCompoonent = styled.div`
  position: fixed;
  width: 200px;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 3;
`;
export const LogoContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 38px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
  height: calc(100% - 60px);
`;
