import capaGen from "../../Assets/capaGenerica.png"
import { useNavigate } from "react-router-dom";
import { CardText, ContainerImg, ImgCard, LiCards } from "./StylesCards"

const SimpleCard = ({ title, imgUrl, price }) => {

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
      <LiCards >
        <ContainerImg>
          <ImgCard onClick={navDetail} src={imageCover} alt="" />
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