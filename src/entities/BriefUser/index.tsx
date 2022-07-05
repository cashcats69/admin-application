import styled from "@emotion/styled"
import { IBriefUser } from "../../interfaces"

export const BriefUser:React.FC<IBriefUser> = ({smallAboutMe}) => {
const BriefContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
width:511px;
height:51px;
margin-left:16px;
text-align:left;
@media(max-width:1250px){
    padding-right:16px;
    margin-left:4px;
white-space:pre-wrap;
height:56px;
width:280px;
}
@media(max-width:1250px){
width:200px;
}

    `
    const BriefP = styled.p`
font-family: Gilroy;
font-size: 14px;
font-weight: 400;
line-height: 17px;
color:black;
@media(max-width:1250px){
    line-height: 14px;
    font-size: 12px;
    margin:0;
    word-wrap: break-word;
    }
    `
    const splicedSmall = smallAboutMe?.slice(0,44)
    
    return(
        <BriefContainer>
        <BriefP>{splicedSmall}</BriefP>
        </BriefContainer>
    )
}