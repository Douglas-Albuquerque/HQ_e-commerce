import "./RareCard.css"
import capaGen from "../Assets/capaGenerica.png"

const RareCard = ({ title, imgUrl, price }) => {

  let imageCover = ""
  if (imgUrl[0] === undefined) {
    imageCover = capaGen
  } else {
    imageCover = imgUrl[0].path + ".jpg"
  }
  return (
    <div>
      <li className='rareCard'>
        <div className='rareTicket'>
          <p className='textRare'>Raro</p>
        </div>
        <div className='containerImg'>
          <img className='imgCard' src={imageCover} alt="" />
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