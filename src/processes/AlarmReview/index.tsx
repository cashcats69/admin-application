import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import popNot from '../../shared/icons/declinedSend.svg'
import popOk from '../../shared/icons/acceptedSend.svg'
import success from '../../shared/icons/successEditReview.svg'
import fail from '../../shared/icons/failEditReview.svg'
import accept from '../../shared/icons/userAccept.svg'
import reject from '../../shared/icons/userReject.svg'
import { TAlarmReview } from "../../interfaces"
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
position:fixed;
bottom:80px;
right:10%;
cursor:pointer;
z-index:999999;
@media (max-width: 768px) {
    width:288px;
    height:166px;
    margin-left:auto;
    margin-right:auto;
    }
`

export const AlarmReview:React.FC<TAlarmReview> = ({typePop,theme,setCheck}) => {

if(theme === 'edit' || theme ==='send'){  return(
    <Img src={typePop ? popOk : popNot} onClick={() => {
                setCheck(true)
            }}/>
    )} else if(theme === 'profile'){
        return(
            <Img src={typePop ? accept : reject} onClick={() => {
                        setCheck(true)
                    }}/>
                )
    }
    else{
        return(
            <Img src={typePop ? success : fail} onClick={() => {
                            setCheck(true)
                        }}/>
                ) 
    }
}