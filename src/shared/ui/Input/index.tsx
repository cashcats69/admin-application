import styled from "@emotion/styled/macro";
import { IAuthInput, IAuthInputPassword, TColorProp } from "../../../interfaces";
import ShowLogo from '../Input/Show.svg';
import HideLogo from '../Input/Hide.svg';
import infoLogo from '../../icons/Info.svg';
import { useState } from "react";

const Input = styled.input<TColorProp>(({colorProp}) => `
outline: none;
height: 50px;
width: 100%;
border-radius: 2px;
border: 1px solid ${colorProp};
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
:focus{
    border: 1px solid #585CC6
}
:invalid{
    border: 1px solid #EB5757
}
`)
const InputPass = styled.input<TColorProp>(({colorProp}) =>`
outline: none;
height: 50px;
width: 100%;
border-radius: 2px;
border: 1px solid ${colorProp};
padding:0px;
text-indent: 16px;
font-weight: 600;
font-size: 14px;
line-height: 22px;
font-family: Gilroy;
letter-spacing: 0.3rem;
::placeholder{
color: #8A8A8A;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
text-indent: 16px;
margin-botton:8px;
}
:focus{
    border: 1px solid #585CC6;
}
:invalid{
    border: 1px solid #EB5757;
}

`)
const InputLabel = styled.label`
font-family: Factor A;
height:20px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-bottom:4px;
margin-top:24px;
`
const Div = styled.div`
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin-bottom:8px;
margin-top 24px;
width:85%;
`
const Eye = styled.img`
width:25px;
height:20px;
cursor:pointer;
`

const Indicators = styled.div`
width:50px;
display:flex;
flex-direction:row-reverse;
position:absolute;
margin-top:65px;
margin-left:90%;
@media(max-width:724px){
margin-left:88%;
}
@media(max-width:680px){
    margin-left:85%;
    }
    @media(max-width:600px){
        margin-left:80%;
        }
        
`
const SpanToolTip = styled.span`
visibility: hidden;
width: 164px;
height:50px;
background-color: #F5F5F5;
color: #333333;
text-align: center;
border-radius: 6px;
padding: 5px;
position: absolute;
z-index: 1;
right:-10%;
bottom:100%;
font-family: Gilroy;
font-size: 13px;
font-weight: 400;
line-height: 18px;
`

export const AuthInput:React.FC<IAuthInput> = ({inputName,inputType,infoValue, onChangeFunc,inputPattern,check}) =>{
    const Info = styled.img`
width:25px;
height:20px;
display:${infoValue ? 'block' : 'none'};
&:hover + ${SpanToolTip}{
visibility:visible;
}
`
    return(
        <Div>
            <InputLabel>{inputName}</InputLabel>
            <Input colorProp={check ? '#E0E0E0' : '#EB5757'} placeholder={`Введите ${inputName.toLocaleLowerCase()}`} type={inputType} onChange={onChangeFunc} pattern={inputPattern}/>
            <Indicators>
            
            <Info src={infoLogo} title='info'/>
            <SpanToolTip>Почта должна соответствовать требованиям</SpanToolTip>
            </Indicators>
        </Div>
        
    )
}

export const AuthInputPassword:React.FC<IAuthInputPassword> = ({inputName, onChangeFunc,infoValue,inputPattern,check}) =>{
const Info = styled.img`
width:25px;
height:20px;
display:${infoValue ? 'block' : 'none'};
&:hover + ${SpanToolTip}{
visibility:visible;
}
`
const [value,setValue] = useState(true);
const [passwordType, setPasswordType] = useState("password");
const togglePassword =()=>{
    setValue(!value)
    if(passwordType==="password")
    {
    setPasswordType("text")
    return;
    }
    setPasswordType("password")
}
    return(
        <Div>
            <InputLabel>{inputName}</InputLabel>
            <InputPass colorProp={check ? '#E0E0E0' : '#EB5757'} placeholder={`Введите ${inputName.toLocaleLowerCase()}`}  type={passwordType} onChange={onChangeFunc} pattern={inputPattern}/>
            <Indicators>
            
            <Info src={infoLogo} title='info'/>
            <SpanToolTip>Пароль должен содержать латиницу и прописные буквы</SpanToolTip>
            <Eye src={value ? ShowLogo : HideLogo} onClick={() => togglePassword()}></Eye>
            </Indicators>
        </Div>
        
    )
}