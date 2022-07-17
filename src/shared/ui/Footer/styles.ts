import styled from "@emotion/styled";
export const FooterDiv = styled.div`
	margin-top: auto;
	display: flex;
	background: #f5f5f5;
	width: 100%;
	border: 0px;
	align-items: center;
	z-index: 200;
	justify-content: space-between;
	height: 64px;
	outline: none;
	@media (max-width: 550px) {
		justify-content: space-around;
		flex-direction: column;
		height: 84px;
	}
`;
export const RightsReserved = styled.p`
	font-family: "Factor A";
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: left;
	color: #333333;
	margin-left: 80px;
	outline: none;
	@media (max-width: 550px) {
		margin-left: 0px;
	}
`;
export const SocIcons = styled.div`
	display: flex;
	justify-content: space-around;
	width: 104px;
	height: 24px;
	margin-right: 80px;
	outline: none;
	@media (max-width: 550px) {
		margin-right: 0px;
	}
`;
