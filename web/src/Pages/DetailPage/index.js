import { Component, } from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import { BodyContainer, ContainerCards } from "../Home/Styles";
import { ContainerCardsDetail, ContainerImg, ImgCard, LiCardDetail, LiDataCards } from "./styles";


class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const dataDatailCard = [
      {
        id: '1',
        title: 'Venom de volta ao lar',
        imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
        price: "2,50"
      }
    ]
    return (
      <BodyContainer>
        <NavBar />
        <main>
          <ContainerCardsDetail>
            <LiCardDetail>
              <ContainerImg>
                <ImgCard src={"https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg"}/>
              </ContainerImg>
            </LiCardDetail>
            <LiDataCards>
              <p>Title: Venom de volta ao lar</p>
              <p>Price: $2,50</p>
              <p>Creator: Mike Costa</p>
              <p>Description: O simbionte Venom vaga pelas ruas de Nova York procurando por um novo hospedeiro! Em sua busca, a criatura cruza com Lee Price, um homem com um passado traumático e sem nada mais a perder, tentando conseguir algum dinheiro como capanga.</p>
            </LiDataCards>
          </ContainerCardsDetail>  
        </main>
        <Footer />
      </BodyContainer>
    )
  }
}
export default DetailPage