import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	outline: none;
	flex-direction: column;
	width: 519px;
	height: 260px;
	background: #f5f5f5;
	margin: 12px 12px 12px 12px;
	@media (max-width: 1368px) {
		width: 409px;
		height: 329px;
	}
	@media (max-width: 1150px) {
		width: 359px;
		height: 329px;
	}
	@media (max-width: 1000px) {
		width: 259px;
		height: 329px;
	}
	@media (max-width: 768px) {
		width: 272px;
		height: 338px;
	}
`;
export const ReviewContainer = styled.div`
	margin: 24px;
	outline: none;
	@media (max-width: 1000px) {
		margin: 12px;
	}
`;
export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	outline: none;
`;
export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 24px;
	outline: none;
	@media (max-width: 1000px) {
		margin-bottom: 0px;
	}
	@media (max-width: 768px) {
		margin-bottom: 0px;
		flex-direction: column;
	}
`;
export const DateContainer = styled.div`
	margin: 12px 0 12px 0;
	outline: none;
`;
export const BodyContainer = styled.div`
	height: 155px;
	outline: none;
	@media (max-width: 768px) {
		height: 198px;
	}
`;
export const ProfileImg = styled.img`
	width: 52px;
	height: 52px;
	background: #ffffff;
	outline: none;
	@media (max-width: 1000px) {
		width: 40px;
		height: 40px;
	}
`;
export const ProfileName = styled.p`
	font-family: "Factor A";
	font-size: 24px;
	font-weight: 500;
	line-height: 28px;
	text-align: left;
	color: #333333;
	margin: auto 0 auto 20px;
	align-items: center;
	@media (max-width: 1000px) {
		margin: auto 0 auto 8px;
		font-size: 16px;
		line-height: 24px;
	}
`;
export const HeaderDate = styled.p`
	font-family: "Factor A";
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
	color: #333333;
	margin: 0px;
	outline: none;
	@media (max-width: 1000px) {
		font-size: 10px;
		font-weight: 400;
		line-height: 14px;
	}
`;
export const BodyP = styled.p`
	font-family: Gilroy;
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	text-align: left;
	color: #333333;
	margin: 0px;
	@media (max-width: 1000px) {
		font-size: 12px;
		line-height: 20px;
	}
`;
