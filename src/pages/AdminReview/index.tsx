import styled from "@emotion/styled"
import { useEvent, useStore } from "effector-react"
import { SetStateAction, useEffect, useState } from "react"
import { AdminHeader } from "../../features/AdminPanelHeader"
import { PaginatedMenu } from "../../features/PaginatedMenu"
import { ReviewCard } from "../../features/ReviewCard"
import { ReviewPopup } from "../../features/ReviewPopup"
import { ReviewsFilter } from "../../features/ReviewsFilter"
import { FilterReview, TContainer, TUsersStore } from "../../interfaces"
import { Footer } from "../../shared/ui/Footer"
import { $RealUsersStore, $UsersStore, addItem, addNumber} from "../../store/UsersStore"

const Container = styled.div<TContainer>(({overflowProp}) =>`
background-color: #FFFFFF;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
position:relative;
font-size: calc(10px + 2vmin);
color: white;
overflow-x: hidden;
overflow-y: ${overflowProp};
`)
const BodyContainer = styled.div`
height:100%;
display:flex;
flex-direction:row;
@media(max-width:768px){
    flex-direction:column;
    width:100%;
}
`
const StyledMenu = styled.div`
width:273px;
@media(max-width:820px){
    width:230px;
}
@media(max-width:768px){
    width:100%;
}
`
const StyledUsers = styled.p`
margin: 43px 0 40px 0;
font-family: Factor A TRIAL;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
width:95%;
@media(max-width:768px){
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    
margin: 26px  auto 16px auto;

}
`
const FilterContainer = styled.div`
    margin-top:16px;
    max-width:1073px;
    height:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
    @media(max-width:768px){
        width:98%;
        flex-direction:column;
        justify-content:start;
        align-items:normal;
        margin: 0 auto 16px auto;
    }
    `

const UsersList = styled.div`
width:100%;
max-width:1103px;
min-width:320px;
margin-left:24px;
@media(max-width:990px){
    margin-left:0;
}
@media(max-width:768px){
    width:100%;


`
const ReviewsList = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
overflow-y: scroll;
width:100%;
height:750px;
margin-bottom:75px;
@media(max-width:768px){
    width:100%;
    flex-wrap:nowrap;
    flex-direction:column;
    align-items:center;
}
`
export const AdminReview:React.FC = () => {
    const usersStore = useStore($UsersStore); 
    const realUsersStore = useStore($RealUsersStore)
    const addNumberFn = useEvent(addNumber);
    const [uStore,setUStore] = useState(usersStore); 
    const [modal,setModal] = useState<TUsersStore>()
    const [filterState,setFilterState] = useState('Сначала неопубликованные') 
    const [isOpen, setIsOpen] = useState(false);
    console.log(realUsersStore)
    useEffect(() => {
        setUStore(usersStore)
    },[usersStore])
    
    const filterReviews = (newAction: TUsersStore[],value: string) => { 
        setUStore(newAction); 
        setFilterState(value); 
    } 

    const finishEdit = (content:string) => {
        console.log(content)
        if(typeof(modal) !== "undefined"){
        const newStore = uStore.map(user => {
            if(user.id === Number(modal.id)){
                const changedUser =  {...user, review:{date:user.review.date,
                    edit:user.review.edit,
                    message:content,
                    statusMessage: user.review.statusMessage}}
            return changedUser
            }else{
                return user
            }
        })
        addItem(newStore)
        }
    }

const toggling = (e:React.SyntheticEvent & {target:any} ) => {if(e.target.id === 'outsideModal' || e.target.type === 'button'){setIsOpen(!isOpen)}}
    const finishReview = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        
        if(e.currentTarget.name === 'reject'){
            const newStore = uStore.map(user => {
                if(user.id === Number(e.currentTarget.id)){
                    const changedUser =  {...user, review:{date:user.review.date,
                        edit:user.review.edit,
                        message:user.review.message,
                        statusMessage: FilterReview.rejected}}
                return changedUser
                }else{
                    return user
                }
            })
            
            addItem(newStore);
            addNumberFn(1)
            // setUStore(newStore)
        }else if(e.currentTarget.name === 'publish'){
            const newStore = uStore.map(user => {
                if(user.id === Number(e.currentTarget.id)){
                    const changedUser =  {...user, review:{date:user.review.date,
                        edit:user.review.edit,
                        message:user.review.message,
                        statusMessage: FilterReview.published}}  
                return changedUser
                }else{
                    return user
                }
            })
            addItem(newStore);
            addNumberFn(1)
            // setUStore(newStore)
        }
        else{
            uStore.map(user => {if(user.id === Number(e.currentTarget.id)){
                const userEdit = {...user,review:{
                    date:user.review.date,
                    edit:user.review.edit,
                    message:user.review.message,
                    statusMessage:user.review.statusMessage
                }}
                setModal(userEdit)
                toggling(e)
            }})
        }
    }
    return(
        <Container overflowProp={isOpen ? 'hidden' : 'visible' }>
            {isOpen ? <ReviewPopup content={modal ? modal.review.message : ''} toggleModal={toggling} finishEdit={finishEdit}/> : <></>}
            <AdminHeader/>
            <BodyContainer><StyledMenu><PaginatedMenu currentPage={1}/></StyledMenu>
            <UsersList><FilterContainer><StyledUsers>Отзывы</StyledUsers><ReviewsFilter state={filterState} action={usersStore} handleClick={filterReviews} /></FilterContainer>
                <ReviewsList>
                {uStore.map(user => { if(user.review.message !== "") return (
                    <ReviewCard id={user.id} avatar={user.avatar} name={user.name} surname={user.surname} review={user.review} key={user.id} handleClick={finishReview}/>
                )})}
                </ReviewsList>
        </UsersList></BodyContainer>
        
        <Footer/>
        </Container>
    )
}