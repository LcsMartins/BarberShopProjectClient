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
    height: 70px;
    width: 100%;
    font-size: 1.3em;
    border: 2px solid #ccc;
    border-radius: 5px;
    align-items: center;
`  
export const Section = styled.select`
    width: 23%;
    height: 100%;
    text-align: left;
    padding-left:10px;
    font-size: 1em;
`
export const SectionBigger = styled(Section)`
    width: 28%;
    
`
export const ReservaButton = styled.button`
    align-items: center;
    height: 100%;
    width: 26%;
    background-color: ${({theme})=>theme.colors.skyBlue}
`
export const ButtonText = styled.p`
    color: ${({theme})=>theme.colors.mainWhite};
    font-size: 1.3em;
    font-weight: 900;
`