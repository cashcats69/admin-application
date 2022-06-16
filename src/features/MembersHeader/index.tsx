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
const MembersDescInfo = styled.div`
color:black;
flex-basis:50%;
align-items:center;
`
const MembersContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
background:#F5F5F5;
height:43px;
align-items:center;
`


export const MembersHeader:React.FC =() => {
    return(
        <MembersContainer>
            <MembersDesc><MembersHeaderP>ИФ УЧЕНИКА</MembersHeaderP></MembersDesc>
            <MembersDescInfo><MembersHeaderP>КРАТКАЯ ИНФОРМАЦИЯ</MembersHeaderP></MembersDescInfo>
            <MembersDesc><MembersHeaderP>СТАТУС</MembersHeaderP></MembersDesc>
        </MembersContainer>
    )
}