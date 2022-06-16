import styled from "@emotion/styled"
import { useStore } from "effector-react"
import { useState } from "react"
import { AdminHeader } from "../../features/AdminPanelHeader"
import { MembersFilter } from "../../features/MembersFilter"
import { MembersHeader } from "../../features/MembersHeader"
import { PaginatedList } from "../../features/PaginatedList"
import { PaginatedMenu } from "../../features/PaginatedMenu"
import { User } from "../../features/User"
import { Footer } from "../../shared/ui/Footer"
import { $UsersStore } from "../../store/UsersStore"

export const AdminPanelMembers:React.FC = () =>{
    const Container = styled.div`
    background-color: #FFFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow-x:hidden;
  @media (max-width: 990px) {
    flex-direction:column;
    }
    `
    const FilterContainer = styled.div`
    margin-top:16px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;`

  const StyledUsers = styled.p`
font-family: Factor A TRIAL;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
`
const BodyContainer = styled.div`
display:flex;
flex-direction:row;
@media (max-width: 990px) {
  flex-direction:column;
  width:100%;
  }
`
const UsersList = styled.div`
width:1063px;
margin-left:24px;
min-width:700px;

`
const StyledMenu = styled.div`
width:273px;
@media (max-width:990px) {
  width:100%;
  
}
`
const usersStore = useStore($UsersStore)
const [uStore,setUStore] = useState(usersStore)
const [filterState,setFilterState] = useState('Все')
const [currentPage,setCurrentPage] = useState(1)

const paginate = (number: number) =>  setCurrentPage(number)

    return( 
        <Container>
          <AdminHeader/>
          <BodyContainer>
<StyledMenu><PaginatedMenu currentPage={0}/></StyledMenu>
          <UsersList>
          <FilterContainer>
          <StyledUsers>Участники</StyledUsers>
          <MembersFilter state={filterState} setState={setFilterState} action={usersStore} setAction={setUStore}/>
          </FilterContainer>
        <MembersHeader/>
        {uStore.map((user,index) => { console.log(index+1); if(index+1 <= 6*currentPage && index+1 > (currentPage-1)*6) {return <User avatar={user.avatar} name={user.name} surname={user.surname} description={user.description} status={user.status}  key={user.id}/>}})}
        <PaginatedList uStore={uStore} currentPage={currentPage} paginate={paginate}/>
        </UsersList>
        </BodyContainer>
        <Footer/>
        </Container>
    )
}