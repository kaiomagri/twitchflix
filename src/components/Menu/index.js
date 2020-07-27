import React from 'react';

import Logo from '../../assets/img/Logo.png'
import ButtonLink from '../Button'

import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img className="Logo" src={Logo} alt="Twitchflix Logo"/>
      </a>

      <ButtonLink as="a" className="ButtonLink" href="">
        Novo Video
      </ButtonLink>
    </nav>
  )
}

export default Menu;