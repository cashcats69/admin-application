import styled from "@emotion/styled"

const TextArea = styled.textarea<TAboutArea>(({heightProp}) =>`
outline: none;
height: 50px;
width: 100%;
border-radius: 2px;
border: 1px solid #E0E0E0;
padding:0px;
text-indent: 16px;
font-weight: 400;
font-size: 14px;
line-height: 45px;
font-family: Gilroy;
resize:none;
::placeholder{
color: #8A8A8A;
letter-spacing: 0em;
text-align: left;
text-indent: 16px;
margin-botton:8px;
}
@media(max-width:990px){
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
height:20px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.0124em;
text-align: left;
margin:0;
`
const AboutTextAreaContainer = styled.div`
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin-top: 20px;
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
export type TAboutTextArea ={
    name:'long' | 'short'
    TextAreaName:string,
    placeholderName:string,
    maxLength:string,
    onChangeFunc:(e:React.ChangeEvent<HTMLTextAreaElement>) => void,
    heightProp:string,
    currentLength:number
}
export type TAboutArea = Pick<TAboutTextArea,'heightProp'>
export const AboutTextArea:React.FC<TAboutTextArea> = ({TextAreaName,placeholderName,maxLength,onChangeFunc,heightProp,currentLength,name}) => {
    return(
        <AboutTextAreaContainer>
        <SymbolsCounter>{currentLength}/{maxLength}</SymbolsCounter>
        <TextAreaLabel>{TextAreaName}</TextAreaLabel>
        <TextArea name={name} heightProp={heightProp} placeholder={placeholderName} onChange={onChangeFunc} maxLength={Number(maxLength)}/>
    </AboutTextAreaContainer>
    )
}