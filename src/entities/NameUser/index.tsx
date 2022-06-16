import styled from "@emotion/styled"
import { INameUser } from "../../interfaces"


const NameContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding-left:12px;
`
const NameP = styled.p`
margin:0;
font-family: Gilroy;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #464E5F;
`
export const NameUser:React.FC<INameUser> = ({name,surName}) => {
    return(
        <NameContainer>
            <NameP>
        {name} {surName}
            </NameP>
        </NameContainer>
    )
}