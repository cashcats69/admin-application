import styled from "@emotion/styled"
import { AuthContainer } from "../../shared/ui"
import redditIcon from '../../shared/icons/reddit.svg'
import telegaIcon from '../../shared/icons/telega.svg'
import vkIcon from '../../shared/icons/vk.svg'
// import popOk from '../../shared/icons/popupOK.svg'

import { RecoveryForm } from "../../features/RecoveryForm"
import { useState } from "react"
import { keyframes } from "@emotion/react"
import { ErrorSend } from "../../processes/ErrorCode"
import { send } from "process"
import { TResponseData } from "../../interfaces"
const StyledH3 = styled.h3`
margin:0px;
font-size:34px;
`
const StyledAC = styled.p`
margin:0px;
font-size:14px;
`
const HeaderContainer = styled.div`
margin-bottom:40px;
margin-top:20px;
line-height:1;
`
const FooterDiv = styled.div`
display:flex;
flex-wrap:wrap;
background: #FFFFFF;
width: 100%;
border:0px;
position:absolute;
bottom:0;
align-items:center;
justify-content:space-between;
height:64px;
@media (max-width: 550px) {
justify-content:space-around;
flex-direction:column;
height:84px;
}
`
const RightsReserved = styled.p`
font-family: Factor A TRIAL;
font-size: 12px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #333333;
margin-left:80px;
@media (max-width: 550px) {
margin-left:0px;
    }
`
const SocIcons = styled.div`
display:flex;
justify-content: space-around;
width:104px;
height:24px;
margin-right:80px;
@media (max-width: 550px) {
margin-right:0px;
    }
`

const PopupInv = styled.div`
position:absolute;
`
export const RecoveryPage = () => {
    async function sendData(data:string) {
    const getValue = () =>{
        return true
    }
    const checker = getValue()
    if(checker === false){
        setCheck(false)
        setTypePop(false)
        
        console.log(1)
    } 
    if(checker === true){
        setCheck(false)
        setTypePop(true)
        console.log(2)
    }
    console.log(3)
    setTimeout(() => {
        setCheck(true)
    }, 3000)
    return checker
    }
    const [check,setCheck] = useState(true)
    const [typePop,setTypePop] = useState(true)
    return(
        <AuthContainer>
            <HeaderContainer>
            <StyledH3>ilink</StyledH3>
            <StyledAC>ACADEMY</StyledAC>
            </HeaderContainer>
            <RecoveryForm check={check} sendData={sendData}/>
            {!check ? <ErrorSend typePop={typePop} setCheck={setCheck}/> : <PopupInv></PopupInv> }
            <FooterDiv>
<RightsReserved>iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</RightsReserved>
<SocIcons>
    <img src={vkIcon} alt='Vk'></img>
    <img src={redditIcon} alt='Reddit'></img>
    <img src={telegaIcon} alt='Telegram'></img>
</SocIcons>
            </FooterDiv>
        </AuthContainer>
    )
}