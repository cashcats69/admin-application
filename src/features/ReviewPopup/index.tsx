import styled from "@emotion/styled"
import { ButtonReview } from "../../shared/ui/ButtonReview"
import ModalExitImg from '../../shared/icons/ModalExit.svg'
import { ModalTextArea } from "../../shared/ui/AboutTextArea"
import { useEffect, useState } from "react"
import { useStore } from "effector-react"
import { $UsersStore } from "../../store/UsersStore"
import { TReviewPopup } from "../../interfaces"
const Container = styled.div`
position:relative;
margin:200px auto auto auto;
width:676px;
height:325px;
display:flex;
flex-direction:column;
background:#FFFFFF;
z-index:800;
@media(max-width:768px){
    margin: 46px auto auto auto;
    width:288px;
    height:476px;
}
`

const ContainerHeader = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 16px 16px 0 16px;
@media(max-width:768px){
    margin: 16px 16px 0 16px;
}
`
const HeaderText = styled.p`
font-family: Factor A TRIAL;
font-size: 24px;
font-weight: 500;
line-height: 28px;
letter-spacing: -0.0124em;
text-align: left;
color: #333333;
margin:0;
@media(max-width:768px){
font-size: 20px;
line-height: 26px;
text-align: left;

}
`
const ModalExit = styled.img`

`
const ContainerInput = styled.div`
margin: 20px 16px 16px 16px;
`
const ContainerButtons = styled.div`
display:flex;
margin:24px;
width:454px;
justify-content:space-between;
@media(max-width:768px){
    width:auto;
    height:92px;
    flex-direction:column;
    margin:16px;
}



`
const BGModal = styled.div`
width:100vw;
height:100vh;
position:fixed;
z-index:500;
background: rgba(0, 0, 0, 0.2);
backdrop-filter: blur(3px);
`


const ImgButton = styled.button`
border: 0; 
background: transparent;
cursor:pointer;
background-image:url(${ModalExitImg});
width:25px;
height:25px;
@media(max-width:768px){
width:20px;
height:20px;
}
`
export const ReviewPopup:React.FC<TReviewPopup> = ({content,toggleModal,finishEdit}) => {
    const usersStore = useStore($UsersStore); 
    const [currentText,setCurrentText] = useState(content)
    const confirmEdit = () => {
        finishEdit(currentText)
    }
    console.log(2)
    useEffect(() => {
        setCurrentText(content)
    },[content])
    const changeText = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        
        setCurrentText(e.target.value)
    }
    return(
        <BGModal id='outsideModal' onClick={toggleModal}>
        <Container>
            <ContainerHeader>
                <HeaderText>Редактирование отзыва</HeaderText>
                <ImgButton type="button"></ImgButton>
            </ContainerHeader>
            <ContainerInput>
                <ModalTextArea content={currentText} maxLength={"400"} onChangeFunc={changeText} currentLength={currentText.length}/>
            </ContainerInput>
    <ContainerButtons>
        <ButtonReview widthProp="319px" colorProp="#585CC6" text="Подтвердить редактирование" handleClick={confirmEdit}/>
        <ButtonReview widthProp="123px" colorProp="#EB5757" text="Отмена" handleClick={toggleModal}/>
        </ContainerButtons>
        </Container>
        </BGModal>
    )
}