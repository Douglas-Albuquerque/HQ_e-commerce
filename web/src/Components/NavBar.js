import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdShoppingCart, MdHome } from "react-icons/md";

import marvelLogo from '../Assets/Marvel_Logo.png'
import { NavButtons, LogoImg, NavStyle, ContainerUl, ListButtom } from './StylesNavBar';


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
      <NavStyle>
        <ContainerUl>
          <LogoImg onClick={navNotFound} src={marvelLogo} alt='logo da marvel' />
        </ContainerUl >
      </NavStyle>
      <NavButtons>
        <ContainerUl>
          <ListButtom>
            <p onClick={navNotFound}><MdHome /></p>
          </ListButtom>
          <ListButtom>
            <p onClick={navLogin}> <MdShoppingCart /></p>
          </ListButtom>
        </ContainerUl>
      </NavButtons>
    </div>

  )
}

export default NavBar