import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
	background: #585cc6;
	width: 100vw;
	height: 91px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const HeaderImg = styled.img`
	width: 40px;
	height: 40px;
	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;
export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const ContainerMiddle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: auto;
	@media (max-width: 768px) {
		margin: 0;
	}
`;
export const ContainerCol = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	line-height: 1;
	margin: 0 80px 0 0;
	@media (max-width: 768px) {
		margin: 0 16px 0 0;
	}
`;
export const StyledH3 = styled.h3`
	margin: 0px;
	font-size: 30px;
`;
export const StyledAC = styled.p`
	margin: 0px;
	font-size: 15.5px;
`;
export const HeaderMiddle = styled.p`
	font-family: "Factor A";
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 32px;
	@media (max-width: 768px) {
		font-family: Gilroy;
		font-size: 20px;
		font-weight: 800;
		line-height: 14px;
		letter-spacing: 0em;
		text-align: left;
		white-space: nowrap;
		margin: 0 0 8px 0;
	}
`;
export const HeaderContainerP = styled.p`
	display: inline;
	margin: 0;
	font-family: Gilroy;
	font-size: 16px;
	font-weight: 500;
	line-height: 18px;
	letter-spacing: 0.03em;
	text-align: left;
	color: #ffffff;
	margin-left: 12px;
	width: 120px;
`;
export const FlexContainer = styled.div`
	display: flex;
	flex-grow: 1;
	margin: 0 0 0 80px;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
		justify-content: center;
		margin: 0 0 0 16px;
	}
`;
