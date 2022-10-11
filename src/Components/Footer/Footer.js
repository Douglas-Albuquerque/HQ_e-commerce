import { EncorpText, FooterContainer, Icons, SocialIcons } from "./StylesFooter"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Icons href="https://www.linkedin.com/in/douglas-albuquerque-739531a6/" target="_blank">
          <AiFillLinkedin />
        </Icons>
        <Icons href="https://github.com/Douglas-Albuquerque" target="_blank">
          <AiFillGithub />
        </Icons>
      </SocialIcons>
      <EncorpText>
        <p>Marvel Comics</p>&copy;
      </EncorpText>
    </FooterContainer>
  )
}

export default Footer