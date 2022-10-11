import React from 'react'
import emptyCart from "../../Assets/empty-cart.png"

import { CloseButtom, ModalContainer, ModalContent, EmptyCartImg, ImgProduct, DetailItem } from "./StylesModalShoppingCart"

const ModalShoppingCart = ({ id = "modal", onClose = () => { } }) => {

  const clickOutsideClose = (e) => {
    if (e.target.id === id) onClose();
  }
  return (
    <ModalContainer id={id} onClick={clickOutsideClose}>
      <ModalContent>
        <CloseButtom onClick={onClose} />
        <ImgProduct src="https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg" />
        < DetailItem>
          <p>Title: Venom de volta ao lar</p>
          <p>Price: $2,50</p>
        </DetailItem>
        <EmptyCartImg src={emptyCart} />
      </ModalContent>
    </ModalContainer>
  )
}

export default ModalShoppingCart