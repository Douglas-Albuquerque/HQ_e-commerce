import React from 'react'
import { ContainerCart, ImgItem, TitleItem } from './StyleCardShoppingCart'
import CountItem from "../CountItem/CountItem"

const CardShoppingCart = () => {
  return (
    <div>
      <ContainerCart>
        <ImgItem src="https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg" alt="" />
        <TitleItem>
          <p>Venom: de volta ao lar</p>
          <p>Price: $2,50</p>
        </TitleItem>
      </ContainerCart>
      <CountItem />
    </div>
  )
}

export default CardShoppingCart