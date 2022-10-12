import capaGen from "../../Assets/capaGenerica.png"
import { useNavigate } from "react-router-dom";
import { CardText, ContainerImg, ImgCard, LiCards } from "./StylesCards"

const SimpleCard = ({ id, title, imgUrl, price }) => {

  let imageCover = ""
  let pricing = ""
  { (imgUrl[0] === undefined) ? imageCover = capaGen : imageCover = imgUrl[0].path + ".jpg" }
  { (price === 0) ? pricing = 0.13 : pricing = price }
  const navigateDetail = useNavigate();

  const navDetail = () => {
    navigateDetail(
      `/detail/${id}`);
  }

  return (
    <div>
      <LiCards >
        <ContainerImg>
          <ImgCard onClick={navDetail} src={imageCover} alt="" />
        </ContainerImg>
        <CardText>
          <p>{title}</p>
          <p>Price: ${pricing}</p>
        </CardText>
      </LiCards>
    </div>
  )
}

export default SimpleCard