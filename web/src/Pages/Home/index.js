import { Component } from 'react'
import NavBar from '../../Components/NavBar'

import './style.css'
import scrollButtom from "../../Assets/scrollButtom.png"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='main'>
        <NavBar />
        <main>
          <ul className='containerCards'>
            <li className='rareCard'>
              <div className='rareTicket'>
                <p className='textRare'>Raro</p>
              </div>
              <div className='containerImg'>
                <img className='imgCard' src="https://uploads.jovemnerd.com.br/wp-content/uploads/2018/06/return-of-wolverine.jpg" alt="capa guerras infinatas" />
              </div>
              <div className='cardText'>
                <p>Return of Wolverine</p>
                <p>Price:$ 12,00</p>
              </div>
            </li>
            <li className='card'>
              <div className='containerImg'>
                <img className='imgCard' src="https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg" alt="capa guerras infinatas" />
              </div>
              <div className='cardText'>
                <p>Venom de volta ao lar</p>
                <p>Price:$ 2,50</p>
              </div>
            </li>
            
            <li className='card'></li>
            <li className='card'></li>
            <li className='card'></li>
          </ul>
          <ul className='containerCards'>
            <li className='card'></li>
            <li className='card'></li>
            <li className='card'></li>
            <li className='card'></li>
            <li className='card'></li>
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