import styled from "@emotion/styled";

export const Container = styled.div`
	background-color: #ffffff;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	font-size: calc(10px + 2vmin);
	color: white;
	overflow: hidden;
	@media (max-width: 990px) {
		flex-direction: column;
	}
`;
export const FilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 16px 0 0 24px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: start;
		margin: 16px 0 20px 24px;
	}
`;

export const StyledUsers = styled.p`
	font-family: "Factor A";
	font-size: 32px;
	font-weight: 700;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	color: #333333;
	@media (max-width: 768px) {
		margin: 8px 0 16px 0;
	}
`;
export const BodyContainer = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;
export const UsersList = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 24px;
	@media (max-width: 900px) {
		width: 510px;
	}
	@media (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
		margin-left: 0px;
	}
`;
export const StyledMenu = styled.div`
	width: 273px;
	@media (max-width: 820px) {
		width: 230px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
export const RadioButton = styled.input`
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 9px;
	height: 9px;
	background: #e0e0e0;
	cursor: pointer;
	border-radius: 1px;
	margin: 0 5px 0 5px;
	&:checked {
		background: #585cc6;
	}
`;
export const RadioContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;
export const StyledContaner = styled.div`
	display: flex;
	flex-direction: column;
	width: 933px;
	min-width: 500px;
	@media (max-width: 1220px) {
		width: auto;
	}
	@media (max-width: 768px) {
		min-width: 0;
		min-height: 400px;
	}
`;
export const ContainerButton = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		margin-right: 11px;
	}
`;
