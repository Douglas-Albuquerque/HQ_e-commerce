import { Component, } from 'react'
import NavBar from '../../Components/NavBar'

import scrollButtom from "../../Assets/scrollButtom.png"
import RareCard from '../../Components/RareCard';
import SimpleCard from '../../Components/SimpleCard';
import { ArrowButtons, BodyContainer, ContainerCards, ImgArrowButtom } from './Styles';
import Footer from '../../Components/Footer';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const url = "http://gateway.marvel.com/v1/public/comics?ts=1665019512347&apikey=5a1ba5f255f58d9125b7a76d5a30a652&hash=7d1420e9be5449cf737f134a12d2fcbd"
    try {
      const header = {
        method: "GET"
      }
      await fetch(url, header)
        .then(
          async response => response.json()
        )

        .then(
          async response => {
            this.setState({ data: response.data.results })
            //console.log(response.data.results);
            // console.log(response.data.results[6].title);
            // console.log(response.data.results[5].pageCount);
            // console.log(response.data.results[5].prices[0].price);
            // console.log(response.data.results[5].images[0].path);
            // console.log(response.data.results[5].images[0].extension);
            // console.log(response.data.results[5].creators.items[0].name);
            // console.log(response.data.results[5].creators.items[1].name);
          }
        )
    } catch (error) {
      console.log(error);
    }

  }
  // teste = async () => {

  //   console.log(this.state.data[4].prices[0].price);

  // }
  

  render() {

    const dataSimpleCard = [
      {
        id: '1',
        title: 'Venom de volta ao lar',
        imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
        price: "2,50",
      },
      {
        id: '1',
        title: 'Venom de volta ao lar',
        imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
        price: "2,50",
      },
      {
        id: '1',
        title: 'Venom de volta ao lar',
        imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
        price: "2,50",
      },
      {
        id: '1',
        title: 'Venom de volta ao lar',
        imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
        price: "2,50",
      },
      {
        id: '1',
        title: 'Venom de volta ao lar',
        imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
        price: "2,50",
      },
    ]
    const data = this.state.data
    return (
      <BodyContainer>
        <NavBar />
        {/* <button onClick={this.teste}>teste</button> */}
        <main>
          <ContainerCards>
            {data.map((item, i) => <RareCard key={i} title={item.title} imgUrl={item.images} price={item.prices[0].price} />)}
            {dataSimpleCard.map((item, i) => <SimpleCard key={i} title={item.title} imgUrl={item.imgUrl} price={item.price} />)}
          </ContainerCards>
          <ArrowButtons>
            <ImgArrowButtom><img src={scrollButtom} alt="" /></ImgArrowButtom>
            <ImgArrowButtom><img src={scrollButtom} alt="" /></ImgArrowButtom>
          </ArrowButtons>
        </main>
        <Footer/>
      </BodyContainer>
    )
  }
}
export default HomePage