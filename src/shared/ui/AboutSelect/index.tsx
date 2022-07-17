
import { useState, memo, useEffect } from "react";
import {
  TAboutSelect,
  TGenderSelect,
  TPetSelect,
} from "../../config";
import dropArrow from "../../icons/dropArrow.svg";
import { Main, InputLabel, DrowArrow, DropDownContainer, DropDownHeader, CurrentText, DropDownListContainer, Input, DropDownList, ListItem } from "./styles";


const options = [
  "Томск",
  "Кемерово",
  "Москва",
  "Санкт-Петербург",
  "Красноярск",
  "Воронеж",
  "Омск",
  "Таганрог",
];

export const AboutSelect: React.FC<TAboutSelect> = memo(
  ({ currentValue, getValue, isDisabled, inputName, widthProp }) => {
    const [state, setState] = useState(
      currentValue ? currentValue : options[0]
    );
    useEffect(
      () => setState(currentValue ? currentValue : options[0]),
      [currentValue]
    );
    const [isOpen, setIsOpen] = useState(false);
    const [inputState, setInputState] = useState<string[]>([]);
    const toggling = () => {
      setInputState([]);
      setIsOpen(!isOpen);
    };

    const onOptionClicked = (value: string) => () => {
      setState(value);
      setIsOpen(false);
      setInputState([]);
      getValue(value);
    };
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newAction = options.filter((item) => {
        return item.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setInputState(newAction);
    };
    return (
      <Main widthProp={widthProp}>
        <InputLabel>{inputName}</InputLabel>
        <DrowArrow src={dropArrow} />
        <DropDownContainer>
          <DropDownHeader onClick={isDisabled ? toggling : undefined}>
            <CurrentText colorProp={isDisabled ? "#333333" : "#A8A8A8"}>
              {state}
            </CurrentText>
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <Input
                placeholder={`Поиск города`}
                onChange={onChangeInput}
              ></Input>
              <DropDownList>
                {inputState.length > 0
                  ? inputState.map((option) => (
                      <ListItem
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                      </ListItem>
                    ))
                  : options.map((option) => (
                      <ListItem
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                      </ListItem>
                    ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    );
  }
);
const genders = ["Женщина", "Мужчина"];

export const GenderSelect: React.FC<TGenderSelect> = memo(
  ({ currentValue, getValue, isDisabled, inputName, widthProp }) => {
    const [state, setState] = useState(
      currentValue === "female" ? genders[0] : genders[1]
    );
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => {
      setIsOpen(!isOpen);
    };

    const onOptionClicked = (value: string) => () => {
      setState(value);
      setIsOpen(false);
      value === "Женщина" ? getValue("female") : getValue("male");
    };
    return (
      <Main widthProp={widthProp}>
        <InputLabel>{inputName}</InputLabel>
        <DrowArrow src={dropArrow} />
        <DropDownContainer>
          <DropDownHeader onClick={isDisabled ? toggling : undefined}>
            <CurrentText colorProp={isDisabled ? "#333333" : "#A8A8A8"}>
              {state}
            </CurrentText>
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {genders.map((gender) => (
                  <ListItem
                    onClick={onOptionClicked(gender)}
                    key={Math.random()}
                  >
                    {gender}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    );
  }
);
const pets = ["Нет", "Есть"];
export const PetsSelect: React.FC<TPetSelect> = memo(
  ({ currentValue, getValue, isDisabled, inputName, widthProp }) => {
    const [state, setState] = useState(
      currentValue === false ? pets[0] : pets[1]
    );
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => {
      setIsOpen(!isOpen);
    };
    const onOptionClicked = (value: string) => () => {
      setState(value);
      setIsOpen(false);
      value === "Есть" ? getValue(true) : getValue(false);
    };
    return (
      <Main widthProp={widthProp}>
        <InputLabel>{inputName}</InputLabel>
        <DrowArrow src={dropArrow} />
        <DropDownContainer>
          <DropDownHeader onClick={isDisabled ? toggling : undefined}>
            <CurrentText colorProp={isDisabled ? "#333333" : "#A8A8A8"}>
              {state}
            </CurrentText>
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {pets.map((pet) => (
                  <ListItem onClick={onOptionClicked(pet)} key={Math.random()}>
                    {pet}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    );
  }
);
