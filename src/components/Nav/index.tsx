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
                { url === '/reserve' ? (<IndicadorPagina href="/reserve" className="Reserve">Reservar Horario</IndicadorPagina>) : (<Link href="/reserve" className="Reserve">Reservar Horario</Link>)}
                { url === '/account' ? (<IndicadorPagina href="/Account" className="Conta">Minha conta</IndicadorPagina>) : (<Link href="/account" className="Account">Minha conta</Link>)}
            </SecondSection>

            <ThirdSection>
                
                { url === '/home' || url === '/'  ? (<div><BemVindo>Bem vindo, {user?.name} </BemVindo> <p>Exibindo suas reservas</p></div>) : null }
                { url === '/reserve' ? (<div> <p>Selecione o profissional e horário de sua preferência</p></div>) : null}
                { url === '/account' ? (<div> <p>Exibindo suas informações e dados pessoais</p></div>) : null}
            </ThirdSection>
        </AppNavigation>
  );
}

export default Nav;