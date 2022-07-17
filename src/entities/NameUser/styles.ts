import styled from "@emotion/styled";

export const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-left: 12px;
`;
export const NameP = styled.p`
	margin: 0;
	font-family: Gilroy;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	letter-spacing: 0em;
	color: #464e5f;
	@media (max-width: 768px) {
		font-size: 12px;
		line-height: 15px;
		white-space: nowrap;
	}
`;
