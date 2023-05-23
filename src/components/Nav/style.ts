import styled from 'styled-components';

export const Page = styled.div`
    background-color: ${({theme}) => theme.colors.mainBlue};
    width: 100vw;
    height: 300px;
    position: fixed;
`
export const AppNavigation = styled.div`
    display:grid;
    grid-template-rows: repeat(3, 1fr);
    font-size: 40px;
    width: 100vw;
    height: 300px;
    position: fixed;
`
//botao com p ou link
export const FirstSection = styled.div`
    display: flex;
    width: 60%;
    height: 40%;
    font-size: 20px;
    align-items: start;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
`  
export const Title = styled.a`
    text-align: left;
    text-decoration: none;
    color: #fff;
    font-weight: 900;
    font-size 25px;
    width: 200px;
    height: 100px;
`
export const Menu = styled.div`
    margin-left: 500px;
    background-color: red; 
    gap: 10px;
`
export const MenuButton = styled.button`
    border: 2px solid white;
    border-radius: 2px;
    padding: 10px;
`

export const SecondSection = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 20px;
    align-items: top;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
`  


export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    font-size: 20x;
    width: 70%;
    &:hover{
        box-shadow: 0 0 10px blue
    }
`

export const Wrapper = styled.span`
    height: 1px;
    width: 80%;
    background-color: #fff;
`
