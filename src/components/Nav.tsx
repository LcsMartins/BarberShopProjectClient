import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
        <p>Navegação</p>
        <a href="/home" className="Home">Minhas reservas</a>
        <a href="" className="Reservar">Reservar Horario</a>
        <a href="" className="Conta">Minha conta</a>
        <a href="" className="deslogar">Sair</a>
    </div>
  );
}

export default Nav;