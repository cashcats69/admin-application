import styled from "@emotion/styled";
import { IStyledButton, TButtonProp } from "../../config";
export const ButtonPublish = styled.button<TButtonProp>(
	({ displayProp }) => `
    display:${displayProp};
    background: #585CC6;
    color:#FFFFFF;
    border:none;
    outline:none;
    width:159px;
    height:52px;
    cursor:pointer;
    background-size: 0% 100%;
    &:hover{
    background-image: linear-gradient(#797DDF, #797DDF);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: background-size .5s, color .5s;
    }
    @media(max-width:550px){
        width:108px;
        height:42px;
            }
    `
);
export const ButtonReject = styled.button<TButtonProp>(
	({ displayProp }) => `
    display:${displayProp};
    background: #EB5757;
    color:#FFFFFF;
    border:none;
    outline:none;
    width:148px;
    height:52px;
    margin-left:12px;
    cursor:pointer;
    background-size: 0% 100%;
    &:hover{
    background-image: linear-gradient(#FF7171, #FF7171);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: background-size .5s, color .5s;
    }
    @media(max-width:550px){
        margin-left:6px;
        width:102px;
        height:42px;
            }
    `
);

export const StyledButton = styled.button<IStyledButton>(
	({ widthProp, colorProp, transitionProp }) => `
    display:block;
    outline:none;
    background: ${colorProp};
    color:#FFFFFF;
    border:none;
    width:${widthProp};
    height:52px;
    cursor:pointer;
    :disabled{
        cursor:default;
        background:#8A8A8A;
    }
    background-size: 0% 100%;
    &:hover{
    background-image: linear-gradient(${transitionProp}, ${transitionProp});
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: background-size .5s, color .5s;
    }
    @media(max-width:768px){
        width:100%;
        height:42px;
            }
`
);
