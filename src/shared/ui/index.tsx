import styled from "@emotion/styled";
import bgImg from '../../shared/icons/back.svg'
//Не сообразил, куда лучшие прицепить общие для двух экранов компоненты
export const AuthContainer = styled.div`
background-color: #585CC6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  font-size: calc(10px + 2vmin);
  color: white;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`
export const AuthInputForm = styled.form`
height:428px;
width:80%;
max-width:628px;
min-height: 386px;
min-width: 288px;
border-radius: 2px;
background:white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 550px) {
  height:386px;
}
`