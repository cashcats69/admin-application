import styled from "@emotion/styled"
import { TAboutInput, TDiv } from "../../../interfaces"

const Input = styled.input`
outline: none;
height: 50px;
width: 100%;
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
`
const InputLabel = styled.label`
height:20px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.0124em;
text-align: left;
margin:0;
`
const Div = styled.div<TDiv>(({widthProp}) =>`
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin-top: 20px;
width:${widthProp};
margin-right:24px;
&:last-of-type{
    margin-right:0; 
}
@media(max-width:768px){
    margin-right:0px;
    width:100%;
}
`)

export const AboutInput:React.FC<TAboutInput> = ({inputName,placeholderName,inputPattern,onChangeFunc,widthProp}) => {
    return(
        <Div widthProp={widthProp}>
        <InputLabel>{inputName}</InputLabel>
        <Input placeholder={placeholderName} onChange={onChangeFunc} pattern={inputPattern}/>
    </Div>
    )
}