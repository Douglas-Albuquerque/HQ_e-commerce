import styled from 'styled-components'

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  max-height: 5.6rem;
  background-image: url('https://imgs.extra.com.br/1517619252/1xg.jpg');

`;
export const ContainerUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  color: #ffffff;

`;
export const NavButtons = styled(NavStyle)`
  max-height: 1.8rem;
  background: rgb(32, 27, 27);
  background: radial-gradient(
    circle,
    rgba(32, 27, 27, 1) 0%,
    rgba(120, 95, 95, 1) 46%,
    rgba(50, 45, 45, 0.9615196420365021) 100%
  );
`
export const LogoImg = styled.img`
  width: 11.2rem;
  height: 5.6rem;
  cursor: pointer;
  margin-right: 4rem;
`
export const ListButtom = styled.li`
  margin-right: 4.3rem;
  font-size: 1.8rem;
  cursor: pointer;
  align-items: center;
  margin-top: 0.3rem;
  &:hover{
    cursor: poiter;
    color: red;
  }
`