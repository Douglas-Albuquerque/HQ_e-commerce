import { Component } from 'react'
import NavBar from '../../Components/NavBar'

import './style.css'
import scrollButtom from "../../Assets/scrollButtom.png"
import RareCard from '../../Components/RareCard';
import SimpleCard from '../../Components/SimpleCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
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
    const dataRareCard = [
      {
        id: '1',
        title: 'Return of Wolverine',
        imgUrl: "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/06/return-of-wolverine.jpg",
        price: "12,50",
      },
    ]

    return (
      <div className='main'>
        <NavBar />
        <main>
          <ul className='containerCards'>
            {dataRareCard.map((item) => <RareCard title={item.title} imgUrl={item.imgUrl} price={item.price} />)}
            {dataSimpleCard.map((item) => <SimpleCard title={item.title} imgUrl={item.imgUrl} price={item.price} />)}
          </ul>
          <div className='arrowButtons'>
            <button><img src={scrollButtom} alt="" /></button>
            <button><img src={scrollButtom} alt="" /></button>
          </div>
        </main>
      </div>
    )
  }
}
export default HomePage