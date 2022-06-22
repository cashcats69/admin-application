import styled from "@emotion/styled";
import { useState } from "react"
import { TMain, TAboutSelect } from "../../../interfaces";
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
const CurrentText = styled.p`
color: #8A8A8A;
`

const DropDownListContainer = styled.div`
background:#FFFFFF;
box-shadow: 0px 4px 7px 0px #00000014;
border-right:2px solid #E0E0E0;
display:flex;
flex-direction:column;
width:100%;
  position: absolute;
  z-index: 100;
`;

const DropDownList = styled.ul`

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
  &:hover {
    color: #585CC6;
    background: #F5F5F5;
  }
  &:active{
    color: #585CC6;
    background: #F5F5F5;
  }
`;
const DrowArrow = styled.img`
position:absolute;
top:60%; 
right:15px;
z-index:100;
`
const InputLabel = styled.label`
height:20px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.0124em;
text-align: left;
margin:0;
color:black;
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
`
const Search = styled.img`
width:20px;
height:20px;
`
const options = ["Томск","Кемерово", "Москва", "Санкт-Петербург","Красноярск","Воронеж","Омск","Таганрог"];
const genders = ["Женщина","Мужчина"];
const pets = ["Нет","Есть"];

export const AboutSelect:React.FC<TAboutSelect> = ({inputName,placeholderName,widthProp}) => {
    const [state,setState] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false);
    const [inputState,setInputState] = useState<string[]>([])
const toggling = () => {
  setInputState([]);
  setIsOpen(!isOpen);
};

const onOptionClicked = (value: string) => () => {
    setState(value);
    setIsOpen(false);
    setInputState([])
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
            <DropDownHeader onClick={toggling}>
            <CurrentText>{state}</CurrentText>
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
}

export const GenderSelect:React.FC<TAboutSelect> = ({inputName,placeholderName,widthProp}) => {
  const [state,setState] = useState(genders[0])
  const [isOpen, setIsOpen] = useState(false);
const toggling = () => {
setIsOpen(!isOpen);
};

const onOptionClicked = (value: string) => () => {
  setState(value);
  setIsOpen(false);
};
  return (
      <Main widthProp={widthProp}>
          <InputLabel>{inputName}</InputLabel>
          <DrowArrow src={dropArrow}/>
      <DropDownContainer>
          <DropDownHeader onClick={toggling}>
          <CurrentText>{state}</CurrentText>
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
}

export const PetsSelect:React.FC<TAboutSelect> = ({inputName,placeholderName,widthProp}) => {
  const [state,setState] = useState(pets[0])
  const [isOpen, setIsOpen] = useState(false);
const toggling = () => {
setIsOpen(!isOpen);
};

const onOptionClicked = (value: string) => () => {
  setState(value);
  setIsOpen(false);
};
  return (
      <Main widthProp={widthProp}>
          <InputLabel>{inputName}</InputLabel>
          <DrowArrow src={dropArrow}/>
      <DropDownContainer>
          <DropDownHeader onClick={toggling}>
          <CurrentText>{state}</CurrentText>
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
}