import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 70%;
  margin-left:auto;
  margin-right:auto;
  padding-top: 0.5%;
`;

export const Card = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0.5px 0px #888, 0px -0.5px 0px #888;
`;

export const ContentContainer = styled.div`
    display:flex;
    padding-left: 20px;
    text-align: left;
`
export const FirstColumn = styled.div`
    width: 15vw;
`
export const SecondColumn = styled.div`
    width: 40vw;
`
export const EditLink = styled.a`
    font-size: 1.3em;
    font-weight: 700;
    padding-right: 20px;
    color: ${({theme})=>theme.colors.mainBlue};
`

export const Wrapper = styled.span`
    height: 100px;
    width: 100%;
    background-color: #ffff;
    color: #ffff;
`;
