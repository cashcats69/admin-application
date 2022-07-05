import styled from "@emotion/styled";
import { useState, memo, useEffect } from "react"
import { TMain, TAboutSelect, TGenderSelect, TPetSelect, TCurrentText } from "../../../interfaces";
import dropArrow from '../../icons/dropArrow.svg'
import searchSvg from '../../icons/Search.svg'
const Main = styled.div<TMain>(({widthProp}) =>`
  margin: 20px 24px 0 0;
  font-family: sans-serif;
  background: #FFFFFF;
  position: relative;
  width:${widthProp};
  height:76px;
  background:#FFFFFF;
  &:last-of-type{
    margin-right:0; 
}
  @media(max-width:768px){
    width:100%;
    margin: 20px 0 0 0;
  }
`)

const DropDownContainer = styled.div`
width:100%;
height:52px;
background:#FFFFFF;
  margin: 0 auto;
  position:relative;
  cursor:pointer;
`;

const DropDownHeader = styled.div`
background:#FFFFFF;
color: #333333;
outline: none;
height: 50px;
width: 100%;
border-radius: 2px;
border: 1px solid #E0E0E0;
text-indent: 16px;
font-weight: 400;
font-size: 14px;
line-height: 22px;
font-family: Gilroy;
`;

const CurrentText = styled.p<TCurrentText>(({colorProp}) =>`
color: ${colorProp};
`)

const DropDownListContainer = styled.div`
background:#FFFFFF;
box-shadow: 0px 4px 7px 0px #00000014;
border-right:2px solid #E0E0E0;
display:flex;
flex-direction:column;
width:100%;
position: absolute;
z-index: 100;
color: #333333;
`;

const DropDownList = styled.ul`
color: #333333;
width:100%;
padding: 0;
margin: 0;
background: #ffffff;
box-sizing: border-box;
color: #333333;
font-size: 1.3rem;
font-weight: 500;
`;

const ListItem = styled.li`
height: 50px;
width: 100%;
padding:0px;
text-indent: 16px;
font-weight: 400;
font-size: 14px;
line-height: 50px;
font-family: Gilroy;
list-style: none;
color: #333333;
  &:hover {
    color: #585CC6;
    background: #F5F5F5;
  }
  &:active{
    color: #585CC6;
    background: #F5F5F5;
  }
&:disabled{
  color: #8A8A8A;
}
`;
const DrowArrow = styled.img`
position:absolute;
top:60%; 
right:15px;
z-index:100;
color: #333333;
`
const InputLabel = styled.label`
font-family: Factor A;
height:20px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin:0;
color: #333333;
`
const Input = styled.input`
background:#FFFFFF;
outline: none;
height: 50px;
width: 95%;
border-radius: 2px;
border: 1px solid #E0E0E0;
padding:0px;
text-indent: 30px;
font-weight: 400;
font-size: 14px;
line-height: 22px;
font-family: Gilroy;
margin: 12px auto 12px auto;
color: #333333;
background-image:url('${searchSvg}');
background-repeat:no-repeat;
background-position: 8px 50%;
::placeholder{
color: #8A8A8A;
letter-spacing: 0em;
text-align: left;
text-indent: 30px;
margin-botton:8px;
}
&:disabled{
color: #8A8A8A;
}
`
const Search = styled.img`
width:20px;
height:20px;
`
const options = ["Томск","Кемерово", "Москва", "Санкт-Петербург","Красноярск","Воронеж","Омск","Таганрог"];


export const AboutSelect:React.FC<TAboutSelect> = memo(({currentValue,getValue,isDisabled,inputName,widthProp}) => {
    const [state,setState] = useState(currentValue ? currentValue :options[0])
    useEffect(() =>setState(currentValue ? currentValue : options[0]) ,[currentValue])
    const [isOpen, setIsOpen] = useState(false);
    const [inputState,setInputState] = useState<string[]>([])
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
const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newAction = options.filter(item => {return item.toLowerCase().includes(e.target.value.toLowerCase())  })
    setInputState(newAction)

}
    return (
        <Main widthProp={widthProp}>
            <InputLabel>{inputName}</InputLabel>
            <DrowArrow src={dropArrow}/>
        <DropDownContainer>
            <DropDownHeader onClick={isDisabled ? toggling : undefined}>
            <CurrentText colorProp={isDisabled ? '#333333' : '#A8A8A8'}>{state}</CurrentText>
            </DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
                <Input placeholder={`Поиск города`} onChange={onChangeInput}></Input>
                <DropDownList>
                {inputState.length > 0 ? inputState.map(option => (
                    <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                    </ListItem>
                )): options.map(option => (
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
});
const genders = ["Женщина","Мужчина"];

export const GenderSelect:React.FC<TGenderSelect> = memo(({currentValue,getValue,isDisabled,inputName,widthProp}) => {
  const [state,setState] = useState(currentValue === 'female' ? genders[0] : genders[1])
  const [isOpen, setIsOpen] = useState(false);
const toggling = () => {
setIsOpen(!isOpen);
};

const onOptionClicked = (value: string) => () => {
  setState(value);
  setIsOpen(false);
  value === "Женщина" ? getValue('female') : getValue('male')
};
  return (
      <Main widthProp={widthProp}>
          <InputLabel>{inputName}</InputLabel>
          <DrowArrow src={dropArrow}/>
      <DropDownContainer>
          <DropDownHeader onClick={ isDisabled ? toggling : undefined}>
          <CurrentText colorProp={isDisabled ? '#333333' : '#A8A8A8'}>{state}</CurrentText>
          </DropDownHeader>
          {isOpen && (
          <DropDownListContainer>
              <DropDownList>
              {genders.map(gender => (
                  <ListItem onClick={onOptionClicked(gender)} key={Math.random()}>
                  {gender}
                  </ListItem>
              ))}
              </DropDownList>
          </DropDownListContainer>
          )}
      </DropDownContainer>
      </Main>
  );
});
const pets = ["Нет","Есть"];
export const PetsSelect:React.FC<TPetSelect> = memo(({currentValue,getValue,isDisabled,inputName,widthProp}) => {
  const [state,setState] = useState(currentValue === false ? pets[0] : pets[1])
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
          <DrowArrow src={dropArrow}/>
      <DropDownContainer>
          <DropDownHeader onClick={isDisabled ? toggling : undefined}>
          <CurrentText colorProp={isDisabled ? '#333333' : '#A8A8A8'}>{state}</CurrentText>
          </DropDownHeader>
          {isOpen && (
          <DropDownListContainer>
              <DropDownList>
              {pets.map(pet => (
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
});