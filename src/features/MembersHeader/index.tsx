import styled from "@emotion/styled"
const MembersHeaderP = styled.p`
font-family: Gilroy;
font-size: 12px;
font-weight: 700;
line-height: 15px;
letter-spacing: 0.03em;
text-align: left;
color:#464E5F;
padding-left:36px;
align-items:center;
`

const MembersDesc = styled.div`
display:flex;
color:black;
flex-basis:25%;
&:last-of-type{
    justify-content:center;
}
align-items:center;
`
const MembersHeaderPDif = styled.p`
width:50%;
font-family: Gilroy;
font-size: 12px;
font-weight: 700;
line-height: 15px;
letter-spacing: 0.03em;
text-align: left;
color:#464E5F;
align-items:center;
@media(max-width:1250px){
    margin: auto auto auto auto;
}
@media(max-width:768px){
    margin: 0 0 0 40%;
}
`
const MembersDescInfo = styled.div`
display;flex;
color:black;
align-items:center;
justify-content:center;
flex-basis:50%;
@media(max-width:768px){
flex-basis:50%;
}

`
const MembersContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
background:#F5F5F5;
height:43px;
align-items:center;
@media(max-width:768px){
    width:780px;
}
`


export const MembersHeader:React.FC =() => {
    return(
        <MembersContainer>
            <MembersDesc><MembersHeaderP>ИФ УЧЕНИКА</MembersHeaderP></MembersDesc>
            <MembersDescInfo><MembersHeaderPDif>КРАТКАЯ ИНФОРМАЦИЯ</MembersHeaderPDif></MembersDescInfo>
            <MembersDesc><MembersHeaderP>СТАТУС</MembersHeaderP></MembersDesc>
        </MembersContainer>
    )
}