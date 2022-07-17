import styled from "@emotion/styled/macro";

export const Eye = styled.img`
	width: 25px;
	height: 20px;
	cursor: pointer;
`;
export const StyledH2 = styled.h2`
	font-family: Factor A;
	color: #333333;
	font-size: 32px;
	font-weight: 700;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 0px;
	margin-top: 0px;
	@media (max-width: 768px) {
		font-size: 24px;
	}
`;
export const Input = styled.input<{ colorProp: string }>(
	({ colorProp }) => `
outline: none;
height: 50px;
width: 100%;
border-radius: 2px;
border: 1px solid ${colorProp};
padding:0px;
text-indent: 16px;
font-weight: 400;
font-size: 14px;
line-height: 22px;
font-family: Gilroy;
::placeholder{
color: #8A8A8A;
letter-spacing: 0em;
text-align: left;
text-indent: 16px;
margin-botton:8px;
}
&:focus{
	border: 1px solid #585CC6;
}
`
);
export const InputPass = styled.input<{ colorProp: string }>(
	({ colorProp }) => `
outline: none;
height: 50px;
width: 100%;
border-radius: 2px;
border: 1px solid ${colorProp};
padding:0px;
text-indent: 16px;
font-weight: 600;
font-size: 14px;
line-height: 22px;
font-family: Gilroy;
letter-spacing: 0.3rem;
::placeholder{
color: #8A8A8A;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
text-indent: 16px;
margin-botton:8px;
}
&:focus{
	border: 1px solid #585CC6;
}
`
);
export const InputLabel = styled.label`
	font-family: Factor A;
	height: 20px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	margin-bottom: 4px;
	margin-top: 24px;
`;
export const Div = styled.div`
position:relative;
display:flex;
flex-direction:column;
color: #333333;
margin-bottom:8px;
margin-top 24px;
width:85%;
`;
export const Indicators = styled.div`
	width: 50px;
	display: flex;
	flex-direction: row-reverse;
	position: absolute;
	margin-top: 65px;
	margin-left: 90%;
	@media (max-width: 724px) {
		margin-left: 88%;
	}
	@media (max-width: 680px) {
		margin-left: 85%;
	}
	@media (max-width: 600px) {
		margin-left: 80%;
	}
`;
export const SpanToolTip = styled.span`
	visibility: hidden;
	width: 164px;
	height: 50px;
	background-color: #f5f5f5;
	color: #333333;
	text-align: center;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	right: -10%;
	bottom: 100%;
	font-family: Gilroy;
	font-size: 13px;
	font-weight: 400;
	line-height: 18px;
`;
export const Info = styled.img(
	({ infoValue }: { infoValue: boolean }) => `
		width: 25px;
		height: 20px;
		display: ${infoValue ? "block" : "none"};
		&:hover + ${SpanToolTip} {
			visibility: visible;
		}
	`
);
