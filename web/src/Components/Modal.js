import React from 'react'
import emptyCart from "../Assets/empty-cart.png"


import { CloseButtom, ModalContainer, ModalContent, EmptyCartImg } from "./stylesModal"

const Modal = ({ id = "modal", onClose = () => { } }) => {

  const clickOutsideClose = (e) => {
    if (e.target.id === id) onClose();
  }
  return (
    <ModalContainer id={id} onClick={clickOutsideClose}>
      <ModalContent>
        <CloseButtom onClick={onClose} />
        <EmptyCartImg src={emptyCart}/>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal