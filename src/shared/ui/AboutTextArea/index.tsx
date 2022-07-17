import { TAboutTextArea, iModalTextArea, iAddTextArea } from "../../config";
import {
	AboutTextAreaContainer,
	SymbolsCounter,
	TextAreaLabel,
	TextArea,
	ModalTextAreaContainer,
} from "./styles";

export const AboutTextArea: React.FC<TAboutTextArea> = ({
	currentValue,
	isDisabled,
	TextAreaName,
	placeholderName,
	maxLength,
	onChangeFunc,
	normalHeightProp,
	heightProp,
	currentLength,
	name,
}) => {
	return (
		<AboutTextAreaContainer>
			<SymbolsCounter>
				{currentLength}/{maxLength}
			</SymbolsCounter>
			<TextAreaLabel>{TextAreaName}</TextAreaLabel>
			<TextArea
				value={currentValue ? currentValue : ""}
				disabled={isDisabled}
				normalHeightProp={normalHeightProp}
				name={name}
				heightProp={heightProp}
				placeholder={placeholderName}
				onChange={onChangeFunc}
				maxLength={Number(maxLength)}
			/>
		</AboutTextAreaContainer>
	);
};
export const ModalTextArea: React.FC<iModalTextArea> = ({
	isDisabled,
	maxLength,
	onChangeFunc,
	currentLength,
	content,
	name,
}) => {
	return (
		<ModalTextAreaContainer>
			<SymbolsCounter>
				{currentLength}/{maxLength}
			</SymbolsCounter>
			<TextAreaLabel>{name}</TextAreaLabel>
			<TextArea
				placeholder="Вы не можете оставить отзыв пустым..."
				disabled={isDisabled}
				onChange={onChangeFunc}
				maxLength={Number(maxLength)}
				normalHeightProp={"105px"}
				heightProp={"222px"}
				value={content}
			/>
		</ModalTextAreaContainer>
	);
};
export const AddTextArea: React.FC<iAddTextArea> = ({
	maxLength,
	onChangeFunc,
	currentLength,
	name,
}) => {
	return (
		<ModalTextAreaContainer>
			<SymbolsCounter>
				{currentLength}/{maxLength}
			</SymbolsCounter>
			<TextAreaLabel>{name}</TextAreaLabel>
			<TextArea
				placeholder="Напишите пару слов о вашем опыте..."
				onChange={onChangeFunc}
				maxLength={Number(maxLength)}
				normalHeightProp={"105px"}
				heightProp={"105px"}
			/>
		</ModalTextAreaContainer>
	);
};
