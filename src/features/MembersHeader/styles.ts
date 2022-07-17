import styled from "@emotion/styled";
export const MembersHeaderP = styled.p`
	font-family: Gilroy;
	font-size: 12px;
	font-weight: 700;
	line-height: 15px;
	letter-spacing: 0.03em;
	text-align: left;
	color: #464e5f;
	padding-left: 36px;
	align-items: center;
`;

export const MembersDesc = styled.div`
	display: flex;
	color: black;
	flex-basis: 25%;
	&:last-of-type {
		justify-content: center;
	}
	align-items: center;
`;
export const MembersHeaderPDif = styled.p`
	width: 50%;
	font-family: Gilroy;
	font-size: 12px;
	font-weight: 700;
	line-height: 15px;
	letter-spacing: 0.03em;
	text-align: left;
	color: #464e5f;
	align-items: center;
	@media (max-width: 1250px) {
		margin: auto auto auto auto;
	}
	@media (max-width: 768px) {
		margin: 0 0 0 40%;
	}
`;
export const MembersDescInfo = styled.div`
display;flex;
color:black;
align-items:center;
justify-content:center;
flex-basis:50%;
@media(max-width:768px){
flex-basis:50%;
}

`;
export const MembersContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	background: #f5f5f5;
	height: 43px;
	align-items: center;
	@media (max-width: 768px) {
		width: 780px;
	}
`;
