import styled from "@emotion/styled";

export const ContainerUser = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	border-bottom: 1px dotted #e0e0e0;
	@media (max-width: 768px) {
		width: 732px;
	}
	&:last-of-type {
		border-bottom: 0;
	}
`;
export const ContainerAvatar = styled.div`
	width: 195px;
	display: flex;
	flex-direction: row;
`;
