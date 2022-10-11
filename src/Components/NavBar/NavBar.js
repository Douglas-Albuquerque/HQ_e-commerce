import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { MdShoppingCart, MdHome } from "react-icons/md";


import marvelLogo from '../../Assets/Marvel_Logo.png'
import { NavButtons, LogoImg, NavStyle, ContainerUl, ListButtom } from './StylesNavBar';
import ModalShoppingCart from '../Modal/ModalShoppingCart';



const NavBar = () => {

  const [visibleShoppingCart, setvisibleShoppingCart] = useState(false);
  const navigateNot = useNavigate();

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
            <p onClick={() => setvisibleShoppingCart(true)}><MdShoppingCart /></p>
            {(visibleShoppingCart)
              ? <ModalShoppingCart onClose={() => setvisibleShoppingCart(false)} />
              : null}
          </ListButtom>
        </ContainerUl>
      </NavButtons>
    </div>

  )
}

export default NavBar