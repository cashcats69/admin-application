import styled from "@emotion/styled"
import cameraPhoto from '../../icons/Camera.svg'
import changePhoto from '../../icons/ChangePhoto.svg'
const PhotoContainer= styled.div`
display:flex;
flex-direction:row;
`
const ColPhoto = styled.div`
display:flex;
flex-direction:column;
&:first-of-type{
margin-right:16px;
}
`
const PhotoOwnContainer = styled.div`
display:flex;
justify-content:center;
width:64px;
height:64px;
background: #F5F5F5;
`
const PhotoOwnImg = styled.img`
width:26px;
height:26px;
margin:auto 0 auto;
`

const ChangeContainer= styled.div`
display:flex;
flex-direction:row;
margin-top:12px;
`
const ChangePhoto = styled.img`
width:20px;
height:20px;
margin-right:10px;
`
const ChangeLink = styled.p`
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0.01em;
text-align: left;
color:#585CC6;
cursor:pointer;
margin:0px;
`
const HeaderText = styled.p`
font-family: Factor A TRIAL;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.0124em;
text-align: left;
color: #8A8A8A;
margin:0px;
`

export const PhotoInput:React.FC = () => {
    return(
        
            <PhotoContainer>
                <ColPhoto><PhotoOwnContainer><PhotoOwnImg src={cameraPhoto}/></PhotoOwnContainer></ColPhoto>
        <ColPhoto><HeaderText>Фото профиля</HeaderText><ChangeContainer><ChangePhoto src={changePhoto}/><ChangeLink>Изменить фото</ChangeLink></ChangeContainer></ColPhoto>
        </PhotoContainer>
            
    )
}