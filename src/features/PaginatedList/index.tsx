import styled from "@emotion/styled";
import { IPaginatedList } from "../../interfaces"


const PaginatedContainer = styled.nav`
display:flex;
justify-content:center;
`
const PaginatedUl = styled.ul`
display:flex;
flex-direction:row;
padding:0;
`
const PaginatedLi = styled.li`
width:32px;
height:32px;
border: 1px solid #E0E0E0;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
margin:4px;
cursor:pointer;

`
const CurrentLi= styled.li`
border: 1px solid #585CC6;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
margin:4px;
cursor:pointer;
`
const PaginatedA = styled.a`
text-decoration: none;
font-family: Gilroy;
font-size: 14px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
`
const PaginatedArrowLeft = styled.li`
width:32px;
height:32px;
border: 1px solid #E0E0E0;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
margin:4px;
cursor:pointer;
background:#C4C4C4;
`
const PaginatedArrowRight = styled.li`
width:32px;
height:32px;
border: 1px solid #E0E0E0;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
margin:4px;
cursor:pointer;
`
export const PaginatedList:React.FC<IPaginatedList> = ({uStore,currentPage,paginate}) => {
    const usersPerPage = 6;
    
    const pageNumbers:number[] = [];
const makeButtons = () => {
    for(let counter = 1; counter < Math.ceil(uStore.length / usersPerPage) + 1;counter++){
        pageNumbers.push(counter);
    }
}
makeButtons()
    return(
        <PaginatedContainer>
            <PaginatedUl>
<PaginatedArrowLeft onClick={(event) => {
        event?.preventDefault();
        if(currentPage !== 1){
        paginate(currentPage - 1);
        }}
        }></PaginatedArrowLeft>
{pageNumbers.map(number => { if(number === currentPage){return(
<CurrentLi key={number} onClick={(event) => {
        event?.preventDefault();
        paginate(number);}
        }>
    <PaginatedA href="#" onClick={(event) => {event.preventDefault() }}>{number}</PaginatedA>
</CurrentLi>
)
} else  {return(
<PaginatedLi key={number} onClick={(event) => {
        event?.preventDefault();
        paginate(number);}
        }>
    <PaginatedA href="#"  onClick={(event) => {event.preventDefault() }}>{number}</PaginatedA>
</PaginatedLi>
)}})}
<PaginatedArrowRight onClick={(event) => {
        event?.preventDefault();
        if(currentPage !== pageNumbers.length){
        paginate(currentPage + 1);
        }}
        }></PaginatedArrowRight>
            </PaginatedUl>
        </PaginatedContainer>
    )
}


