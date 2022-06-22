import styled from "@emotion/styled";
import { useState } from "react"
import { Filter, FilterReview, IReviewsFilter } from "../../interfaces";
import dropArrow from '../../shared/icons/dropArrow.svg'
const Main = styled.div`
  font-family: sans-serif;
  background: #FFFFFF;
  position: relative;
  width:256px;
  height:52px;
  @media(max-width:768px){
    width:95%;
    margin:auto;
  }
`;

const DropDownContainer = styled.div`
width:256px;
height:52px;
  margin: 0 auto;
  position:relative;
  cursor:pointer;
  @media(max-width:768px){
    width:100%;
  }
`;

const DropDownHeader = styled.div`
  padding:18.6px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-family: Gilroy;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

  color: #333333;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width:163px;
  @media(max-width:768px){
    width:100%;
  }
`;

const DropDownList = styled.ul`
width:256px;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #333333;
  font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
@media(max-width:768px){
  width:100%;
}
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
  @media(max-width:768px){
    width:100%;
  }
`;
const DrowArrow = styled.img`
position:absolute;
top:50%; 
left: 90%
`
const options = ["Сначала неопубликованные", "Сначала отклоненные", "Сначала опубликованные"];

export const ReviewsFilter:React.FC<IReviewsFilter> = ({state,action,handleClick}) => {
    const [isOpen, setIsOpen] = useState(false);
const toggling = () => setIsOpen(!isOpen);

const onOptionClicked = (value: string) => () => {
    if(value === FilterReview.unpublished){
      const notPubAction = action.filter(item => item.review.statusMessage === FilterReview.unpublished).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const pubAction = action.filter(item => item.review.statusMessage === FilterReview.published).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const rejectAction = action.filter(item => item.review.statusMessage === FilterReview.rejected).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const newAction = notPubAction.concat(pubAction).concat(rejectAction)
      
      handleClick(newAction,value);
    } else if(value === FilterReview.rejected){
      const notPubAction = action.filter(item => item.review.statusMessage === FilterReview.unpublished).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const pubAction = action.filter(item => item.review.statusMessage === FilterReview.published).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const rejectAction = action.filter(item => item.review.statusMessage === FilterReview.rejected).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const newAction = rejectAction.concat(pubAction).concat(notPubAction)
      
      handleClick(newAction,value);
    } else if(value === FilterReview.published){
      const notPubAction = action.filter(item => item.review.statusMessage === FilterReview.unpublished).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const pubAction = action.filter(item => item.review.statusMessage === FilterReview.published).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const rejectAction = action.filter(item => item.review.statusMessage === FilterReview.rejected).sort((a,b) => b.review.date.getTime() - a.review.date.getTime())
      const newAction = pubAction.concat(rejectAction).concat(notPubAction)
      handleClick(newAction,value);
      
    }
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