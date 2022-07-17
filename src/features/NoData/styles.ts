import styled from "@emotion/styled";
export const Container = styled.div`
	width: 1100px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 1300px) {
		width: 800px;
	}
	@media (max-width: 1150px) {
		width: 600px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
export const Img = styled.img`
	width: 378px;

	height: 288px;
	@media (max-width: 768px) {
		width: 240px;
		height: 226px;
	}
`;
export const Text = styled.p`
	color: #8a8a8a;
	font-family: Gilroy;
	font-size: 14px;
	font-weight: 600;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
`;
