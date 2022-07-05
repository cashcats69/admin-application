import styled from "@emotion/styled/macro";
import { memo } from "react"
import { TPhotoInput } from "../../../interfaces"
import changePhoto from '../../icons/ChangePhoto.svg'
const PhotoContainer= styled.div`
display:flex;
flex-direction:row;
cursor:pointer;
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
position:relative;
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
font-family: 'Factor A' ;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
color: #8A8A8A;
margin:0px;
`

export const PhotoInput:React.FC<TPhotoInput> = memo(({getValue,currentValue}) => {
    const HiddenPhoto = styled.img`
width:100%;
height:100%;
position: absolute;
object-fit:contain; 
`
const HiddenDivImg = styled.div`
display:flex;
flex-direction:column;
background: transparent;
visibility: hidden;
width:400px;
height:420px;
position: absolute;
z-index: 1000;
bottom:-417px;
left: -170px;
align-items:center;
@media(max-width:786px){
    display:none;
}
`
const HiddenDiv = styled.div`
display:flex;
position:relative;
flex-direction:column;
background:#FFFFFF;
width:400px;
height:400px;
margin-bottom:auto;
z-index: 1000;
-webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`
const HiddenTriangle = styled.div`
    width:0px;
    height:0px;
    border-style: solid;
    border-width: 20px 20px 20px 20px;
    border-color: transparent transparent #FFFFFF transparent;  
    z-index: 1500;
`
    const PhotoOwnImg = styled.img`
width:64px;
height:64px;
margin:auto 0 auto;
&:hover + ${HiddenDivImg}{
    visibility:visible;
    }
`
    return(
        
            <PhotoContainer>
                <ColPhoto><PhotoOwnContainer><PhotoOwnImg src={currentValue ? currentValue : changePhoto}/><HiddenDivImg><HiddenTriangle></HiddenTriangle><HiddenDiv><HiddenPhoto src={currentValue ? currentValue : changePhoto}/></HiddenDiv></HiddenDivImg></PhotoOwnContainer></ColPhoto>
        <ColPhoto><HeaderText>Фото профиля</HeaderText><ChangeContainer><ChangePhoto src={changePhoto}/>
        <label htmlFor="fileInput">
        <input type='file' id="fileInput" hidden={true} onChange={getValue}/>
        <ChangeLink>Изменить фото</ChangeLink>
        </label></ChangeContainer></ColPhoto>
        </PhotoContainer>
            
    )
});