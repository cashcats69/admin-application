import { ButtonReview } from "../../shared/ui/ButtonReview";
import { ModalTextArea } from "../../shared/ui/AboutTextArea";
import { useEffect, useState } from "react";
import { TReviewPopup } from "../../shared/config";
import { Loader } from "../../processes/Loader";
import {
	BGModal,
	Container,
	ContainerHeader,
	HeaderText,
	ImgButton,
	ContainerInput,
	ContainerButtons,
} from "./styles";

export const ReviewPopup: React.FC<TReviewPopup> = ({
	content,
	toggleModal,
	finishEdit,
	loader,
}) => {
	const [currentText, setCurrentText] = useState(content);
	const confirmEdit = () => {
		finishEdit(currentText);
	};
	useEffect(() => {
		setCurrentText(content);
	}, [content]);
	const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCurrentText(e.target.value);
	};
	return (
		<BGModal id="outsideModal" onClick={toggleModal}>
			{loader ? <Loader /> : <></>}
			<Container>
				<ContainerHeader>
					<HeaderText>Редактирование отзыва</HeaderText>
					<ImgButton name="reject"></ImgButton>
				</ContainerHeader>
				<ContainerInput>
					<ModalTextArea
						name={"Отзыв"}
						isDisabled={false}
						content={currentText}
						maxLength={"200"}
						onChangeFunc={changeText}
						currentLength={currentText.length}
					/>
				</ContainerInput>
				<ContainerButtons>
					<ButtonReview
						isDisabled={false}
						name="publish"
						widthProp="319px"
						colorProp="#585CC6"
						text="Подтвердить редактирование"
						handleClick={confirmEdit}
					/>
					<ButtonReview
						isDisabled={false}
						name="reject"
						widthProp="123px"
						colorProp="#EB5757"
						text="Отмена"
						handleClick={toggleModal}
					/>
				</ContainerButtons>
			</Container>
		</BGModal>
	);
};
