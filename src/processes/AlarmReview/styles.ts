import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
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
	position: fixed;
	bottom: 80px;
	right: 10%;
	cursor: pointer;
	z-index: 999999;
	@media (max-width: 768px) {
		width: 288px;
		height: 166px;
		margin-left: auto;
		margin-right: auto;
	}
`;
