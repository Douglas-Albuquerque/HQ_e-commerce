import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { BodyContainer } from "../Home/Styles";
import { ContainerCardsDetail, ContainerImg, ImgCard, LiCardDetail, LiDataCards } from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import capaGen from "../../Assets/capaGenerica.png"

const DetailPage = () => {
  const { id } = useParams();
  const state = useSelector(state => state.user)
  const found = state.name.find(element => element.id == id)


  let imageCover = ""
  let pricing = ""
  let CreatorsName = ""
  let descrip = ""
  { (found.images[0] === undefined) ? imageCover = capaGen : imageCover = found.images[0].path + ".jpg" }
  { (found.prices[0].price === 0) ? pricing = 0.13 : pricing = found.prices[0].price }
  { (found.creators.items[0].name === undefined) ? CreatorsName = "unknown" : CreatorsName = found.creators.items[0].name }
  { (found.description === "") ? descrip = "unknown" : descrip = found.description }

  console.log(found.creators.items[0].name);


  return (
    <BodyContainer>
      <NavBar />
      <main>
        <ContainerCardsDetail>
          <LiCardDetail>
            <ContainerImg>
              <ImgCard src={imageCover} />
            </ContainerImg>
          </LiCardDetail>
          <LiDataCards>
            <p>{found.title}</p>
            <p>Price: ${pricing}</p>
            <p>Creator: {CreatorsName}</p>
            <p>{descrip}</p>
          </LiDataCards>
        </ContainerCardsDetail>
      </main>
      <Footer />
    </BodyContainer>
  )

}
export default DetailPage