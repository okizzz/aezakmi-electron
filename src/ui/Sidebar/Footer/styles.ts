import styled from 'styled-components';

export const FooterComponent = styled.footer`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 25px;
    color: #31353d;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Version = styled.div`
  margin-top: 37px;
`;
