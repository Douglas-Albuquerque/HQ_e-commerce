import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { BodyContainer } from "../Home/Styles";
import { ContainerCardsDetail, ContainerImg, ImgCard, LiCardDetail, LiDataCards } from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import capaGen from "../../Assets/capaGenerica.png"

const DetailPage = () => {
  const state = useSelector(state => state.user)
  const { id } = useParams();
  const found = state.name.find(element => element.id == id)


  let imageCover = ""
  let pricing = ""
  let CreatorsName = ""
  let descrip = ""
  if (found.images[0] === undefined) {
    imageCover = capaGen
  } else {
    imageCover = found.images[0].path + ".jpg"
  }
  if (found.prices[0].price === 0) {
    pricing = 0.13
  } else {
    pricing = found.prices[0].price
  }
  if (found.creators.items.length === 0) {
    CreatorsName = "unknown"
  } else {
    CreatorsName = found.creators.items[0].name
  }
  if (found.description === "") {
    descrip = "unknown"
  } else { descrip = found.description }

  console.log(found);


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