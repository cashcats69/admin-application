import styled from "@emotion/styled";
import { useState } from "react"
import { Filter, IMembersFilter } from "../../interfaces";
import dropArrow from '../../shared/icons/dropArrow.svg'
const Main = styled.div`
  font-family: sans-serif;
  background: #FFFFFF;
  position: relative;
  width:163px;
  height:62px;
`;

const DropDownContainer = styled.div`
width:163px;
height:62px;
  margin: 0 auto;
  position:relative;
  cursor:pointer;
`;

const DropDownHeader = styled.div`
  padding:18.6px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #333333;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width:163px;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #333333;
  font-size: 1.3rem;
  font-weight: 500;
`;

const ListItem = styled.li`
  list-style: none;
  padding:18.6px;
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
top:50%; 
left: 90%
`
const options = ["Все","Отчислен", "Обучается", "Закончил"];

export const MembersFilter:React.FC<IMembersFilter> = ({state,setState,action,setAction}) => {
    const [isOpen, setIsOpen] = useState(false);
const toggling = () => setIsOpen(!isOpen);

const onOptionClicked = (value: string) => () => {
    
    if(value !== Filter.other){
      const newAction = action.filter(item => {return Filter[item.status] === value })
      console.log(newAction)
    setAction(newAction)
      }else{
        setAction(action)
      }
    setState(value);
    setIsOpen(false);
    
};

    return (
        <Main>
            <DrowArrow src={dropArrow}/>
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
            {state}
            </DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
                <DropDownList>
                {options.map(option => (
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