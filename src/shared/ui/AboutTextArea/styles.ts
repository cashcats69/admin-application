import styled from "@emotion/styled";
import { TAboutArea } from "../../config";
export const TextArea = styled.textarea<TAboutArea>(
	({ heightProp, normalHeightProp }) => `
    outline: none;
    height: ${normalHeightProp};
    border-radius: 2px;
    border: 1px solid #E0E0E0;
    padding:0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    font-family: Gilroy;
    padding-left:16px;
    padding-right:16px;
    resize:none;
    ::placeholder{
    color: #8A8A8A;
    letter-spacing: 0em;
    text-align: left;
    margin-botton:8px;
    }
    &:disabled{
        background:#FFFFFF;
        color: #8A8A8A;
    }
    @media(max-width:768px){
        width:calc(100% - 30px);
        line-height: 33px;
        color:#333333;
        padding:15px 15px 0 15px;
        height: ${heightProp};
        text-indent: 0;
        ::placeholder{
            text-indent: 0;
        }
}
`
);
export const TextAreaLabel = styled.label`
	font-family: Factor A;
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: -0.0124em;
	text-align: left;
	margin: 0 0 8px 0;
`;
export const AboutTextAreaContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	color: #333333;
	margin: 20px 0 0 0;
	width: 100%;
`;
export const ModalTextAreaContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	color: #333333;
	margin: 0;
	width: 100%;
`;
export const SymbolsCounter = styled.label`
	font-family: Gilroy;
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	letter-spacing: 0em;
	text-align: right;
	position: absolute;
	color: #8a8a8a;
	bottom: 5px;
	right: 10px;
`;
