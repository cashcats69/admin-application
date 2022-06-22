import styled from "@emotion/styled"
import { TButtonProp, TButtonReview, TStyledButton } from "../../../interfaces"

export const ButtonPublish = styled.button<TButtonProp>(({displayProp}) => `
display:${displayProp};
background: #585CC6;
color:#FFFFFF;
border:none;
width:159px;
height:52px;
cursor:pointer;
@media(max-width:550px){
    width:108px;
    height:42px;
        }
`)
export const ButtonReject = styled.button<TButtonProp>(({displayProp}) => `
display:${displayProp};
background: #EB5757;
color:#FFFFFF;
border:none;
width:148px;
height:52px;
margin-left:12px;
cursor:pointer;
@media(max-width:550px){
    margin-left:6px;
    width:102px;
    height:42px;
        }
`)

export const StyledButton = styled.button<TStyledButton>(({widthProp,colorProp}) => `
display:block;
background: ${colorProp};
color:#FFFFFF;
border:none;
width:${widthProp};
height:52px;
cursor:pointer;
@media(max-width:768px){
    width:100%;
    height:42px;
        }
`)
export const ButtonReview:React.FC<TButtonReview> =({widthProp,colorProp,text,handleClick}) => {
    return(
        <StyledButton type="button"widthProp={widthProp} colorProp={colorProp} onClick={handleClick}>{text}</StyledButton>
    )
}