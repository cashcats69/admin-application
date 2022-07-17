import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
const pop = keyframes`
0% {
    transform: translate3d(500px,0px,0);
}
100% {
    transform: translate3d(0,0,0);
    }

}
`;
export const Img = styled.img`
	animation: ${pop} 1s ease;
	margin-top: auto;
	margin-left: auto;
	margin-bottom: 80px;
	margin-right: 40px;
	cursor: pointer;
	@media (max-width: 550px) {
		width: 288px;
		height: 166px;
		margin-left: auto;
		margin-right: auto;
	}
`;
