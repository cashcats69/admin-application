import { TAboutInput } from "../../config";
import { memo } from "react";
import { Div, InputLabel, Input } from "./styles";
export const AboutInput: React.FC<TAboutInput> = memo(
	({
		currentValue,
		isDisabled,
		inputName,
		placeholderName,
		onChangeFunc,
		widthProp,
	}) => {
		return (
			<Div widthProp={widthProp}>
				<InputLabel>{inputName}</InputLabel>
				<Input
					required
					value={currentValue ? currentValue : ""}
					name={inputName}
					disabled={isDisabled}
					placeholder={placeholderName}
					onChange={onChangeFunc}
				/>
			</Div>
		);
	}
);
export const AboutDate: React.FC<TAboutInput> = memo(
	({
		currentValue,
		isDisabled,
		inputName,
		placeholderName,
		onChangeFunc,
		widthProp,
	}) => {
		return (
			<Div widthProp={widthProp}>
				<InputLabel>{inputName}</InputLabel>
				<Input
					value={currentValue ? currentValue : ""}
					name={inputName}
					disabled={isDisabled}
					placeholder={placeholderName}
					onChange={onChangeFunc}
				/>
			</Div>
		);
	}
);
