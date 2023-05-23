import React from 'react';
import { AppNavigation, Link, SecondSection, FirstSection, Title, Menu, MenuButton, ThirdSection, BemVindo, IndicadorPagina } from './style';

const Nav = () => {
  return (
        <AppNavigation>

            <FirstSection>
                <Title href="/home" >Barbearia.App</Title>
                <Menu>
                  <MenuButton >Registrar</MenuButton>
                  <MenuButton >Logar</MenuButton>
                </Menu>
            </FirstSection>

            <SecondSection>
                <IndicadorPagina href="/home" className="Home">Minhas reservas</IndicadorPagina>
                <Link href="" className="Reservar">Reservar Horario</Link>
                <Link href="" className="Conta">Minha conta</Link>
            </SecondSection>

            <ThirdSection>
                <BemVindo>Bem vindo</BemVindo>
                <p>Exibindo suas reservas existentes</p>
            </ThirdSection>
        </AppNavigation>
  );
}

export default Nav;
