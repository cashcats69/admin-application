import styled from "@emotion/styled";
import { TDiv } from "../../config";
export const Input = styled.input`
	outline: none;
	height: 50px;
	width: 100%;
	border-radius: 2px;
	border: 1px solid #e0e0e0;
	padding: 0px;
	text-indent: 16px;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	font-family: Gilroy;
	::placeholder {
		color: #8a8a8a;
		letter-spacing: 0em;
		text-align: left;
		text-indent: 16px;
		margin-botton: 8px;
	}
	&:disabled {
		background: #ffffff;
		color: #8a8a8a;
	}
`;
export const InputLabel = styled.label`
	font-family: Factor A;
	height: 20px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	margin: 0;
`;
export const Div = styled.div<TDiv>(
	({ widthProp }) => `
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin-top: 20px;
width:${widthProp};
margin-right:24px;
&:last-of-type{
    margin-right:0; 
}
@media(max-width:768px){
    margin-right:0px;
    width:100%;
}
`
);
