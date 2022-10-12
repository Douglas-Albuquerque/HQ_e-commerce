import { useState, useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import RareCard from '../../Components/Cards/RareCard';
import Footer from '../../Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { dataCard } from "../../Redux/cardSlice"


import { BodyContainer, ContainerCards } from './Styles';


const HomePage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [random, setRandom] = useState();
  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(data.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex, endIndex)

  function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
  function RandArray(array) {
    var rand = Math.random() * array.length | 0;
    var rValue = array[rand];
    return rValue;
  }
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
            const dataX = (response.data.results);
            const randomValue = RandArray(dataX)
            setData(shuffle(response.data.results));
            dispatch(dataCard(response.data.results))
            setRandom(randomValue.id);
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
    <BodyContainer >
      <div>
        <NavBar />
      </div>
      <div>
        <main style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }}>
          <ContainerCards>
            {currentItens.map((item, i) => <RareCard randId={random} key={i} id={item.id} title={item.title} imgUrl={item.images} price={item.prices[0].price} />)}
          </ContainerCards>
          <div>
            {Array.from(Array(pages), (item, index) => {
              return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index}</button>
            })}
          </div>
        </main>
      </div>
      <div >
        <Footer />
      </div>
    </BodyContainer >
  )

}
export default HomePage