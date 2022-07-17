import styled from "@emotion/styled";
import ModalExitImg from "../../shared/icons/ModalExit.svg";
export const Container = styled.div`
	margin: 200px auto auto auto;
	width: 676px;
	height: 325px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	z-index: 800;
	@media (max-width: 768px) {
		margin: 46px auto auto auto;
		width: 288px;
		height: 476px;
	}
`;

export const ContainerHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 16px 16px 0 16px;
	@media (max-width: 768px) {
		margin: 16px 16px 0 16px;
	}
`;
export const HeaderText = styled.p`
	font-family: "Factor A";
	font-size: 24px;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: -0.0124em;
	text-align: left;
	color: #333333;
	margin: 0;
	@media (max-width: 768px) {
		font-size: 20px;
		line-height: 26px;
		text-align: left;
	}
`;
export const ContainerInput = styled.div`
	margin: 20px 16px 16px 16px;
`;
export const ContainerButtons = styled.div`
	display: flex;
	margin: 24px;
	width: 454px;
	justify-content: space-between;
	@media (max-width: 768px) {
		width: auto;
		height: 92px;
		flex-direction: column;
		margin: 16px;
	}
`;
export const BGModal = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 500;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(3px);
`;

export const ImgButton = styled.button`
	outline: none;
	border: 0;
	background: transparent;
	cursor: pointer;
	background-image: url(${ModalExitImg});
	width: 25px;
	height: 25px;
	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;
