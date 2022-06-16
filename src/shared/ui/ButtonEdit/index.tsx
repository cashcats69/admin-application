import styled from "@emotion/styled"

const StyledEdit = styled.button`
height: 52px;
width:108px;
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
margin-top:32px;
:disabled{
    cursor:default;
    background:#8A8A8A;
}
@media (max-width: 990px) {
    height: 42px;
    width: 100%;
}
`
const StyledFinish = styled.button`
height: 52px;
width:108px;
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
margin-top:32px;
:disabled{
    cursor:default;
    background:#8A8A8A;
}
@media (max-width: 990px) {
    margin: 0 0 80px 0;
    height: 42px;
    width: 100%;
}
`
type TDumbButton = {
    text:string,
    handleClick: () => void,
}
export const ButtonEdit:React.FC<TDumbButton> = ({text,handleClick}) =>{
    return(
        <StyledEdit onClick={handleClick}>{text}</StyledEdit>
    )
}
export const ButtonFinish:React.FC<TDumbButton> = ({text,handleClick}) =>{
    return(
        <StyledFinish onClick={handleClick}>{text}</StyledFinish>
    )
}