import styled from "@emotion/styled"
import { ButtonReview } from "../../shared/ui/ButtonReview";
import ModalExitImg from '../../shared/icons/ModalExit.svg';
import { AddTextArea } from "../../shared/ui/AboutTextArea";
import { useEffect, useState } from "react";
import { TReviewAdd } from "../../interfaces";
import { Loader } from "../../processes/Loader";
import { AddReviewInput } from "../../shared/addReviewInput";
import plus from "../../shared/icons/plus.svg";
import moderIcon from "../../shared/icons/moderIcon.svg";
import { AvatarFile } from "../../processes/AvatarFile";
import reset from "../../shared/icons/reset.svg";
const Container = styled.div`
margin:100px auto auto auto;
width:676px;
display:flex;
flex-direction:column;
background:#FFFFFF;
z-index:800;
@media(max-width:768px){
    margin: 46px auto auto auto;
    width:288px;
}
`

const ContainerHeader = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 16px 24px 0 24px;
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
margin: 32px 24px 40px 24px;
@media(max-width:768px){
margin: 32px 16px 12px 16px;
}
`
const ContainerButtons = styled.div`
display:flex;
margin:0 24px 24px 24px;
@media(max-width:768px){
    width:auto;
    height:92px;
    flex-direction:column-reverse;
    margin:0 16px 16px 16px;
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
const InputSmallContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:20px 24px 0 24px;
align-items:flex-end;
@media(max-width:768px){
    flex-direction:column;
    align-items:flex-start;
    margin:20px 16px 0 16px;
}
`
const ReviewsAddBlock = styled.label`
display:flex;
flex-direction:row;
width:217px;
height:52px;
background:#585CC6;
border:none;
outline:none;
padding:0;
cursor:pointer;
background-size: 0% 100%;
&:hover{
background-image: linear-gradient(#797DDF, #797DDF);
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 100% 100%;
transition: background-size .5s, color .5s;
}
@media(max-width:768px){
width:149px;
height:42px;
}
`
const Blockplus = styled.img`
width:18px;
height:18px;
margin:17px 10px 17px 28px;
@media(max-width:768px){
width:12px;
height:12px;
margin:15px 10px 15px 15px;
}
`
const BlockText = styled.p`
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
line-height: 18px;
text-align: left;
color:#FFFFFF;
margin:auto 0 auto 0;
cursor:pointer;
@media(max-width:768px){
    font-size: 14px;
    margin:12px 0 12px 0;
}
`
const ModerationContainer = styled.div`
display:flex;
align-items:center;
flex-direction:row;
margin-left:16px;
@media(max-width:768px){
    margin:0;
}
`
const ModerationImg = styled.img`
width:20px;
height:20px;
`
const ModerationText = styled.p`
margin-left:8px;
font-family: Gilroy;
font-size: 12px;
font-weight: 400;
line-height: 16px;
text-align: left;
color: #8A8A8A;
@media(max-width:768px){
font-size: 10px;
line-height: 12px;


}
`
const CaptchaContainer = styled.div`
display:flex;
flex-direction:row;
align-items: flex-end;
margin: 0 0 12px 24px;
@media(max-width:768px){
    flex-direction:column;
    align-items:start;
    margin: 0 0 12px 16px;
}
`
const CaptchaContainerInput = styled.div`

`
const InputText = styled.p`
`
const CaptchaInput = styled.input`
outline: none;
height: 42px;
width: 203px;
border-radius: 2px;
border: 1px solid #E0E0E0;
padding:0px;
text-indent: 16px;
font-weight: 400;
font-size: 14px;
line-height: 22px;
font-family: Gilroy;
::placeholder{
color: #8A8A8A;
letter-spacing: 0em;
text-align: left;
text-indent: 16px;
margin-botton:8px;
}
@media(max-width:768px){
width: 163px;
}
`
const ImgContainer = styled.div`
display:flex;
flex-direction:row;
margin-left:10px;
@media(max-width:768px){
    align-items:start;
    margin: 10px 0 0 0;
}
`
const CaptchaImg = styled.img`
width: 165px;
height: 52px;
border-radius:5px;
`
const ResetContainer = styled.div`
    width: 48px;
    height: 52px;
    background: #F5F5F5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    margin-left:10px;
`
const ResetImg = styled.img`
width:18px;
height:18px;
`
const getCaptcha = async () =>{
    const response = await fetch('https://academtest.ilink.dev/reviews/getCaptcha')
    if (response.ok){
        return response.json()
    }
}
export const AddReview:React.FC<TReviewAdd> = ({toggleModal,makeReview,loader}) => {
    useEffect(() => {getCaptcha().then(data => {setCaptchaImage(data.base64Image); setCaptchaKey(data.key)})},[])

    const [captchaImage, setCaptchaImage] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaKey, setCaptchaKey] = useState('')
    const [currentText,setCurrentText] = useState('')
    const [currentAreaText,setCurrentAreaText] = useState('')
    const [currentFile,setCurrentFile] = useState<File | null>(null);
    const [progress,setProgress] = useState(0);
    let interval:NodeJS.Timer;
    const toggleFunction = (e:React.SyntheticEvent<HTMLImageElement>) =>{ setCurrentFile(null); clearInterval(interval); setProgress(0);};
    const confirmEdit = () =>{
        if(currentText.length !== 0 && currentAreaText.length !== 0 && captchaKey.length !== 0 && captchaValue.length !== 0){
        const content = {authorName:currentText,content:currentAreaText,captchaKey:captchaKey,captchaValue:captchaValue,imageFile:currentFile}
        makeReview(content)}}
    const addCurrentText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.target.value)
        
    }
    const changeText = (e:React.ChangeEvent<HTMLTextAreaElement>) => setCurrentAreaText(e.target.value)
    const getFile = async (e:React.ChangeEvent<HTMLInputElement>) =>{
    setProgress(0);
    if(e.target.files !== null && /\.(jpe?g|png)$/i.test(e.target.files[0].name)){
        setCurrentFile(e.target.files[0])
        let counter = 0;
        interval = setInterval(() => {setProgress(state => state + 1); 
            counter = counter + 1; 
            if(counter === 100){
            clearInterval(interval)
        }
    },25)
    }
    e.target.value = '';
}
const resetCaptcha = () => getCaptcha().then(data => {setCaptchaImage(data.base64Image); setCaptchaKey(data.key)})

const getCaptchaValue = (e:React.ChangeEvent<HTMLInputElement>) => setCaptchaValue(e.target.value)

    return(
        <BGModal id='outsideModal' onClick={toggleModal}>
            {loader ? <Loader/> : <></>}
        <Container>
            <ContainerHeader>
                <HeaderText>Отзыв</HeaderText>
                <ImgButton id="exit"></ImgButton>
            </ContainerHeader>
            <InputSmallContainer>
            <AddReviewInput placeholderName={"Имя Фамилия"} onChangeFunc={addCurrentText}/>
            <ReviewsAddBlock htmlFor="fileInput" ><Blockplus src={plus}/><BlockText >Загрузить фото</BlockText></ReviewsAddBlock>
        <input type='file' id="fileInput" hidden={true} onChange={getFile}/>
            </InputSmallContainer>

            {currentFile &&<AvatarFile isSize={currentFile.size < 1024 * 1024 * 5} toggleFunction={toggleFunction} name={currentFile.name }  progress={progress}/> }

            <ContainerInput>
                <AddTextArea name={"Всё ли вам понравилось?"} maxLength={"200"} onChangeFunc={changeText} currentLength={currentText.length}/>
            </ContainerInput>
            <CaptchaContainer>
                <CaptchaContainerInput>
                    <InputText></InputText>
                    <CaptchaInput onChange={getCaptchaValue}></CaptchaInput>
                </CaptchaContainerInput>
                <ImgContainer>
                    <CaptchaImg src={captchaImage}/>
                    <ResetContainer onClick={resetCaptcha}>
                        <ResetImg src={reset}/>
                    </ResetContainer>
                </ImgContainer>
            </CaptchaContainer>
    <ContainerButtons>
        <ButtonReview isDisabled={false} name='publish' widthProp="203px" colorProp="#585CC6" text="Отправить отзыв" handleClick={confirmEdit}/>
        <ModerationContainer>
            <ModerationImg src={moderIcon}/>
            <ModerationText>Все отзывы проходят модерацию в течение 2 часов</ModerationText>
        </ModerationContainer>
        </ContainerButtons>
        </Container>
        </BGModal>
    )
}