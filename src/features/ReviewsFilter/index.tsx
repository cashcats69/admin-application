import { useState } from "react";
import { FilterReview, IReviewsFilter } from "../../shared/config";
import dropArrow from "../../shared/icons/dropArrow.svg";
import { Main, DrowArrow, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from "./styles";

const options = [
  "Сначала неопубликованные",
  "Сначала отклоненные",
  "Сначала опубликованные",
];

export const ReviewsFilter: React.FC<IReviewsFilter> = ({
  state,
  action,
  handleClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    if (value === "Сначала неопубликованные") {
      const notPubAction = action
        .filter((item) => item.status === FilterReview.unpublished)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const pubAction = action
        .filter((item) => item.status === FilterReview.published)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const rejectAction = action
        .filter((item) => item.status === FilterReview.rejected)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const newAction = notPubAction.concat(pubAction).concat(rejectAction);

      handleClick(newAction, value);
    } else if (value === "Сначала отклоненные") {
      const notPubAction = action
        .filter((item) => item.status === FilterReview.unpublished)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const pubAction = action
        .filter((item) => item.status === FilterReview.published)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const rejectAction = action
        .filter((item) => item.status === FilterReview.rejected)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const newAction = rejectAction.concat(pubAction).concat(notPubAction);

      handleClick(newAction, value);
    } else if (value === "Сначала опубликованные") {
      const notPubAction = action
        .filter((item) => item.status === FilterReview.unpublished)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const pubAction = action
        .filter((item) => item.status === FilterReview.published)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const rejectAction = action
        .filter((item) => item.status === FilterReview.rejected)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      const newAction = pubAction.concat(rejectAction).concat(notPubAction);
      handleClick(newAction, value);
    }
    setIsOpen(false);
  };

  return (
    <Main>
      <DrowArrow src={dropArrow} />
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{state}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};
