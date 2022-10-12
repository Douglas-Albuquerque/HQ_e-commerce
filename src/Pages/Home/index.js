import { useState, useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SimpleCard from "../../Components/Cards/SimpleCard";
import RareCard from '../../Components/Cards/RareCard';
import Footer from '../../Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { dataCard } from "../../Redux/cardSlice"


import scrollButtom from "../../Assets/scrollButtom.png"
import { ArrowButtons, BodyContainer, ContainerCards, ImgArrowButtom } from './Styles';


const HomePage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const reqApi = async () => {
    const url = "https://gateway.marvel.com/v1/public/comics?ts=1665019512347&apikey=5a1ba5f255f58d9125b7a76d5a30a652&hash=7d1420e9be5449cf737f134a12d2fcbd"
    try {
      const header = {
        method: "GET"
      }
      await fetch(url, header)
        .then(
          async response => await response.json()
        )

        .then(
          async response => {
            setData(response.data.results);
            const dataZ = response.data.results
            const found = dataZ.find(element => element.id == 428)
            dispatch(dataCard(response.data.results))
            // console.log(found);
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

  useEffect(() => {
    reqApi();
  }, []);


  // const dataSimpleCard = [
  //   {
  //     id: '1',
  //     title: 'Venom de volta ao lar',
  //     imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
  //     price: "2,50",
  //   },
  //   {
  //     id: '1',
  //     title: 'Venom de volta ao lar',
  //     imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
  //     price: "2,50",
  //   },
  //   {
  //     id: '1',
  //     title: 'Venom de volta ao lar',
  //     imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
  //     price: "2,50",
  //   },
  //   {
  //     id: '1',
  //     title: 'Venom de volta ao lar',
  //     imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
  //     price: "2,50",
  //   },
  //   {
  //     id: '1',
  //     title: 'Venom de volta ao lar',
  //     imgUrl: "https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg",
  //     price: "2,50",
  //   },
  // ]

  return (
    <BodyContainer>
      <NavBar />

      <main>
        <ContainerCards>
          {data.map((item, i) => <RareCard key={i} id={item.id} title={item.title} imgUrl={item.images} price={item.prices[0].price} />)}
          {data.map((item, i) => <SimpleCard key={i} title={item.title} imgUrl={item.images} price={item.prices[0].price} />)}
        </ContainerCards>
        <ArrowButtons>
          <ImgArrowButtom><img src={scrollButtom} alt="" /></ImgArrowButtom>
          <ImgArrowButtom><img src={scrollButtom} alt="" /></ImgArrowButtom>
        </ArrowButtons>
      </main>
      <Footer />
    </BodyContainer>
  )

}
export default HomePage