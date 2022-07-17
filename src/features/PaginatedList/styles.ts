import styled from "@emotion/styled";
import arrowLeft from "../../shared/icons/arrowLeftPag.svg";
import arrowRight from "../../shared/icons/arrowRightPag.svg";
export const PaginatedContainer = styled.nav`
	display: flex;
	justify-content: center;
`;
export const PaginatedUl = styled.ul`
	display: flex;
	flex-direction: row;
	padding: 0;
`;
export const PaginatedLi = styled.li`
	width: 32px;
	height: 32px;
	border: 1px solid #e0e0e0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin: 4px;
	cursor: pointer;
`;
export const CurrentLi = styled.li`
	border: 1px solid #585cc6;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin: 4px;
	cursor: pointer;
`;
export const PaginatedA = styled.a`
	text-decoration: none;
	font-family: Gilroy;
	font-size: 14px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: center;
`;
export const PaginatedArrowLeft = styled.li<{ colorProp: string }>(
	({ colorProp }) => `
width:32px;
height:32px;
border: 1px solid #E0E0E0;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
margin:4px;
cursor:pointer;
background:${colorProp};
background-image:url(${arrowLeft});
background-repeat: no-repeat;
background-position: center;
`
);
export const PaginatedArrowRight = styled.li<{ colorProp: string }>(
	({ colorProp }) => `
width:32px;
height:32px;
border: 1px solid #E0E0E0;
display:flex;
justify-content:center;
align-items:center;
background:${colorProp};
border-radius:10px;
margin:4px;
cursor:pointer;
background-image:url(${arrowRight});
background-repeat: no-repeat;
background-position: center;
`
);
