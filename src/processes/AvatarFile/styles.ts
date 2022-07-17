import styled from "@emotion/styled";
export const LoadedFile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 268px;
	height: 56px;
	background: #f5f5f5;
	margin: 12px 0 0 24px;
	@media (max-width: 768px) {
		width: 256px;
		margin: 16px 16px 0 16px;
	}
`;
export const LoadedImg = styled.img`
	width: 28px;
	height: 28px;
	margin: 0 0 0 12px;
`;
export const LoaderImg = styled.img`
	width: 18px;
	height: 18px;
	margin: 0 12px 0 12px;
`;
export const BucketImg = styled.img`
	width: 20px;
	height: 20px;
	margin: 0 12px 0 12px;
	cursor: pointer;
`;
export const ProgressContainer = styled.div`
	margin: 0 0 0 12px;
	display: flex;
	flex-direction: column;
`;
export const FileName = styled.p<{ colorProp: string }>(
	({ colorProp }) => `
font-family: Gilroy;
color:${colorProp};
font-size: 14px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin: 0 0 5px 0;
`
);
export const LoadingBar = styled.div`
	display: flex;
	width: 168px;
	height: 5px;
	border-radius: 5px;
	background: #c2c4ff;
`;
export const LoadingSpan = styled.span<{ progress: string; colorProp: string }>(
	({ progress, colorProp }) => `
height:100%;
width:${progress}%;
border-radius:5px;
background:${colorProp};
`
);
