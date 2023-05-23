import React from 'react';
import { AppNavigation, Link, SecondSection, Page, FirstSection, Title, Menu, MenuButton } from './style';

const Nav = () => {
  return (
    <Page>
        <AppNavigation>

            <FirstSection>
                <Title href="/home" >Barbearia.App</Title>
                <Menu>
                  <MenuButton >Registrar</MenuButton>
                  <MenuButton >Logar</MenuButton>
                </Menu>
            </FirstSection>

            <SecondSection>
                <Link href="/home" className="Home">Minhas reservas</Link>
                <Link href="" className="Reservar">Reservar Horario</Link>
                <Link href="" className="Conta">Minha conta</Link>
            </SecondSection>

            <SecondSection>
                <Link href="" className="Reservar">terceira</Link>
            </SecondSection>
        </AppNavigation>
    </Page>
  );
}

export default Nav;
