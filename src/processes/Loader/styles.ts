import styled from "@emotion/styled";
export const Container = styled.div`
	backdrop-filter: blur(2px);

	position: fixed;
	z-index: 600;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ContainerGlobal = styled.div`
	height: calc(100vh - 91px);
	width: 100%;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Img = styled.img`
	width: 130px;
	height: 130px;
`;
