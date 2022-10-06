import React from 'react'
import { useNavigate } from "react-router-dom";

import "./NavBar.css"
import marvelLogo from '../Assets/Marvel_Logo.png'
import avatarImg from '../Assets/Marvel_Logo.png'

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
    <nav className='navBar'>
      <ul className='list'>
        <li>
          <img className='avatarImg' onClick={navNotFound} src={marvelLogo} alt='logo da marvel' />
        </li>
        <li className='item'>
          <p onClick={navNotFound}>Home</p>
        </li>
        <li className='item'>
          <p onClick={navRegister}>HQ's</p>
        </li>
        <li className='item'>
          <p onClick={navLogin}>Perfil</p>
        </li>
      </ul>
      <img className='avatarImg' onClick={navNotFound} src={avatarImg} alt='foto do usuário' />

    </nav>

  )
}

export default NavBar