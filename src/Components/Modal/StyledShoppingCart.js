import styled from "styled-components"


export const ContainetAdress = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;

`
export const AddresInput = styled.input`
  background-color: #DED9D9;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex: 1;
  width: 10rem;
  padding-left: 0.7rem;
  box-shadow: 0.3rem 0.2rem 0.5rem #000000;

`

export const TextAddres = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
  font-weight: bold;
  display: flex;
  flex: 1;
  width: 2rem;
`

export const CupomDiv = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TextInput = styled.p`
  font-size: 1rem;
  margin: 2rem;
  margin-right: 1rem;
  font-weight: bold;
`
export const InputCupom = styled.input`
  width: 10rem;
  height: 1.5rem;
  background-color: #DED9D9;
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  box-shadow: 0.3rem 0.2rem 0.5rem #000000;
`
export const PurDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 2rem;
  & p{
    margin-right: 1rem;
  }
`
export const Purchase = styled.button`
  height: 2rem;
  color: #FFFFFF;
  background-color: #8E8E8E;
  border: none;
  border-radius: 2rem;

  &:hover{
    cursor: pointer;
    background-color: #777777;
    transition: 3ms;
  }
`
export const ContainerCart = styled.div`
  display: flex;
  justify-content: start;
  font-family: 'Playfair Display', serif;
`
export const ImgItem = styled.img`
  width: 5rem;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.3rem #000000;
`
export const TitleItem = styled.div`
  font-size: 1rem;
  margin: auto;
`
export const EmptyCart = styled.img`
  width: 15rem;

`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
`
