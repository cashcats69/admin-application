import styled from "@emotion/styled"
import { AuthContainer } from "../../shared/ui"
import { AuthForm } from "../../features/Form"
import vkIcon from '../../shared/icons/vk.svg'
import redditIcon from '../../shared/icons/reddit.svg'
import telegaIcon from '../../shared/icons/telega.svg'
import { keyframes } from "@emotion/react"
import { useState } from "react"
const StyledH3 = styled.h3`
margin:0px;
font-size:34px;
`
const StyledAC = styled.p`
margin:0px;
font-size:15.5px;
`
const HeaderContainer = styled.div`
margin-bottom:40px;
margin-top:20px;
line-height:1;
`
const FooterContainer = styled.div`
width:100%;
margin-top:auto;
display:flex;
flex-direction:column;
position:relative;
`
const FooterDiv = styled.div`
display:flex;
background: #FFFFFF;
width: 100%;
border:0px;
align-items:center;
z-index:200;
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

export const AuthPage = () => {
    const [check,setCheck] = useState(true)
    async function sendData(data:any) {
        const response = await fetch(
        "https://academtest.ilink.dev/user/signIn",{
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method:"POST",
            body:`email=${data.email}&password=${data.password}`
        }
        );
        if (response.ok) {
        let json = await response.json();
        console.log("ok", json.data);
        return json.data;
        } else {
        console.log("Ошибка HTTP: " + response.status);
        }
    }
    
    return(
        <AuthContainer >
            <HeaderContainer>
            <StyledH3>ilink</StyledH3>
            <StyledAC>ACADEMY</StyledAC>
            </HeaderContainer>
            <AuthForm setCheck={setCheck} check={check} sendData={sendData}/>
            <FooterContainer>
                {!check ? <Popup><PopupP>Такого пользователя не существует</PopupP></Popup> : <PopupInv></PopupInv> }
            
            <FooterDiv>
            
<RightsReserved>iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</RightsReserved>
<SocIcons>
    <img alt='vk' src={vkIcon}></img>
    <img alt='reddit' src={redditIcon}></img>
    <img alt='telegram' src={telegaIcon}></img>
</SocIcons>
            </FooterDiv>
            </FooterContainer>
        </AuthContainer>
    )
}