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
            dispatch(dataCard(response.data.results))
          }
        )
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <BodyContainer>
      <NavBar />
      <main>
        <ContainerCards>
          {data.map((item, i) => <RareCard key={i} id={item.id} title={item.title} imgUrl={item.images} price={item.prices[0].price} />)}
          {data.map((item, i) => <SimpleCard key={i} id={item.id} title={item.title} imgUrl={item.images} price={item.prices[0].price} />)}
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