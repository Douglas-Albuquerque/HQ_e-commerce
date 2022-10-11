import styled from 'styled-components'


export const FooterContainer = styled.footer`
  display: flex;
  color: white;
  height: 2rem;
  padding: 1em;
  font-family: 'Playfair Display', serif;
  background: rgb(32, 27, 27);
  background: radial-gradient(
    circle,
    rgba(32, 27, 27, 1) 0%,
    rgba(120, 95, 95, 1) 46%,
    rgba(50, 45, 45, 0.9615196420365021) 100%
  );
`
export const SocialIcons = styled.ul`
  display: flex;
  flex: 1;
  justify-content: Start;
  list-style: none;
  font-size: 1.5rem;
  align-items: center;
  margin: 5px 35px 0 0;
`
export const Icons = styled.a`
  margin-left: 1rem;
  text-decoration: none;
  color: #FFFFFF;
  &:hover{
    color: red;
    cursor: pointer;
  }

`
export const EncorpText = styled(SocialIcons)`
  justify-content: end;
  font-size: 0.8rem;
  align-items: baseline;
  font-family: 'Roboto', sans-serif;
`