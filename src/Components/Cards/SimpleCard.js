import { useNavigate } from "react-router-dom";
import capaGen from "../../Assets/capaGenerica.png"
import { CardText, ContainerImg, ImgCard, LiCards } from "./StylesCards"

const SimpleCard = ({title, imgUrl, price}) => {
  const navigateDetail = useNavigate();

  const navDetail = () => {
    navigateDetail('/detail')
  }
  return (
    <div>
      <LiCards >
        <ContainerImg>
          <ImgCard onClick={navDetail} src={(imgUrl === "")? capaGen : imgUrl } alt="" />
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