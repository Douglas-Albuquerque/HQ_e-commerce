import capaGen from "../../Assets/capaGenerica.png"
import { useNavigate } from "react-router-dom";
import { CardText, ContainerImg, ImgCard, LiCards, PurchaseButtom } from "./StylesCards"
import ShoppingCart from "../Modal/ShoppingCart";

const SimpleCard = ({ id, title, imgUrl, price }) => {

  let imageCover = ""
  let pricing = ""
  if (imgUrl[0] === undefined) {
    imageCover = capaGen
  } else {
    imageCover = imgUrl[0].path + ".jpg"
  }
  if (price === 0) {
    pricing = 0.13
  } else {
    pricing = price
  }
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
          <PurchaseButtom>
            <ShoppingCart id={id} title={title} price={pricing} image={imageCover} />
          </PurchaseButtom>
        </CardText>
      </LiCards>
    </div>
  )
}

export default SimpleCard