import styled from "@emotion/styled"
import { TEditButton } from "../../../interfaces"

const StyledEdit = styled.button`
height: 52px;
width:188px;
border-radius: 2px;
border: 0;
cursor:pointer;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.01em;
text-align: center;
background: #585CC6;
color:white;

:disabled{
    cursor:default;
    background:#8A8A8A;
}
@media (max-width: 768px) {
    margin-top:32px;
    height: 42px;
    width: 100%;
}
`
const StyledFinish = styled.button`
height: 52px;
width:248px;
border-radius: 2px;
border: 0;
cursor:pointer;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.01em;
text-align: center;
background: #585CC6;
color:white;
margin:32px 0 27% 0;
:disabled{
    cursor:default;
    background:#8A8A8A;
}
@media (max-width: 768px) {
    margin: 0 0 80px 0;
    height: 42px;
    width: 100%;
}
`

export const ButtonEdit:React.FC<TEditButton> = ({text,handleClick}) =>{
    return(
        <StyledEdit onClick={handleClick}>{text}</StyledEdit>
    )
}
export const ButtonFinish:React.FC<TEditButton> = ({text,handleClick}) =>{
    return(
        <StyledFinish onClick={handleClick}>{text}</StyledFinish>
    )
}
