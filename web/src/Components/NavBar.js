import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdShoppingCart, MdHome } from "react-icons/md";

import marvelLogo from '../Assets/Marvel_Logo.png'
import { Nav, Ul, NavButtons, LogoImg, Li } from './StylesNavBar';


const NavBar = () => {

  const navigateReg = useNavigate();
  const navigateLog = useNavigate();
  const navigateNot = useNavigate();

  const navRegister = () => {
    navigateReg('/register')
  }
  const navLogin = () => {
    navigateLog('/')
  }
  const navNotFound = () => {
    navigateNot('/*')
  }

  return (
    <div>
      <Nav>
        <Ul>
          <LogoImg onClick={navNotFound} src={marvelLogo} alt='logo da marvel' />
        </Ul >
      </Nav>
      <NavButtons>
        <Ul>
          <Li>
            <p onClick={navNotFound}><MdHome /></p>
          </Li>
          <Li>
            <p onClick={navLogin}> <MdShoppingCart /></p>
          </Li>
        </Ul>
      </NavButtons>
    </div>

  )
}

export default NavBar