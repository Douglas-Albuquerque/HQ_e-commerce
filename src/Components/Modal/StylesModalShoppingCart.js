import styled from "styled-components"

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  align-self: center;
  cursor: default;
`
export const ModalContent = styled.div`
  margin-top: 7.4rem;
  width: 30rem;
  height: 39.6rem;
  position: absolute;
  background-color: rgb(255, 255, 255);
  top: 0;
  right: 0;
  cursor: default;
`
export const CloseButtom = styled.div`
  background-color: red;
  border: none;
  outline: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  /* right: calc(100% - 20.75rem); */

  &:before,
  &:after{
    content: " ";
    position: absolute;
    width: 0.2rem;
    height: 1.3rem;
    background-color: #000;
    margin-left: 0.6rem;
  }
  &:before{
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }
`
export const EmptyCartImg = styled.img`
  width: 1rem;
  object-fit: contain;

` 
export const ItemInCart = styled.div`
  display: flex;
  flex-direction: row;
`
export const ImgProduct = styled.img`
  width: 6rem;
  height: 10rem;
  list-style: none;
  border-radius: 0.6rem;  
`

export const DetailItem = styled.div`
  font-size: 1rem;
`
