import styled from "@emotion/styled"
import vkIcon from '../../icons/vk.svg'
import redditIcon from '../../icons/reddit.svg'
import telegaIcon from '../../icons/telega.svg'
const FooterDiv = styled.div`
margin-top:auto;
display:flex;
background: #F5F5F5;
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
export const Footer:React.FC = () =>{

return(
<FooterDiv>
<RightsReserved>iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</RightsReserved>
<SocIcons>
    <img src={vkIcon} alt='Vk'></img>
    <img src={redditIcon} alt='Reddit'></img>
    <img src={telegaIcon} alt='Telegram'></img>
</SocIcons>
            </FooterDiv>
)
}