import "./RareCard.css"
import capaGen from "../Assets/capaGenerica.png"

const RareCard = ({title, imgUrl, price}) => {
  return (
    <div>
      <li className='rareCard'>
        <div className='rareTicket'>
          <p className='textRare'>Raro</p>
        </div>
        <div className='containerImg'>
          <img className='imgCard' src={(imgUrl === "")? capaGen : imgUrl} alt="" />
        </div>
        <div className='cardText'>
          <p>{title}</p>
          <p>Price:${price}</p>
        </div>
      </li>
    </div>
  )
}

export default RareCard