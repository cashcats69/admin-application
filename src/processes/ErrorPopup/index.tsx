import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const pop = keyframes`
0% {
    transform: translate3d(0,0px,0);
}
15% {
    transform: translate3d(0,-62px,0);
    }
70% {
    transform: translate3d(0,-62px,0);
    }
100% {
    transform: translate3d(0,0px,0);
}
`
const Popup = styled.div`
display:flex;
justify-content:center;
background:#EB5757;
width:100%;
position:absolute;
height:62px;
z-index:100;
align-items:center;
animation: ${pop} 5s ease;
`
const PopupInv = styled.div`
position:absolute;
`
const PopupP = styled.p`
font-family: Gilroy;
font-size: 16px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
margin:0;
padding:0;
`
export type TErrorPopup = {
    check:boolean,
    text:string
}
export const ErrorPopup:React.FC<TErrorPopup> = ({check,text}) => {
return(
        !check ? <Popup><PopupP>{text}</PopupP></Popup> : <PopupInv></PopupInv> 
)
}