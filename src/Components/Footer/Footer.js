import { DeveloperText, FooterContainer, Icons, SocialIcons } from "./StylesFooter"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Icons>
          <AiFillLinkedin />
        </Icons>
        <Icons>
          <AiFillGithub />
        </Icons>
      </SocialIcons>
      <DeveloperText>
        <p>Marvel Comics</p>&copy;
      </DeveloperText>
    </FooterContainer>
  )
}

export default Footer