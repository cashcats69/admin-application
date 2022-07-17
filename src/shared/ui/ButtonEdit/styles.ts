import styled from "@emotion/styled";

export const StyledEdit = styled.button`
	font-family: Gilroy;
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	height: 52px;
	width: 188px;
	border-radius: 2px;
	border: 0;
	cursor: pointer;
	text-align: center;
	background: #585cc6;
	color: white;
	background-size: 0% 100%;
	&:hover {
		background-image: linear-gradient(#797ddf, #797ddf);
		background-position: 0% 100%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		transition: background-size 0.5s, color 0.5s;
	}
	:disabled {
		cursor: default;
		background: #8a8a8a;
	}
	@media (max-width: 768px) {
		margin-top: 32px;
		height: 42px;
		width: 100%;
		font-size: 14px;
		line-height: 18px;
		letter-spacing: 0.01em;
		text-align: center;
	}
`;
export const StyledFinish = styled.button`
	font-family: Gilroy;
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	text-align: center;
	height: 52px;
	width: 248px;
	border-radius: 2px;
	border: 0;
	cursor: pointer;
	background: #585cc6;
	color: white;
	margin: 32px 0 27% 0;
	background-size: 0% 100%;
	&:hover {
		background-image: linear-gradient(#797ddf, #797ddf);
		background-position: 0% 100%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		transition: background-size 0.5s, color 0.5s;
	}
	:disabled {
		cursor: default;
		background: #8a8a8a;
	}
	@media (max-width: 768px) {
		margin: 0 0 80px 0;
		font-size: 14px;
		font-weight: 500;
		height: 42px;
		width: 100%;
	}
`;
