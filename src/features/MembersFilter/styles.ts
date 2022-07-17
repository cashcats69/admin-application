import styled from "@emotion/styled";

export const Main = styled.div`
	font-family: sans-serif;
	background: #ffffff;
	position: relative;
	width: 163px;
	height: 62px;
	border: 1px solid #e0e0e0;
`;

export const DropDownContainer = styled.div`
	width: 163px;
	height: 62px;
	margin: 0 auto;
	position: relative;
	cursor: pointer;
`;

export const DropDownHeader = styled.div`
	padding: 18.6px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	font-weight: 500;
	font-size: 1.3rem;
	color: #333333;
`;

export const DropDownListContainer = styled.div`
	position: absolute;
	z-index: 100;
	width: 163px;
`;

export const DropDownList = styled.ul`
	padding: 0;
	margin: 0;
	background: #ffffff;
	border: 2px solid #e5e5e5;
	box-sizing: border-box;
	color: #333333;
	font-size: 1.3rem;
	font-weight: 500;
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 18.6px;
	&:hover {
		color: #585cc6;
		background: #f5f5f5;
	}
	&:active {
		color: #585cc6;
		background: #f5f5f5;
	}
`;
export const DrowArrow = styled.img`
	position: absolute;
	top: 50%;
	left: 90%;
`;
