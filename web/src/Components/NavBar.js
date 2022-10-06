import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdShoppingCart, MdHome } from "react-icons/md";

import "./NavBar.css"
import marvelLogo from '../Assets/Marvel_Logo.png'


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
    <nav className='navBar'>
      <ul className='list'>
        <img className='logoImage' onClick={navNotFound} src={marvelLogo} alt='logo da marvel' />
      </ul >
    </nav>
    <nav className='navButtons'>
        <ul className='list'>
      <li className='item'>
          <p onClick={navNotFound}><MdHome/></p>
        </li>
        <li className='item'>
          <p onClick={navLogin}> <MdShoppingCart /></p>
        </li>
      </ul>
    </nav>
    </div>

  )
}

export default NavBar