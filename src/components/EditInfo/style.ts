import styled from 'styled-components';
import { MdClose } from "react-icons/md";

export const Background = styled.div`
    width:100%;
    height:100%
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    top: 150px;
    left: 0;
    z-index: 1000;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
  width: 700px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #141414;

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  p{
    color: red;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const EditButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3em;
    font-weight: 700;
    padding: 0;
    color: ${({theme})=>theme.colors.mainBlue};
`