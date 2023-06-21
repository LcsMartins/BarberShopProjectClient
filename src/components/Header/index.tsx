import React, {useEffect, useState} from 'react';
import { AppNavigation,   FirstSection, Title, Menu, MenuButton } from './style';
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
                { url === '/login' ? (<MenuButton href="/register">Registrar</MenuButton>) : (<MenuButton href="/login">Logar</MenuButton>)}
                </Menu>
            </FirstSection>
        </AppNavigation>
  );
}

export default Nav;