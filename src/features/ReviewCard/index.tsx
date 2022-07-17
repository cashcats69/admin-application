import noPhoto from "../../shared/icons/noPhoto.svg";
import rejectReview from "../../shared/icons/rejectedReview.svg";
import acceptedReview from "../../shared/icons/acceptedReview.svg";
import { TUserReviewCard, FilterReview } from "../../shared/config";
import { useEffect, useState } from "react";

import {
	Container,
	ReviewContainer,
	HeaderContainer,
	ProfileContainer,
	ProfileImg,
	ProfileName,
	DateContainer,
	HeaderDate,
	BodyContainer,
	BodyP,
	FooterContainer,
	ButtonsContainer,
	EndReview,
	EndText,
	EditContainer,
	ButtonEdit,
} from "./styles";
import { ButtonPublish, ButtonReject } from "../../shared/ui/ButtonReview/styles";

export const ReviewCard: React.FC<TUserReviewCard> = ({
	id,
	authorName,
	authorImage,
	createdAt,
	deletedAt,
	updatedAt,
	status,
	version,
	text,
	handleClick,
	title,
}) => {
	const [buttonsState, setButtonsState] = useState(true);
	const [reviewState, setReviewState] = useState<string | null>(null);
	useEffect(() => {
		if (status !== FilterReview.unpublished) {
			setButtonsState(false);
			if (status === FilterReview.published) {
				setReviewState(acceptedReview);
			} else {
				setReviewState(rejectReview);
			}
		}
	}, [status]);
	function setStatus() {
		if (status === FilterReview.published) {
			return "#F8FFF6";
		} else if (status === FilterReview.rejected) {
			return "#FDEEEE";
		} else {
			return "#F5F5F5";
		}
	}

	return (
		<Container colorProp={setStatus()}>
			<ReviewContainer>
				<HeaderContainer>
					<ProfileContainer>
						<ProfileImg src={authorImage ? authorImage : noPhoto}></ProfileImg>
						<ProfileName>{authorName}</ProfileName>
					</ProfileContainer>
					<DateContainer>
						<HeaderDate>
							{createdAt !== null
								? new Date(createdAt).toLocaleDateString()
								: ""}
						</HeaderDate>
					</DateContainer>
				</HeaderContainer>
				<BodyContainer>
					<BodyP>{text}</BodyP>
				</BodyContainer>
				<FooterContainer>
					<ButtonsContainer>
						<EndReview
							displayProp={reviewState === null ? "none" : "block"}
							src={reviewState ? reviewState : ""}
						/>
						<EndText
							displayProp={buttonsState ? "none" : "block"}
							colorProp={reviewState === acceptedReview ? "#61BF4A" : "#EB5757"}
						>
							{reviewState === acceptedReview
								? "Отзыв опубликован"
								: "Отзыв отклонен"}
						</EndText>
						<ButtonPublish
							name="publish"
							id={id}
							displayProp={buttonsState ? "block" : "none"}
							onClick={handleClick}
						>
							Опубликовать
						</ButtonPublish>
						<ButtonReject
							name="reject"
							id={id}
							displayProp={buttonsState ? "block" : "none"}
							onClick={handleClick}
						>
							Отклонить
						</ButtonReject>
					</ButtonsContainer>
					<EditContainer displayProp={buttonsState ? "block" : "none"}>
						<ButtonEdit name="edit" id={id} onClick={handleClick}></ButtonEdit>
					</EditContainer>
				</FooterContainer>
			</ReviewContainer>
		</Container>
	);
};
