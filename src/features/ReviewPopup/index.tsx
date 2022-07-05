import styled from "@emotion/styled"
import { ButtonReview } from "../../shared/ui/ButtonReview"
import ModalExitImg from '../../shared/icons/ModalExit.svg'
import { ModalTextArea } from "../../shared/ui/AboutTextArea"
import { useEffect, useState } from "react"
import { TReviewPopup } from "../../interfaces"
import { Loader } from "../../processes/Loader"
const Container = styled.div`
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
font-family: 'Factor A';
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
outline:none;
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
export const ReviewPopup:React.FC<TReviewPopup> = ({content,toggleModal,finishEdit,loader}) => {
    const [currentText,setCurrentText] = useState(content)
    const confirmEdit = () => {
        finishEdit(currentText)
    }
    useEffect(() => {
        setCurrentText(content)
    },[content])
    const changeText = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setCurrentText(e.target.value)
    }
    return(
        <BGModal id='outsideModal' onClick={toggleModal}>
            {loader ? <Loader/> : <></>}
        <Container>
            <ContainerHeader>
                <HeaderText>Редактирование отзыва</HeaderText>
                <ImgButton name="reject"></ImgButton>
            </ContainerHeader>
            <ContainerInput>
                <ModalTextArea name={"Отзыв"} isDisabled={false} content={currentText} maxLength={"200"} onChangeFunc={changeText} currentLength={currentText.length}/>
            </ContainerInput>
    <ContainerButtons>
        <ButtonReview isDisabled={false} name='publish' widthProp="319px" colorProp="#585CC6" text="Подтвердить редактирование" handleClick={confirmEdit}/>
        <ButtonReview isDisabled={false} name='reject' widthProp="123px" colorProp="#EB5757" text="Отмена" handleClick={toggleModal}/>
        </ContainerButtons>
        </Container>
        </BGModal>
    )
}