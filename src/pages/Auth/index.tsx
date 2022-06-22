import styled from "@emotion/styled"
import { AuthContainer } from "../../shared/ui"
import { AuthForm } from "../../features/Form"
import vkIcon from '../../shared/icons/vk.svg'
import redditIcon from '../../shared/icons/reddit.svg'
import telegaIcon from '../../shared/icons/telega.svg'
import { useState } from "react"
import { ErrorPopup } from "../../processes/ErrorPopup"
import { useNavigate } from "react-router-dom"
import {  getUsers } from "../../store/UsersStore"
import { TResponseData } from "../../interfaces"
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


export const AuthPage = () => {
    const [check,setCheck] = useState(true)
    const [ErrText,setErrText] = useState('')
    const toMain = useNavigate()
    async function sendData(data: TResponseData) {
        const response = await fetch(
        "https://academtest.ilink.dev/user/signIn",{
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method:"POST",
            body:`email=${data.email}&password=${data.password}`
        }
        );
        if (response.ok) {
        let json = await response.json();
        console.log("ok", json.accessToken);
        localStorage.setItem("token", json.accessToken);
        getUsers()
        toMain('/admin/members')
        } else if(response.status === 400){
            setErrText('Введен неверный пароль')
        console.log("Ошибка HTTP 400: " + response.status);
        setCheck(false)
        setTimeout(() => {
            setCheck(true)
        },5000)
        }   else if(response.status === 500){
            console.log("Ошибка HTTP 500: " + response.status);
            setErrText('Данного пользователя не существует')
            setCheck(false)
        setTimeout(() => {
            setCheck(true)
        },5000)
            }
    }
    
    return(
        <AuthContainer >
            <HeaderContainer>
            <StyledH3>ilink</StyledH3>
            <StyledAC>ACADEMY</StyledAC>
            </HeaderContainer>
            <AuthForm check={check} sendData={sendData}/>
            <FooterContainer>
            <ErrorPopup text={ErrText} check={check}/>
            
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