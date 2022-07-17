import { TButtonReview } from "../../config";
import { StyledButton } from "./styles";
export const ButtonReview: React.FC<TButtonReview> = ({
	name,
	widthProp,
	colorProp,
	text,
	handleClick,
	isDisabled,
}) => {
	return (
		<StyledButton
			transitionProp={colorProp === "#585CC6" ? "#797DDF" : "#FF7171"}
			disabled={isDisabled}
			name={name}
			widthProp={widthProp}
			colorProp={colorProp}
			onClick={handleClick}
		>
			{text}
		</StyledButton>
	);
};
