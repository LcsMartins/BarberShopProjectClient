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
                { url === '/login' ? (<MenuButton >Registrar</MenuButton>) : (<MenuButton >Logar</MenuButton>)}
                </Menu>
            </FirstSection>
        </AppNavigation>
  );
}

export default Nav;