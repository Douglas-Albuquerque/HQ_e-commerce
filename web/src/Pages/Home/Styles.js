import styled from "styled-components";


export const BodyContainer = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background: rgb(147, 21, 21);
  background: radial-gradient(
    circle,
    rgba(147, 21, 21, 1) 0%,
    rgba(199, 13, 17, 1) 38%,
    rgba(164, 14, 14, 0.9615196420365021) 100%
  );
  font-family: 'Playfair Display', serif;
`
export const ContainerCards = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 90%;
  margin: auto;
  margin-top: 0.9rem;
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