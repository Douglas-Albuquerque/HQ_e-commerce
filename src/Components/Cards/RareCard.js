import capaGen from "../../Assets/capaGenerica.png"
import { useNavigate } from "react-router-dom";
import { CardText, ContainerImg, ImgCard, LiRareCard, RareTicket, TextRare } from "./StylesCards"

const RareCard = ({ title, imgUrl, price, id }) => {

  let imageCover = ""
  if (imgUrl[0] === undefined) {
    imageCover = capaGen
  } else {
    imageCover = imgUrl[0].path + ".jpg"
  }
  if (price === 0) {
    price = 0.99
  }
  const navigateDetail = useNavigate();

  const navDetail = () => {
    navigateDetail('/detail')
  }
  

  return (
    <div>
      <LiRareCard>
        <RareTicket>
          <TextRare>Raro</TextRare>
        </RareTicket>
        <ContainerImg>
          <ImgCard onClick={navDetail} src={imageCover} alt=""/>
        </ContainerImg>
        <CardText>
          <p>{title}</p>
          <p>Price:${price}</p>
        </CardText>
      </LiRareCard>
    </div>
  )
}

export default RareCard