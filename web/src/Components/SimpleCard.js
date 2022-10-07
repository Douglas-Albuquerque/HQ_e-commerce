
import "./SimpleCard.css"
import "./RareCard.css"
import capaGen from "../Assets/capaGenerica.png"

const SimpleCard = ({title, imgUrl, price}) => {
  return (
    <div>
      <li className='card'>
        <div className='containerImg'>
          <img className='imgCard' src={(imgUrl === "")? capaGen : imgUrl } alt="" />
        </div>
        <div className='cardText'>
          <p>{title}</p>
          <p>Price: ${price}</p>
        </div>
      </li>
    </div>
  )
}

export default SimpleCard