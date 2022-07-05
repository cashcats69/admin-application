import styled from "@emotion/styled"
import { useState } from "react";
import { IStatusUser } from "../../interfaces";

export const StatusUser:React.FC<IStatusUser> = ({academyStatus}) => {
    const [status,setStatusU] = useState(academyStatus);
    const StudyingContainer = styled.div`
    display:flex;
    width:139px;
    height:34px;
    background:#F0F9ED;
    justify-content:center;
    align-items:center;
    @media(max-width:768px){
        width:89px;
        height:33px;
    }
    `
    const StudyingP = styled.p`
    margin:0;
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #61BF4A;
`
const ExpelledContainer = styled.div`
    display:flex;
    width:139px;
    height:34px;
    background:#FDEEEE;
    justify-content:center;
    align-items:center;
    `
    const ExpelledP = styled.p`
    margin:0;
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #EB5757;
`
const FinishedContainer = styled.div`
    display:flex;
    width:139px;
    height:34px;
    background:#F5F5F5;
    justify-content:center;
    align-items:center;
    `
    const FinishedP = styled.p`
    margin:0;
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #8A8A8A;
`
switch(status){
    case'expelled':
    return(
            <ExpelledContainer><ExpelledP>Отчислен</ExpelledP></ExpelledContainer>
    )
    case 'studies':
        return(
            <StudyingContainer><StudyingP>Обучается</StudyingP></StudyingContainer>
        )
    case 'finished':
        return(
            <FinishedContainer><FinishedP>Закончил</FinishedP></FinishedContainer>
        )
}
    
}