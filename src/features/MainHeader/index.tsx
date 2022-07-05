import styled from "@emotion/styled"
import { useStore } from "effector-react"
import { useState, useEffect } from "react"
import { $userStore, getData } from "../../store/AboutStore"
import noPhoto from "../../shared/icons/noPhoto.svg"
import panel from "../../shared/icons/panel.svg"
import ilink from "../../shared/icons/ilinkLogo.svg"
import { useNavigate } from "react-router-dom"
const Container = styled.div`
height:116px;
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:#FFFFFF;
@media(max-width:768px){
    height:77px;
}
`
const UserContainer = styled.div`
margin-left:80px;
display:flex;
flex-direction:row;
align-items:center;
@media(max-width:768px){
    margin-left:16px;
    }
`
const UserImg = styled.img`
width:52px;
height:52px;
@media(max-width:768px){
    width:36px;
    height:36px;
}
`
const UserText = styled.p`
font-family: Gilroy;
font-size: 18px;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin-left:20px;
width:40px;
@media(max-width:768px){
margin-left:8px;
font-size: 12px;
line-height: 14px;
}
`
const UserLastText = styled.p`
font-family: Gilroy;
font-size: 18px;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin-left:5px;
width:70px;
@media(max-width:768px){
display:none;
}
`
const LogoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const LogoImg = styled.img`
width:85px;
height:52px;
@media(max-width:768px){
width:59px;
height:36px;
}
`
const Panel = styled.div`
margin-right:80px;
border-radius:3px;
background: #585CC6;
width:227px;
height:52px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
background-size: 0% 100%;
&:hover{
background-image: linear-gradient(#797DDF, #797DDF);
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 100% 100%;
transition: background-size .5s, color .5s;
}
@media(max-width:768px){
margin-right:16px;
width:36px;
height:36px;
}
`
const PanelText = styled.p`
color:#FFFFFF;
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0.01em;
text-align: left;
@media(max-width:768px){
    display:none;
}
`
const PanelImg = styled.img`
width:20px;
height:20px;
display:none;
@media(max-width:768px){
    display:block;
}
`
export const MainHeader:React.FC = () => {
    const toPanel = useNavigate()
    const userStore = useStore($userStore)
    const [firstName,setFirstname] = useState<string | null>(null);
    const [lastName,setLastname] = useState<string | null>(null);
    const [photo,setPhoto] = useState<string | null>(null);
    useEffect(() => {getData()},[])
    useEffect(() => {setFirstname(userStore.firstName); setLastname(userStore.lastName); setPhoto(userStore.profileImage);},[userStore])
    return(
        <Container>
            <UserContainer>
                <UserImg src={photo ? "https://academtest.ilink.dev/images/" + photo : noPhoto}/>
                <UserText>{firstName ? firstName : '' }
                </UserText>
                <UserLastText>{lastName ? lastName : '' }
                </UserLastText>
            </UserContainer>
            <LogoContainer>
                <LogoImg src={ilink}/>
            </LogoContainer>
            <Panel onClick={() => toPanel('/admin/members')}>
                <PanelText>Панель управления</PanelText>
                <PanelImg src={panel}/>
            </Panel>
        </Container>
    )
}