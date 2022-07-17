import { TEditButton } from "../../config";
import { StyledEdit, StyledFinish } from "./styles";
export const ButtonEdit: React.FC<TEditButton> = ({ text, handleClick }) => {
	return <StyledEdit onClick={handleClick}>{text}</StyledEdit>;
};
export const ButtonFinish: React.FC<TEditButton> = ({ text, handleClick }) => {
	return <StyledFinish onClick={handleClick}>{text}</StyledFinish>;
};
