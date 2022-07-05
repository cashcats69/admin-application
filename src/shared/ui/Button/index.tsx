import styled from "@emotion/styled"
import { IButtonSubmit } from "../../../interfaces"

const ButtonSignIn = styled.button`
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
line-height: 18px;
height: 52px;
width:108px;
border-radius: 2px;
border: 0;
cursor:pointer;
text-align: center;
background: #585CC6;
color:white;
margin-top:32px;
background-size: 0% 100%;
&:hover{
background-image: linear-gradient(#797DDF, #797DDF);
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 100% 100%;
transition: background-size .5s, color .5s;
}
:disabled{
    cursor:default;
    background:#8A8A8A;
}
@media (max-width: 550px) {
    height: 42px;
    width: 85%;
font-size: 14px;
}
`
export const ButtonSubmit:React.FC<IButtonSubmit> = ({buttonType,buttonDisabled,buttonText}) => {
    return(
        <ButtonSignIn type={buttonType} disabled={buttonDisabled}>{buttonText}</ButtonSignIn>
    )
}