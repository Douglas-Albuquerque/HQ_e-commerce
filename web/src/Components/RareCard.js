
import capaGen from "../Assets/capaGenerica.png"
import { CardText, ContainerImg, ImgCard, LiRareCard, RareTicket, TextRare } from "./StylesCards"

const RareCard = ({ title, imgUrl, price }) => {

  let imageCover = ""
  if (imgUrl[0] === undefined) {
    imageCover = capaGen
  } else {
    imageCover = imgUrl[0].path + ".jpg"
  }
  if(price === 0){
    price = 0.99
  }

  return (
    <div>
      <LiRareCard>
        <RareTicket>
          <TextRare>Raro</TextRare>
        </RareTicket>
        <ContainerImg>
          <ImgCard src={imageCover} alt="" />
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