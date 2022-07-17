import styled from "@emotion/styled";
import { TCurrentText, TMain } from "../../config";
import searchSvg from "../../icons/Search.svg";
export const Main = styled.div<TMain>(
	({ widthProp }) => `
    margin: 20px 24px 0 0;
    font-family: sans-serif;
    background: #FFFFFF;
    position: relative;
    width:${widthProp};
    height:76px;
    background:#FFFFFF;
    &:last-of-type{
        margin-right:0; 
}
    @media(max-width:768px){
        width:100%;
        margin: 20px 0 0 0;
    }
`
);

export const DropDownContainer = styled.div`
	width: 100%;
	height: 52px;
	background: #ffffff;
	margin: 0 auto;
	position: relative;
	cursor: pointer;
`;

export const DropDownHeader = styled.div`
	background: #ffffff;
	color: #333333;
	outline: none;
	height: 50px;
	width: 100%;
	border-radius: 2px;
	border: 1px solid #e0e0e0;
	text-indent: 16px;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	font-family: Gilroy;
`;

export const CurrentText = styled.p<TCurrentText>(
	({ colorProp }) => `
    color: ${colorProp};
`
);

export const DropDownListContainer = styled.div`
	background: #ffffff;
	box-shadow: 0px 4px 7px 0px #00000014;
	border-right: 2px solid #e0e0e0;
	display: flex;
	flex-direction: column;
	width: 100%;
	position: absolute;
	z-index: 100;
	color: #333333;
`;

export const DropDownList = styled.ul`
	color: #333333;
	width: 100%;
	padding: 0;
	margin: 0;
	background: #ffffff;
	box-sizing: border-box;
	color: #333333;
	font-size: 1.3rem;
	font-weight: 500;
`;

export const ListItem = styled.li`
	height: 50px;
	width: 100%;
	padding: 0px;
	text-indent: 16px;
	font-weight: 400;
	font-size: 14px;
	line-height: 50px;
	font-family: Gilroy;
	list-style: none;
	color: #333333;
	&:hover {
		color: #585cc6;
		background: #f5f5f5;
	}
	&:active {
		color: #585cc6;
		background: #f5f5f5;
	}
	&:disabled {
		color: #8a8a8a;
	}
`;
export const DrowArrow = styled.img`
	position: absolute;
	top: 60%;
	right: 15px;
	z-index: 100;
	color: #333333;
`;
export const InputLabel = styled.label`
	font-family: Factor A;
	height: 20px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	margin: 0;
	color: #333333;
`;
export const Input = styled.input`
	background: #ffffff;
	outline: none;
	height: 50px;
	width: 95%;
	border-radius: 2px;
	border: 1px solid #e0e0e0;
	padding: 0px;
	text-indent: 30px;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	font-family: Gilroy;
	margin: 12px auto 12px auto;
	color: #333333;
	background-image: url("${searchSvg}");
	background-repeat: no-repeat;
	background-position: 8px 50%;
	::placeholder {
		color: #8a8a8a;
		letter-spacing: 0em;
		text-align: left;
		text-indent: 30px;
		margin-botton: 8px;
	}
	&:disabled {
		color: #8a8a8a;
	}
`;
export const Search = styled.img`
	width: 20px;
	height: 20px;
`;
