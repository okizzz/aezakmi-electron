import styled from 'styled-components';

const InputComponent = styled.div`
  position: relative;
  input {
    appearance: none;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #e7e9f0;
    outline: none;
    padding: 0 10px;
    font-size: 14px;
    width: 100%;
  }

  p {
    position: absolute;
    top: -9px;
    left: 10px;
    font-size: 12px;
    color: #8b99b2;
    padding: 0 3px;
    background: #fff;
  }
`;

export default InputComponent;
