import styled from "@emotion/styled"
import { IBriefUser } from "../../interfaces"

export const BriefUser:React.FC<IBriefUser> = ({brief}) => {
const BriefContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
width:511px;
max-height:51px;
    `
    const BriefP = styled.p`
font-family: Gilroy;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:black;
    `
    return(
        <BriefContainer>
        <BriefP>{brief}</BriefP>
        </BriefContainer>
    )
}