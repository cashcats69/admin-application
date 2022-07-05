import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { TErrSend } from "../../interfaces"
import popNot from '../../shared/icons/popNOT.svg'
import popOk from '../../shared/icons/popupOK.svg'
const pop = keyframes`
0% {
    transform: translate3d(500px,0px,0);
}
100% {
    transform: translate3d(0,0,0);
    }

}
`
const Img = styled.img`
animation: ${pop} 1s ease;
margin-top:auto;
margin-left:auto;
margin-bottom:80px;
margin-right:40px;
cursor:pointer;
@media (max-width: 550px) {
    width:288px;
    height:166px;
    margin-left:auto;
    margin-right:auto;
        }
`

export const ErrorSend:React.FC<TErrSend> = ({typePop,setCheck}) => {
    return(
<Img src={typePop ? popOk : popNot} onClick={() => {
                setCheck(true)
            }}/>
    )
}