import styled from "@emotion/styled";
import { TContainer } from "../../shared/config";

export const Container = styled.div<TContainer>(
	({ overflowProp }) => `
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    font-size: calc(10px + 2vmin);
    color: white;
    overflow-x: hidden;
    overflow-y: ${overflowProp};
    `
);
export const BodyContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
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
export const StyledUsers = styled.p`
	margin: 43px 0 40px 0;
	font-family: "Factor A";
	font-size: 32px;
	font-weight: 700;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	color: #333333;
	width: 95%;
	@media (max-width: 768px) {
		font-size: 22px;
		font-weight: 700;
		line-height: 32px;
		letter-spacing: 0em;
		text-align: left;
		margin: 26px auto 16px auto;
	}
`;
export const FilterContainer = styled.div`
	margin-top: 16px;
	max-width: 1073px;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		width: 98%;
		flex-direction: column;
		justify-content: start;
		align-items: normal;
		margin: 0 auto 16px auto;
	}
`;

export const UsersList = styled.div`
    width:100%;
    max-width:1103px;
    min-width:320px;
    margin-left:24px;
    @media(max-width:990px){
        margin-left:0;
    }
    @media(max-width:768px){
        width:100%;
`;
export const ReviewsList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	overflow-y: scroll;
	width: 100%;
	height: 750px;
	margin-bottom: 75px;
	@media (max-width: 768px) {
		width: 100%;
		flex-wrap: nowrap;
		flex-direction: column;
		align-items: center;
	}
`;
