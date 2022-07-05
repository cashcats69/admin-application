import styled from "@emotion/styled"
import { TAboutArea, TAboutTextArea, iModalTextArea, iAddTextArea } from "../../../interfaces"

const TextArea = styled.textarea<TAboutArea>(({heightProp,normalHeightProp}) =>`
outline: none;
height: ${normalHeightProp};
border-radius: 2px;
border: 1px solid #E0E0E0;
padding:0px;
font-weight: 400;
font-size: 14px;
line-height: 30px;
font-family: Gilroy;
padding-left:16px;
padding-right:16px;
resize:none;
::placeholder{
color: #8A8A8A;
letter-spacing: 0em;
text-align: left;
margin-botton:8px;
}
&:disabled{
    background:#FFFFFF;
    color: #8A8A8A;
}
@media(max-width:768px){
    width:calc(100% - 30px);
    line-height: 33px;
    color:#333333;
    padding:15px 15px 0 15px;
    height: ${heightProp};
    text-indent: 0;
    ::placeholder{
        text-indent: 0;
    }
}
`)
const TextAreaLabel = styled.label`
font-family: Factor A;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.0124em;
text-align: left;
margin:0 0 8px 0;
`
const AboutTextAreaContainer = styled.div`
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin: 20px 0 0 0;
width:100%;
`
const ModalTextAreaContainer = styled.div`
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin: 0;
width:100%;
`
const SymbolsCounter = styled.label`
font-family: Gilroy;
font-size: 10px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: right;
position:absolute;
color: #8A8A8A;
bottom:5px; 
right:10px;
`


export const AboutTextArea:React.FC<TAboutTextArea> = ({currentValue,isDisabled,TextAreaName,placeholderName,maxLength,onChangeFunc,normalHeightProp,heightProp,currentLength,name}) => {
    return(
        <AboutTextAreaContainer>
        <SymbolsCounter>{currentLength}/{maxLength}</SymbolsCounter>
        <TextAreaLabel>{TextAreaName}</TextAreaLabel>
        <TextArea value={currentValue ? currentValue : ''} disabled={isDisabled} normalHeightProp={normalHeightProp} name={name} heightProp={heightProp} placeholder={placeholderName} onChange={onChangeFunc} maxLength={Number(maxLength)}/>
    </AboutTextAreaContainer>
    )
}
export const ModalTextArea:React.FC<iModalTextArea> = ({isDisabled,maxLength,onChangeFunc,currentLength,content,name}) => {
    return(
        <ModalTextAreaContainer>
        <SymbolsCounter>{currentLength}/{maxLength}</SymbolsCounter>
        <TextAreaLabel>{name}</TextAreaLabel>
        <TextArea placeholder="Вы не можете оставить отзыв пустым..." disabled={isDisabled} onChange={onChangeFunc} maxLength={Number(maxLength)} normalHeightProp={"105px"} heightProp={"222px"} value={content}/>
    </ModalTextAreaContainer>
    )
}
export const AddTextArea:React.FC<iAddTextArea> = ({maxLength,onChangeFunc,currentLength,name}) => {
    return(
        <ModalTextAreaContainer>
        <SymbolsCounter>{currentLength}/{maxLength}</SymbolsCounter>
        <TextAreaLabel>{name}</TextAreaLabel>
        <TextArea placeholder="Напишите пару слов о вашем опыте..."  onChange={onChangeFunc} maxLength={Number(maxLength)} normalHeightProp={"105px"} heightProp={"105px"}/>
    </ModalTextAreaContainer>
    )
}
