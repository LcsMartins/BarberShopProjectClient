import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 70%;
  height: 100vh;
  margin-left:auto;
  margin-right:auto;
  padding-top: 1%;
  
`;
//background-color: ${({theme}) => theme.colors.mainPeach};
export const ContentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 21px;
`;

export const SugestaoSection = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    font-size: 1.3em;
    border: 2px solid #ccc;
    border-radius: 5px;
    align-items: center;
`  
export const Aviso = styled.a`
    text-decoration: none;
    font-size: 1em;
    margin-left: 15px;
`

export const ReserveButton = styled.a`
    border: 2px solid white;
    border-radius: 10px;
    padding: 12px;
    font-weight: 500;
    background-color: ${({theme})=>theme.colors.mainBlue};
    color: ${({theme})=>theme.colors.mainWhite};
    text-decoration: none;
    cursor: pointer;
`