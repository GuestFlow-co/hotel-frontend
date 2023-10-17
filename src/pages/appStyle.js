import styled from 'styled-components';


export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100
`;

export const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 60%;
  height: 70%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 50%;
  background: brown;
  border: none;
  cursor: pointer;
`;
