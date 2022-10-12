import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import ShoppingCart from "../Modal/ShoppingCart"

import marvelLogo from '../../Assets/Marvel_Logo.png'
import { NavButtons, LogoImg, NavStyle, ContainerUl, ListButtom } from './StylesNavBar';


const NavBar = () => {

  const navigateHome = useNavigate();

  const navHome = () => {
    navigateHome('/')
  }

  return (
    <div>
      <NavStyle>
        <ContainerUl>
          <LogoImg onClick={navHome} src={marvelLogo} alt='logo da marvel' />
        </ContainerUl >
      </NavStyle>
      <NavButtons>
        <ContainerUl>
          <ListButtom>
            <p onClick={navHome}><MdHome /></p>
          </ListButtom>
          <ListButtom>
            <ShoppingCart />
          </ListButtom>
        </ContainerUl>
      </NavButtons>
    </div>

  )
}

export default NavBar