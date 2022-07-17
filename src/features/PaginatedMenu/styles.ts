import styled from "@emotion/styled";

export const PaginatedUl = styled.ul`
	padding: 40px 0 0 0;
	border-right: 1px solid #e0e0e0;
	height: 100%;
	margin: 0;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		border-right: 0px;
		border-bottom: 1px solid #e0e0e0;
		flex-direction: row;
		padding: 0px;
	}
`;
export const PaginatedLi = styled.li`
	display: flex;
	margin-bottom: 40px;
	margin-left: 40px;
	border-bottom: 4px solid #ffffff;
	outline: none;
	@media (max-width: 768px) {
		justify-content: center;
		margin: 12px 0px 0 0px;
		&:first-of-type {
			margin: 12px 16px 0 16px;
		}
		&:last-of-type {
			margin: 12px 16px 0 16px;
		}
		padding: 0;
		a {
			outline: none;
			display: flex;
			align-items: flex-end;
		}
	}
`;
export const CurrentLi = styled.li`
	border-right: 4px solid #585cc6;
	display: flex;
	margin-bottom: 40px;
	outline: none;
	margin-left: 40px;
	@media (max-width: 768px) {
		justify-content: center;
		border-right: 0;
		border-bottom: 4px solid #585cc6;
		margin: 12px 0 0 0;
		justify-content: space-between;
		padding: 0 16px 0 16px;
		a {
			outline: none;
			display: flex;
			align-items: flex-end;
		}
	}
`;
export const PaginatedImg = styled.img`
	margin-right: 12px;
	width: 20px;
	height: 20px;
	margin-top: auto;
	margin-bottom: auto;
	outline: none;
	@media (max-width: 768px) {
		display: none;
	}
`;
export const CurrentImg = styled.img`
	margin-right: 12px;
	margin-top: auto;
	margin-bottom: auto;
	width: 20px;
	height: 20px;
	outline: none;
	@media (max-width: 768px) {
		display: none;
	}
`;
export const PaginatedText = styled.p`
	color: #8a8a8a;
	margin: 0;
	font-family: "Factor A";
	font-size: 16px;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: 0.01em;
	text-align: center;
	outline: none;
`;
export const CurrentText = styled.p`
	color: #585cc6;
	margin: 0;
	font-family: "Factor A";
	font-size: 16px;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: 0.01em;
	text-align: center;
	outline: none;
`;
