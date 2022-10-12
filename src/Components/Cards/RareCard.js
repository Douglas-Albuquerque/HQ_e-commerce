import capaGen from "../../Assets/capaGenerica.png"
import { useNavigate } from "react-router-dom";
import { CardText, ContainerImg, ImgCard, LiRareCard, RareTicket, TextRare } from "./StylesCards"

const RareCard = ({ id, title, imgUrl, price, pageCount, description }) => {


  let imageCover = ""
  let pricing = ""
  let viewPageCount = ""
  let descrip = ""
  { (imgUrl[0] === undefined) ? imageCover = capaGen : imageCover = imgUrl[0].path + ".jpg" }
  { (price === 0) ? pricing = 0.13 : pricing = price }
  { (pageCount === undefined) ? viewPageCount = "unknown" : viewPageCount = pageCount }
  { (description === "") ? descrip = "unknown" : descrip = description }
  const navigateDetail = useNavigate();

  const array = [{ pricing, descrip, title }]

  const navDetail = () => {
    navigateDetail(
      `/detail/${id}`);
  }

  return (
    <div>
      <LiRareCard>
        <RareTicket>
          <TextRare>Raro</TextRare>
        </RareTicket>
        <ContainerImg>
          <ImgCard id="img" onClick={navDetail} src={imageCover} alt="" />
        </ContainerImg>
        <CardText>
          <p>{title}</p>
          <p>Price:${pricing}</p>
        </CardText>
      </LiRareCard>
    </div>
  )
}

export default RareCard