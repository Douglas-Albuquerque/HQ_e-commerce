
import capaGen from "../Assets/capaGenerica.png"
import { CardText, ContainerImg, ImgCard, LiCards } from "./StylesCards"

const SimpleCard = ({title, imgUrl, price}) => {
  return (
    <div>
      <LiCards >
        <ContainerImg>
          <ImgCard src={(imgUrl === "")? capaGen : imgUrl } alt="" />
        </ContainerImg>
        <CardText>
          <p>{title}</p>
          <p>Price: ${price}</p>
        </CardText>
      </LiCards>
    </div>
  )
}

export default SimpleCard