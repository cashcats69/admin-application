import { useState } from "react";
import { IMembersFilter } from "../../shared/config";
import { Main, DrowArrow, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from "./styles";
import dropArrow from "../../shared/icons/dropArrow.svg";

const options = ["Все", "Отчислен", "Обучается", "Закончил"];

export const MembersFilter: React.FC<IMembersFilter> = ({
  state,
  setState,
  action,
  setAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    if (value === "Обучается") {
      const newAction = action.filter((user: { academyStatus: string }) => {
        return user.academyStatus === "studies";
      });

      setAction(newAction);
    } else if (value === "Отчислен") {
      const newAction = action.filter((user: { academyStatus: string }) => {
        return user.academyStatus === "expelled";
      });
      setAction(newAction);
    } else if (value === "Закончил") {
      const newAction = action.filter((user: { academyStatus: string }) => {
        return user.academyStatus === "finished";
      });
      setAction(newAction);
    } else {
      setAction(action);
    }
    setState(value);
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
