import React, {useEffect, useState} from 'react';
import { AppNavigation, Link, SecondSection, FirstSection, Title, Menu, MenuButton, ThirdSection, BemVindo, IndicadorPagina } from './style';
import { useUser } from '../../utils/useUser';
const Nav = () => {
  const [url, setUrl] = useState(window.location.pathname);
  
  useEffect(() => {
    setUrl(window.location.pathname);
  },[]);

  useEffect(() => {
    console.log(url);
  },[url]);
  
  //funcao devolve user e setUser, por isso precisa desestrutrar
  // para logar usa o setUser, por meio da desestruturacao msm
  const {user} = useUser()
  
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
                { url === '/home' || url === '/'  ? (<IndicadorPagina href="/home" className="Home">Minhas reservas</IndicadorPagina>) : (<Link href="/home" className="Home">Minhas reservas</Link>)}
                { url === '/reservar' ? (<IndicadorPagina href="/reservar" className="Reservar">Reservar Horario</IndicadorPagina>) : (<Link href="/reservar" className="Reservar">Reservar Horario</Link>)}
                { url === '/conta' ? (<IndicadorPagina href="/conta" className="Conta">Minha conta</IndicadorPagina>) : (<Link href="/conta" className="Conta">Minha conta</Link>)}
            </SecondSection>

            <ThirdSection>
                <BemVindo>Bem vindo, {user?.name} </BemVindo>
                <p>Exibindo suas reservas</p>
            </ThirdSection>
        </AppNavigation>
  );
}

export default Nav;