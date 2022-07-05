/* eslint-disable array-callback-return */
import styled from "@emotion/styled"
import { useStore } from "effector-react"
import { MouseEventHandler, useEffect, useRef, useState } from "react"
import { AdminHeader } from "../../features/AdminPanelHeader"
import { MembersFilter } from "../../features/MembersFilter"
import { MembersHeader } from "../../features/MembersHeader"
import { NoData } from "../../features/NoData"
import { PaginatedList } from "../../features/PaginatedList"
import { PaginatedMenu } from "../../features/PaginatedMenu"
import { User } from "../../features/User"
import { LoaderGlobal } from "../../processes/Loader"
import { Footer } from "../../shared/ui/Footer"
import { $LoaderStore, setStateEv } from "../../store/LoaderStore"
import { $UsersStore, getUsers } from "../../store/UsersStore"
const Container = styled.div`
    background-color: #FFFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow:hidden;
  @media (max-width: 990px) {
    flex-direction:column;
    }
    `
    const FilterContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin: 16px 0 0 24px;
    @media(max-width:768px){
    flex-direction:column;
    align-items:start;
    margin: 16px 0 20px 24px;
    }
    `
    

  const StyledUsers = styled.p`
font-family: 'Factor A' ;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
@media(max-width:768px){
  margin: 8px 0 16px 0;
}
`
const BodyContainer = styled.div`
display:flex;
flex-direction:row;
@media (max-width: 768px) {
  flex-direction:column;
  width:100%;
  }
`
const UsersList = styled.div`
display:flex;
flex-direction:column;
margin-left:24px;
@media(max-width:900px){
  width:510px;
}
@media(max-width:768px){
  width:100%;
  overflow-x:auto;
  margin-left:0px;
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
const RadioButton = styled.input`
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
width:9px;
height:9px;
background:#E0E0E0;
cursor:pointer;
border-radius:1px;
margin: 0 5px 0 5px;
&:checked{
  background:#585CC6;
}
`
const RadioContainer = styled.div`
@media(max-width:768px){
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}
`
const StyledContaner = styled.div`
display:flex;
flex-direction:column;
width:933px;
min-width:500px;
@media(max-width:1220px){
  width:auto;
}
@media(max-width:768px){
min-width:0;
min-height:400px;
}
`
const ContainerButton = styled.div`
display:none;
@media(max-width:768px){
  display:flex;
  margin-right:11px;
}
`
export const AdminPanelMembers:React.FC = () =>{
  useEffect(() => {
    setStateEv()
    getUsers().then(() => setStateEv())
  },[])
const usersStore = useStore($UsersStore);
const loaderStore = useStore($LoaderStore);
const [uStore,setUStore] = useState(usersStore);
const [filterState,setFilterState] = useState('Все');
const [currentPage,setCurrentPage] = useState(1);
const paginate = (number: number) =>  setCurrentPage(number);
const firstInput:React.MutableRefObject<HTMLInputElement | null > = useRef(null);
const secondInput:React.MutableRefObject<HTMLInputElement | null > = useRef(null);
const area:React.MutableRefObject<HTMLDivElement | null > = useRef(null);
const optionClick = (e: React.MouseEvent) => {
  if(firstInput.current !== null && e.currentTarget.id === firstInput.current.id){
    if(area.current) {area.current.scrollLeft = 0 } 
  }else if(secondInput.current !== null && e.currentTarget.id === secondInput.current.id){
    if(area.current) {area.current.scrollLeft = 1000 } 
  }
}
useEffect(() => {
  setUStore(usersStore);
},[usersStore])

const usersList = <StyledContaner><FilterContainer>
<StyledUsers>Участники</StyledUsers>
<RadioContainer><MembersFilter state={filterState} setState={setFilterState} action={usersStore} setAction={setUStore}/>
<ContainerButton>
    <RadioButton onClick={optionClick} ref={firstInput} id="01" type="radio" name="r" value="1" />
    <RadioButton onClick={optionClick} ref={secondInput} id="02" type="radio" name="r" value="2" />
</ContainerButton></RadioContainer>

</FilterContainer><UsersList ref={area}>
          
        <MembersHeader/>
        {uStore.map((user,index) => {  if(index+1 <= 6*currentPage && index+1 > (currentPage-1)*6) {return <User profileImage={user.profileImage && `https://academtest.ilink.dev/images/${user.profileImage}`} firstName={user.firstName} smallAboutMe={user.smallAboutMe} academyStatus={user.academyStatus} key={user.id} lastName={user.lastName}/>}})}
        </UsersList>
        <PaginatedList uStore={uStore} currentPage={currentPage} paginate={paginate}/></StyledContaner>
const staticArea = <>
<BodyContainer>
<StyledMenu><PaginatedMenu currentPage={0}/></StyledMenu>
{usersStore.length > 0 ? usersList : <NoData text={"Здесь еще нет данных..."}/>}
</BodyContainer>
</>
    return( 
        <Container>
          <AdminHeader/>
          {loaderStore ? <LoaderGlobal/> : staticArea}
          <Footer/>
        </Container>
    )
}