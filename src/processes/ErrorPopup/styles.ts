import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
const pop = keyframes`
0% {
    transform: translate3d(0,0px,0);
}
15% {
    transform: translate3d(0,-62px,0);
    }
70% {
    transform: translate3d(0,-62px,0);
    }
100% {
    transform: translate3d(0,0px,0);
}
`;
const popPhoto = keyframes`
0% {
    transform: translate3d(0,0,0);
}
15% {
    transform: translate3d(0,-64px,0);
    }
70% {
    transform: translate3d(0,-64px,0);
    }
100% {
    transform: translate3d(0,0,0);
}
`;
const popPhotoSmall = keyframes`
    0% {
        transform: translate3d(0,0,0);
    }
    15% {
        transform: translate3d(0,-84px,0);
        }
    70% {
        transform: translate3d(0,-84px,0);
        }
    100% {
        transform: translate3d(0,0,0);
    }  `;
export const Popup = styled.div`
	display: flex;
	justify-content: center;
	background: #eb5757;
	width: 100%;
	position: absolute;
	height: 62px;
	z-index: 100;
	align-items: center;
	animation: ${pop} 5s ease;
`;
export const PopupPhoto = styled.div`
	display: flex;
	justify-content: center;
	background: #eb5757;
	width: 100%;
	position: absolute;
	bottom: 0;
	height: 62px;
	z-index: 100;
	align-items: center;
	animation: ${popPhoto} 5s ease;
	@media (max-width: 550px) {
		animation: ${popPhotoSmall} 5s ease;
	}
`;
export const PopupP = styled.p`
	font-family: Gilroy;
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: center;
	margin: 0;
	padding: 0;
`;
