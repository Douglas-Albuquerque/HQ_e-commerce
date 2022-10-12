import styled from "styled-components";


export const BodyContainer = styled.div`
  min-height: 100vh;
  background: rgb(147, 21, 21);
  background: radial-gradient(
    circle,
    rgba(147, 21, 21, 1) 0%,
    rgba(199, 13, 17, 1) 38%,
    rgba(164, 14, 14, 0.9615196420365021) 100%
  );
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`
export const ContainerCards = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 59rem;
  margin: auto;
  margin-top: 0.2rem;
`
export const ArrowButtons = styled.div`
  width: 100%;
  margin-left: -1.8rem;
  text-align: center;
  & :first-child img{
    transform: rotate(180deg);
  }
`
export const ImgArrowButtom = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const MainContainer = styled.div`
  display: flex; 
  flex: 1;
  flex-direction: column;
  align-items: center;
`
export const PageButtons = styled.button`
  background-color: #8E8E8E;
  border-radius: 1rem;
  border: none;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  box-shadow: 0.2rem 0.2rem 0.3rem #000000;
  &:hover{
    cursor: pointer;
    background-color: #777777;
    transition: 3ms; 
  }
`