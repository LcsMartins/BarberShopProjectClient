import styled from 'styled-components';

export const AppNavigation = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.mainBlue };
    width: 100vw;
    height: 100px;
`
//botao com p ou link
export const FirstSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 62,5%;
    font-size: 1em;
    padding-top: 15px;
    background-color: ${({theme})=>theme.colors.mainBlue};

`  
export const Title = styled.a`
    text-align: left;
    text-decoration: none;
    color: ${({theme})=>theme.colors.mainWhite};
    font-weight: 900;
    font-size: 1.5em;
`
export const Menu = styled.div`
    display: flex;
    gap:10px;
    margin-right: 15px;
`
export const MenuButton = styled.a`
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
    font-weight: 700;
    background-color: ${({theme})=>theme.colors.mainWhite};
    color: ${({theme})=>theme.colors.mainBlue};
    text-decoration: none;
    cursor: pointer;
`
