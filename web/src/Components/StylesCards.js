import styled from 'styled-components'

export const LiCards = styled.li`
  width: 12.1rem;
  height: 20.3rem;
  background-color: #00000040;
  list-style: none;
  margin: 0.6rem 6.2rem 1.2rem 0.6rem;
  border-radius: 0.6rem;
`
export const LiRareCard = styled(LiCards)`
    background: rgb(0, 44, 131);
    background: linear-gradient(
    0deg,
    rgba(0, 44, 131, 1) 0%,
    rgba(3, 132, 140, 0.4853291658460259) 48%,
    rgba(0, 44, 131, 1) 100%
  );
`
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.9rem;
`
export const ImgCard = styled.img`
  width: 10rem;
  height: 14.3rem;
  object-fit: contain;
  align-self: center;
  margin-top: 0.9rem;
`
export const CardText = styled.div`
  text-align: center;
  align-items: center;
  color: white;
  line-height: 0.3rem;
  margin-left: 0.37rem;
  overflow: hidden;
  max-width: 18ch;
  white-space: nowrap;
  text-overflow: ellipsis; 
  & p {
    overflow-wrap: brake-word;  
  }
`
export const RareTicket = styled.div`
  display: flex;
  width: 5.4rem;
  height: 1.8rem;
  border: solid 2.8rem transparent;
  border-bottom: solid 2.8rem #daa520;
  border-top: none;
  transform: rotate(314deg);
  margin-left: -3.4rem;
  position: absolute;
`
export const TextRare = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.8rem;
  margin-left: 0.9rem;
  color: #ffffff;
`