import styled from 'styled-components';

//falta deixar a parte circular da second section, pegar um azul mais escuro, estilizar nos botões registrar e logar
export const AppNavigation = styled.div` //perguntar dessa sintaxe
    background-color: ${({theme}) => theme.colors.mainBlue};
    width: 100vw;
    height: 300px;
    position: fixed;
`
//botao com p ou link
export const FirstSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 25%;
    font-size: 1em;
    align-items: start;
    margin-left: auto;
    margin-right: auto;
    padding-top: 25px;
`  
export const Title = styled.a`
    text-align: left;
    text-decoration: none;
    color: #fff;
    font-weight: 900;
    font-size: 1.5em;
`
export const Menu = styled.div`
`
export const MenuButton = styled.button`
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
    margin-left:1.25em;
`
//usar flex wrap nos cards de reservas
export const SecondSection = styled.div`
    gap: 20px;
    text-align: left;
    width: 70%;
    height: 40%;
    font-size: 1.25em;
    margin-left: auto;
    margin-right: auto;
`  
// perguntar do por que padding: 10px da ruim
export const Link = styled.a`
    margin-right: 1.25em;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    font-size: 20x;
    width: 70%;

    &:hover{
        background-color: ${({theme}) => theme.colors.thirdBlue};
        border-radius: 10px;
        padding: 10px
    }
`
export const IndicadorPagina = styled.a`
    margin-right: 1.25em;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    font-size: 20x;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;

    background-color:${({theme}) => theme.colors.secondBlue};
`

export const ThirdSection = styled.div`
    text-align: left;
    width: 70%;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
` 
//perguntar da duvida do font-size em cima 1.5em ser maior

export const BemVindo = styled.a`
    font-weight: 750;
    font-size: 2em;
`

export const Wrapper = styled.span`
    height: 1px;
    width: 80%;
    background-color: #fff;
`
