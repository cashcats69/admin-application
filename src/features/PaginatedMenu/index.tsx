import styled from "@emotion/styled"
import PUsers from '../../shared/icons/PaginatedUsers.svg'
import PView from '../../shared/icons/PaginatedView.svg'
import PMe from '../../shared/icons/PaginatedMe.svg'
import PUsersF from '../../shared/icons/PaginatedUsersF.svg'
import PViewF from '../../shared/icons/PaginatedViewF.svg'
import PMeF from '../../shared/icons/PaginatedMeF.svg'
import { NavLink } from "react-router-dom"
import { IPaginatedMenu } from "../../interfaces"

const PaginatedUl = styled.ul`
padding: 40px 0 0 0 ;
border-right: 1px solid #E0E0E0;
height:100%;
margin:0;

@media (max-width: 768px) {
    display:flex;
    justify-content:space-between;
    border-right: 0px;
    border-bottom: 1px solid #E0E0E0;
    flex-direction:row;
    padding:0px;
    }
`
const PaginatedLi = styled.li`
display:flex;
margin-bottom:40px;
margin-left:40px;
border-bottom: 4px solid #FFFFFF;
outline:none;
@media (max-width: 768px) {
    justify-content:center;
    margin:12px 0px 0 0px;
    &:first-of-type{
        margin:12px 16px 0 16px;
    }
    &:last-of-type{
        margin:12px 16px 0 16px;
    }
    padding:0 ;
    a{
        outline:none;
        display:flex;
        align-items: flex-end;
    }
    }
`
const CurrentLi = styled.li`
border-right: 4px solid #585CC6;
display:flex;
margin-bottom:40px;
outline:none;
margin-left:40px;
@media (max-width: 768px) {
    justify-content:center;
    border-right: 0;
    border-bottom: 4px solid #585CC6;
    margin:12px 0 0 0;
    justify-content:space-between;
    padding:0 16px 0 16px;
    a{
        outline:none;
        display:flex;
        align-items: flex-end;
    }
    }
`
const PaginatedImg = styled.img`
margin-right:12px;
width:20px;
height:20px;
margin-top:auto;
margin-bottom:auto;
outline:none;
@media (max-width: 768px) {
    display:none;
    }
`
const CurrentImg = styled.img`
margin-right:12px;
margin-top:auto;
margin-bottom:auto;
width:20px;
height:20px;
outline:none;
@media (max-width: 768px) {
    display:none;
    }
`
const PaginatedText = styled.p`
color: #8A8A8A;
margin:0;
font-family:  'Factor A';
font-size: 16px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0.01em;
text-align: center;
outline:none;
`
const CurrentText = styled.p`
color: #585CC6;
margin:0;
font-family: 'Factor A';
font-size: 16px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0.01em;
text-align: center;
outline:none;
`
export const PaginatedMenu:React.FC<IPaginatedMenu> = ({currentPage}) => {
    const names = ['Участники','Отзывы','Обо мне']
    const icons = [PUsers,PView,PMe]
    const iconsF = [PUsersF,PViewF,PMeF]
    const links = ['/admin/members','/admin/review','/admin/about'];
    return(
        <PaginatedUl>
            {names.map((name,index) => { if(currentPage === index){
                return(
                    <CurrentLi key={index}><CurrentImg src={iconsF[index]}/><NavLink style={{ textDecoration: 'none', outline:'none' }} to={links[index]}><CurrentText>{name}</CurrentText></NavLink></CurrentLi>
                )
            }else{
return(
    <PaginatedLi  key={index}><PaginatedImg src={icons[index]}/><NavLink style={{ textDecoration: 'none' , outline:'none'}} to={links[index]}><PaginatedText>{name}</PaginatedText></NavLink></PaginatedLi>
)}
            })}
        </PaginatedUl>
    )
}